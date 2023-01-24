import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  const [greeting, setGreeting] = useState(randomMessage());


  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <br />
      <button class="greeting-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setGreeting(randomMessage())}>
        Change greeting!
      </button>
    </div>
  );
}


