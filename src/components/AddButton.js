import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import classnames from "classnames";
import * as actions from "../actions/";

class AddButton extends Component {
  constructor() {
    super();
    this.state = {
      addTodo: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ addTodo: "" });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-three-quarters">
          <input
            type="text"
            name="addTodo"
            className="input is-large is-rounded"
            value={this.state.addTodo}
            onChange={this.onChange}
            placeholder="add task"
          />
        </div>
        <div className="column">
          <button
            className="button is-large is-rounded is-fullwidth has-background-success"
            onClick={() => this.props.addItem(this.state.addTodo)}
          >
            Add
          </button>
        </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);
