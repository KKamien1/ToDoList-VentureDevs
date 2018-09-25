import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import List from "./components/List";
import AddForm from "./components/AddForm";
import FilterBox from "./components/Filter";
import Footer from "./components/Footer";

import "./bulma/bulma.sass";
import "./App.sass";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <AddForm />
            <FilterBox />
            <List />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
