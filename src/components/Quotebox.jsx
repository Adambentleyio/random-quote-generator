import React, { useEffect, useState } from "react";

const Quotebox = (props) => {
  const [data, setData] = useState({});
  const [author, setAuthor] = useState("Epictetus");
  const [quote, setQuote] = useState("Suck them titties");
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

  const getNewQuote = () => {
    let index = Math.floor(Math.random() * data.length);
    setAuthor(data[index].author),
      setQuote(data[index].text),
      setTweet(
        "https://twitter.com/intent/tweet/?text=" +
          data[index].text.replace(/ /g, "+")
      );
  };

  // async function getNewQuote() {
  //   const response = await fetch("https://type.fit/api/quotes")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const index = Math.floor(Math.random() * data.length);
  //       setAuthor(data[index].author),
  //         setQuote(data[index].text),
  //         setTweet(
  //           "https://twitter.com/intent/tweet/?text=" +
  //             data[index].text.replace(/ /g, "+")
  //         );
  //     });
  // }

  //   const getNewQuote = (response) => {
  //     let index = Math.floor(Math.random() * response.length);
  //     setAuthor(response[index].author),
  //       setQuote(response[index].text),
  //       setTweet(
  //         "https://twitter.com/intent/tweet/?text=" +
  //           response[index].text.replace(/ /g, "+")
  //       );
  //   };

  //   const quoteArr = [
  //     { text: "You are going to die", author: "Adam Bentley" },
  //     {
  //       text: "Easy decisions - hard life, Hard decisions - easy life",
  //       author: "Unknown",
  //     },
  //     { text: "Suck them titties!!", author: "Epictitus" },
  //   ];

  //   const getNewQuote = () => {
  //     const index = Math.floor(Math.random() * quoteArr.length);
  //     console.log(index);
  //     setAuthor(quoteArr[index].text),
  //       setQuote(quoteArr[index].author),
  //       setTweet(
  //         "https://twitter.com/intent/tweet/?text=" +
  //           quoteArr[index].text.replace(/ /g, "+")
  //       );
  //   };

  // handle Click that does a bunch of stuff and calls the api function getNewquote

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
