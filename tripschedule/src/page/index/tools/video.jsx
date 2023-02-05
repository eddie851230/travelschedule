import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import "./video.css";

const Video = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const oSearchBar = useRef(null);
  const oIcon = useRef(null);
  const oClear = useRef(null);
  const oText = useRef(null);
  const [value, setValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInput = (event) => {
    setValue(event.target.value);
    setFilteredResults(
      searchResults.filter((result) =>
        result.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
    setShowDropdown(true);
    
  };
  useEffect(() => {
    if (oIcon.current) {
      oIcon.current.addEventListener('click', handleClick);
      oClear.current.addEventListener('click', handleClick);
      // return () => {
      //   oIcon.current.removeEventListener('click', handleClick);
      //   oClear.current.removeEventListener('click', handleClick);
      // };
    }

    function handleClick() {
      if (oSearchBar.current) {
        oSearchBar.current.classList.toggle('chengeWidth');
      }
      oText.current.value = '';
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get('http://localhost:8000/attractions_info', {
      params: { keyword: oText.current.value }
    });
    setSearchResults(response.data);
    console.log(searchResults);
  }

  return (
    <section className="home">
      <video src="/mida/pexels-hide-658157102.mp4" preload="auto" autoPlay muted loop />
      <img src="/img/mask.jpg" className='mask' />
      <div className='vediotext'><h2>WELCOME TO TOKYO</h2></div>
      <div className="vh">
        <div ref={oSearchBar} className='searchBar'>
          <div ref={oIcon} className='iconvi'></div>
          <form onSubmit={handleSubmit}>
            <div className='textInput'>
              <input 
              type="text" 
              placeholder="請輸入搜尋內容..." 
              ref={oText} 
              value={value} 
              onInput={handleInput} 
              />
              <input type="submit" value=">" id="go" />
              <div className='clear' ref={oClear}></div>
            </div>
          </form> 
        </div>
        {filteredResults.length >0 && (
          <ul>
            {filteredResults.map((result) => (
              <li key={result.id}>{result.name}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
export default Video;