import React from "react";
import { useState, useEffect } from "react";
import "./Quote.style.css";

const Quote = () => {
  const [aphorism, setAphorism] = useState([]);

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => setAphorism(data));
  };
  useEffect(() => {
    getQuote();
  }, []);
  console.log(aphorism[0].author);
  return (
    <div className="container">
      <div>
        <h3>Quote</h3>
      </div>
      <div>
        <button>Get Quote</button>
      </div>
    </div>
  );
};

export default Quote;
