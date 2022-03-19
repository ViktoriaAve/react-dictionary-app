import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

   function handleResponse(response) {
       console.log(response);
   } 

    function search(event) {
        event.preventDefault();

        // documentation : https://dictionaryapi.dev/ 
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_UK/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} placeholder="Type here" className="Dictionary-search-bar"/>
                <button className="Dictionary-search-button">Search</button>
            </form>
        </div>
    )
}