import logo from './pekodead.png';
import './App.css';
import Button from './sitecomp/Button';
import Employee from './sitecomp/Employee';

function App(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
                <Button/>
        <p>
          "Hey you, you're finally awake, you tried to cross the border but ultimately failed didn't you?."
        </p>
        {Employee()}
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          CLICK THIS LINK TO FIND OUT HOW NINE OUT OF TEN EXPERTS HATE THIS MAN WITH HIS ONE SIMPLE TRICK IN LIFE
        </a>
      </header>
    </div>
  );
}

export default App;
