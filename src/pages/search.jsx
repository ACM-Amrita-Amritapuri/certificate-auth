 import { useState } from "react";
 import "./search.css"
 import SearchBar  from "../components/searchbar";
import  SearchResultsList from "../components/SearchResultsList";

function Search() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default Search;