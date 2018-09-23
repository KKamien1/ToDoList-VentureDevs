import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Item from "./components/Item";
import AddButton from "./components/AddButton";
import Footer from "./components/Footer";

import "./App.css";
import "./bulma.css";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header has-background-info">
              <h1 className="App-title is-size-1">TODO LIST</h1>
            </header>
            <div class="section">
              <div className="container fluid">
                <AddButton />
                <Item />
                <Footer />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
