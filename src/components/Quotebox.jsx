import React, { useEffect, useState } from "react";

const Quotebox = (props) => {
  const [data, setData] = useState({});
  const [author, setAuthor] = useState("Epictetus");
  const [quote, setQuote] = useState("If you need a witness, be your own");
  const [tweet, setTweet] = useState("https://twitter.com/intent/tweet/?text=");

  // api to get the quote data

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://type.fit/api/quotes");
      const json = await data.json();
      console.log(json);

      setData(json);
    };

    fetchData().catch(console.error);
  }, []);

  // find random item from data array and update state

  const getNewQuote = () => {
    let index = Math.floor(Math.random() * data.length);
    setAuthor(data[index].author),
      setQuote(data[index].text),
      setTweet(
        "https://twitter.com/intent/tweet/?text=" +
          data[index].text.replace(/ /g, "+")
      );
  };


  return (
    <div class="quote-box">
      <h3 id="text">{quote}</h3>
      <h4 id="author" style={{ color: "var(--secondary" }}>
        {author}
      </h4>
      <div>
        <button id="new-quote" onClick={getNewQuote}>
          More wisdom
        </button>
        <button>
          <a id="tweet-quote" href={tweet}>
            Tweet
          </a>
        </button>
      </div>
    </div>
  );
};

export default Quotebox;
