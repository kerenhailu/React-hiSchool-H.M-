import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage.components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router";
import NavBar from "./Components/NavBar/NavBar.components";
import Routing from "./Components/Router/Router.components";
import { selectOptions } from "@testing-library/user-event/dist/select-options";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Routing />
          <NavBar />
          {/* <HomePage/> */}
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

// מה זה E
// ומה אפשר לעשות איתו
function Comp() {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        console.log(1234);
      }}
    >
      Click me
    </button>
  );
}

function Comp2() {
  return (
    <input
      onChange={(e) => {
        e.preventDefault();
        console.log(1234);
      }}
    />
  );
}

function doit() {
  setTimeout(() => {
    console.log(1234);
  }, 5000);
}

function sleep(n) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, n);
  });
}

async function doit2() {
  await sleep(5000);
  console.log(1234);
}

// תחזיר מספר רנדומלי בין 0-100

function myRandom(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(0.1 + 0.2);

function isPalindrome(str) {
  if (str == str.reverse()) {
    return true;
  } else {
    return false;
  }
}

function isPalindrome2(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
