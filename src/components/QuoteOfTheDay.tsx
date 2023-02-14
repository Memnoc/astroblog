import type { FunctionalComponent } from 'preact';
import { h } from 'preact';

const data = await fetch('https://api.quotable.io/random').then((response) =>
  response.json()
);

// Components that are build-time rendered also log to the CLI.
// When rendered with a client:* directive, they also log to the browser console.
console.log(data);

const QuoteOfTheDay: FunctionalComponent = () => {
  // Output the result to the page
  return <div class="quote-text" >{JSON.stringify(data.content)}</div>;
};

export default QuoteOfTheDay;
