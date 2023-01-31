import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import "./video.css";

const Video = () => {
  const [searchResults, setSearchResults] = useState([]);
  const oSearchBar = useRef(null);
  const oIcon = useRef(null);
  const oClear = useRef(null);
  const oText = useRef(null);

  useEffect(() => {
    if (oIcon.current) {
      oIcon.current.addEventListener('click', handleClick);
      oClear.current.addEventListener('click', handleClick);
      return () => {
        oIcon.current.removeEventListener('click', handleClick);
        oClear.current.removeEventListener('click', handleClick);
      };
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
    const response = await axios.get("http://localhost:8000/search", {
      params: { keyword: oText.current.value }
    });
    setSearchResults(response.data);
  };

  return (
    <section className="home">
      <video src="/mida/tower hight.mp4" preload="auto" autoPlay muted loop type="video/mp4" />
      <div className="vh">
        <div ref={oSearchBar} className='searchBar'>
          <div ref={oIcon} className='iconvi'></div>
          <form onSubmit={handleSubmit}>
            <div className='textInput'>
              <input type="text" placeholder="請輸入搜尋內容..." ref={oText} />
              <input type="submit" value=">" id="go" />
              <div className='clear' ref={oClear}></div>
            </div>
          </form>
        </div>
        <ul>
          {searchResults.map(result => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Video;
