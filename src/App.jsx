import { useState } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import quotes from './json/quotes.json';
import colors from './utils/colors';

function App() {
  //Here we declare a random variable that will return a random phrase
  const getRandomElement = (arr) => {
    const indexRandom = Math.floor(Math.random() * arr.length);
    return arr[indexRandom];
  };
  //We call random for the user and the color
  let quoteRandom = getRandomElement(quotes);
  let colorsRandom = getRandomElement(colors);

  const [randomQuote, setRandomQuote] = useState(quoteRandom);
  const [randomColors, setRandomColors] = useState(colorsRandom);
  //We change the color of the background
  const objStyle = {
    backgroundColor: randomColors,
  };
  //
  const getRandomAll = () => {
    quoteRandom = getRandomElement(quotes);
    colorsRandom = getRandomElement(colors);
    //
    setRandomQuote(quoteRandom);
    setRandomColors(colorsRandom);
  };
  return (
    <div className="App" style={objStyle}>
      <h1>
        <QuoteBox
          randomQuote={randomQuote}
          randomColors={randomColors}
          getRandomAll={getRandomAll}
        />
      </h1>
    </div>
  );
}

export default App;
