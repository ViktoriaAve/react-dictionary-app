import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Photos from "./Photos";
import Results from "./Results";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyWord);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

   function handleResponse(response) {
      setResults(response.data[0]);
   } 

function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
    
}

   function search() {
       // documentation : https://dictionaryapi.dev/ 
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        // documentation : https://www.pexels.com/api/documentation/#photos-search
        let pexelsApiKey = "563492ad6f91700001000001e2c1629981e0402db2c01ef17c30e30a";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
   }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();

    }

    if (loaded) {
    return (
        <div className="Dictionary">
            <section> 
            <h1>Dictionary</h1>
            <h2 className="subtitle" >What word do you want to look up?</h2>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleKeywordChange} placeholder="Type here..." className="Dictionary-search-bar"/>
                <button className="Dictionary-search-button">Search🔍</button>
            </form>
            </section>
            <Results results={results}/>
            <Photos photos={photos} />
        </div>
    )
}
else {
    load();
    return "Loading";
}
}