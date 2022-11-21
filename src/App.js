import "./App.css";
import React from "react";
import InfiniteScroll from "./infiniteScroll/InfiniteScroll"
import BackToTop from "./backtotop/BackToTop";

function App() {
  // const [search, setSearch] = useState([]);

  // const debounce = (func) => {
  //   let timer;
  //   return function (...args) {
  //     const context = this;
  //     if (timer) clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       timer = null;
  //       func.apply(context, args);
  //     }, 500);
  //   };
  // };

  // const handleSearch = (event) => {
  //   const { value } = event.target;
  //   console.log(value);
  //   fetch(`https://demo.dataverse.org/api/search?q=${value}`) 
  //     .then((res) => res.json())
  //     .then((json) => setSearch(json.data.items));
  // };

  // const optimizedSearch = (debounce(handleSearch));
  return (
    <div className="App">
      <h1>Pagination Onscroll </h1>
      <InfiniteScroll />
      <BackToTop />
      {/* <input
        type="text"
        name="search"
        placeholder="Enter to search ..."
        className="search"
        onChange={optimizedSearch}
      />
      {search?.length > 0 && (
        <div className="autocomplete">
          {search.map((el, i) => (
            <div key={i} className={"autocompleteItems"}>
              <span>{el.name}</span>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}

export default App;
