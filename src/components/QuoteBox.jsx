import React from 'react';

const QuoteBox = ({ randomQuote, randomColors, getRandomAll }) => {
  const objectStyle = {
    color: randomColors,
  };
  const objectBgStyle = {
    backgroundColor: randomColors,
  };
  return (
    <div className="card" style={objectStyle}>
      <header>
        <div className="card_quote">
          <i class="fa-solid fa-quote-left"></i>
        </div>
      </header>
      <div className="card_container">
        <h3 className="card_text">{randomQuote.quote}</h3>
        <p className="card_sub">{randomQuote.author}</p>
        <div className="btn">
          <button
            onClick={getRandomAll}
            className="card_btn"
            style={objectBgStyle}
          >
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
