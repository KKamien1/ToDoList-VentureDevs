import React, { Component } from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import List from "./components/List";
import AddForm from "./components/AddForm";
import FilterBox from "./components/Filter";
import Search from "./components/Search";
import Footer from "./components/Footer";
import makecanvas from "./helpers/canvas";
import "./App.sass";
import store from "./store";

class App extends Component {
	
	componentDidMount() {
		makecanvas(document.querySelector('.header'))()
		makecanvas(document.querySelector('.footer'))()
	}
	
	render() {
    return (
      <Provider store={store}>
          <div className="App">
            <Header />
            <AddForm />
            <FilterBox />
            <Search />
            <List />
            <Footer />
          </div>
      </Provider>
    );
  }
}

export default App;
