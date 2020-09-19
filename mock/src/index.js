import React, {useState} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Link, useParams } from "react-router-dom";
import Toggle from './components/toggle';


const CompoOne = () => {
  const [text, setText] = useState("");

  return(
    <div>
      <h2>Component1</h2>
      <input type = "text" onChange={(e) => setText(e.target.value)}></input>
      <Link to={`/CompTwo/${text}`}>
        <button>click me</button>
      </Link>
    </div>
  )
}

const CompTwo = () =>{
  const {inputText} = useParams();

  return (
    <div>
      <h2>Component Two </h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => e.target.value}
      >
      </input>
      <Link to ="/">
        <button>click</button>
      </Link>
    </div>
  )
}

const App = () =>{
  return (
    <div>
      <h1>sharing state between siblings using useParams</h1>
      <BrowserRouter>
        <Route path="/" exact component={CompoOne}/>
        <Route path="/CompTwo/:inputText" component={CompTwo}/>
      </BrowserRouter>
      <Toggle/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
