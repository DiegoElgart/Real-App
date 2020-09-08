import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import SignUp from "./components/singup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./components/signin";
import userService from "./services/userService";
import Logout from "./components/logout";
import http from "./services/httpService";
import { apiUrl } from "./config.json";
import BizSignUp from "./components/bizSignup";
import CreateCard from "./components/createCard";
import ProtectedRoute from "./components/common/protectedRoute";
import MyCards from "./components/myCards";
import editCard from "./components/editCard";
import DeleteCard from "./components/deleteCard";

class App extends Component {
  state = {};
  componentDidMount() {
    const user = userService.getCurrentUser();
    this.setState({ user });

    if (user) {
      http.get(`${apiUrl}/users/me`).then(console.log);
    }
  }

  render() {
    const { user } = this.state;
    return (
      <div className='d-flex flex-column min-vh-100'>
        <ToastContainer />
        <header>
          <Navbar user={user} />
        </header>
        <main className='container-fluid flex-fill'>
          <Switch>
            <ProtectedRoute
              path='/my-cards/delete/:id'
              component={DeleteCard}
              biz={true}
            />
            <ProtectedRoute
              path='/my-cards/edit/:id'
              component={editCard}
              biz={true}
            />
            <ProtectedRoute path='/my-cards' component={MyCards} biz={true} />
            <ProtectedRoute
              path='/create-card'
              component={CreateCard}
              biz={true}
            />
            <Route path='/biz-signup' component={BizSignUp} />
            <Route path='/logout' component={Logout} />
            <Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
            <Route path='/about' component={About} />
            <Route path='/' exact component={Home} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
