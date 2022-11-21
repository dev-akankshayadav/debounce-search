import React, { useEffect, useState } from "react";
import "./InfiniteScroll.css";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

const InfiniteScroll = () => {
  const pageNo = 1;
  const [state, setState] = useState([]);
  const [page, setPage] = useState(pageNo);
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
      .then((res) => res.json())
      .then((json) => setState(prevState => [...prevState, ...json.data]));
      setIsLoading(false);
  }, [page]);
  
  const scrollToEnd = () => {
    setIsLoading(true);
    setPage(prevpage => prevpage + 1);
  };

  window.onscroll = function () {
    //check whether we have reached end of page;
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };
  return (
    isLoading ? <LoadingSpinner /> :
    <div className="main-div">
      {state.length > 0 &&
        state.map((el, i) => (
          <div className="container" key={i}>
            <h4>Id: {el._id}</h4>
            <h4>Name: {el.name}</h4>
            <h4>Trips: {el.trips}</h4>
          </div>
        ))}
    </div>
  );
};

export default InfiniteScroll;
