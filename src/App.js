import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";

function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='container-fluid flex-fill'>
        <Switch>
          <Route path='/about' component={About}></Route>
          <Route path='/' exact component={Home}></Route>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
