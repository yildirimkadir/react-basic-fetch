import { useState, useEffect } from "react";
import "./Quote.style.css";

const Quote = () => {
  const [aphorism, setAphorism] = useState([]);

  const [randomNumber, setRandomNumber] = useState(0);

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => setAphorism(data[randomNumber]));
  };

  const handleClick = () => {
    setRandomNumber(Math.floor(Math.random() * 1000) + 1);
    getQuote();
  };

  useEffect(() => {
    getQuote();
  }, []);

  // console.log(aphorism[0].text);
  //   console.log(randomNumber);
  //   console.log(handleClick());
  //

  return (
    <div className="container">
      <div className="text">
        <h3>{aphorism.text}</h3>
        <h4>{aphorism.author}</h4>
      </div>
      <div className="button">
        <button onClick={handleClick}>Get Quote</button>
      </div>
    </div>
  );
};

export default Quote;
