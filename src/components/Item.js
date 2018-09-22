import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectItem } from "../actions/";

class Item extends Component {
  createListItem() {
    return this.props.todos.map((todo, index) => (
      <li
        key={index}
        className="item"
        onClick={() => this.props.selectItem(todo)}
      >
        {todo.text} <button>Done</button>
        <button>Edit</button>
        <button>Delete</button>
      </li>
    ));
  }

  render() {
    return <ul>{this.createListItem()}</ul>;
  }
}

const mapStateToProps = state => ({ todos: state.data.todos });
const matchDispatchToProps = dispatch =>
  bindActionCreators({ selectItem }, dispatch);

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Item);
