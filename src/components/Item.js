import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import classnames from "classnames";
import * as actions from "../actions/";

class Item extends Component {
  // constructor(props) {
  //   super(props);
  //   const { dispatch } = props;
  // }

  createListItem() {
    console.log("createItem", this.props);
    return this.props.todos.map((todo, index) => (
      <li
        key={index}
        className="item "
        onClick={() => this.props.selectItem(index)}
      >
        <span className={classnames({ "item--done": todo.completed })}>
          {todo.text}
        </span>
        <button
          className="is-pulled-right delete is-large"
          onClick={() => this.props.deleteItem(index)}
        />
        <button className="button is-rounded is-pulled-right">
          <span className="icon has-text-success">
            <i className="icon ion-md-checkmark-circle-outline" />
          </span>
          Done
        </button>
        <button className="button is-rounded is-pulled-right">Edit</button>
      </li>
    ));
  }

  render() {
    const { todos } = this.props;
    console.log("render", this.props);
    return (
      <div className="container">
        <ul className="list">{this.createListItem()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ selectItem: selectItem }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
