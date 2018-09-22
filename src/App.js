import React, { Component } from "react";
import { Provider } from "react-redux";
import Item from "./components/Item";

import "./App.css";
import "./bulma.css";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Item />
        </div>
      </Provider>
    );
  }
}

export default App;
