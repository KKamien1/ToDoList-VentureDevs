import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import classnames from "classnames";
import * as actions from "../actions";

class FilterBox extends Component {
  constructor() {
    super();
    this.state = { isEdited: false };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if (
      this.props.todos.filter(todo => todo.edition).length ||
      document.getElementById("add-input") === document.activeElement
    ) {
      this.setState({ isEdited: true });
    }

    if (!this.state.isEdited) {
      switch (event.keyCode) {
        case 97:
          this.props.filterAction({ type: "show-all" });
          break;
        case 100:
          this.props.filterAction({ type: "show-done" });
          break;
        case 117:
          this.props.filterAction({ type: "show-todo" });
          break;
        case 116:
          this.props.toggleAll();
          break;
        default:
          return;
      }
    }
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyPress);
  }

  render() {
    return (
      <div className="container">
        <ul className="filter">
          <li>
            <button
              className={classnames("filter__button button is-rounded", {
                "button--active": this.props.filterType === "show-all"
              })}
              onClick={() =>
                this.props.filterAction({
                  type: "show-all"
                })
              }
            >
              All
            </button>
            <button
              className={classnames("filter__button  button is-rounded", {
                "button--active": this.props.filterType === "show-done"
              })}
              onClick={() =>
                this.props.filterAction({
                  type: "show-done"
                })
              }
            >
              Done
            </button>
            <button
              className={classnames("filter__button  button is-rounded", {
                "button--active": this.props.filterType === "show-todo"
              })}
              onClick={() =>
                this.props.filterAction({
                  type: "show-todo"
                })
              }
            >
              To Do
            </button>
            <button
              className="filter__button button is-rounded"
              onClick={() => this.props.toggleAll()}
            >
              Toggle
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  filterType: state.filterType
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBox);
