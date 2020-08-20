import React from "react";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='container-fluid flex-fill'>this is the main</main>
      <footer>this is the footer</footer>
    </div>
  );
}

export default App;
