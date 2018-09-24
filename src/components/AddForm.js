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
		this.handleKeyPress = this.handleKeyPress.bind(this)
  }

 handleKeyPress(event) {
	if (event.keyCode === 13) {
		this.props.addItem(this.state.addTodo)}
		else {return}
}

componentDidMount() {
	this.addInput.focus(); 
	 document.addEventListener('keypress', this.handleKeyPress);
}

componentWillUnmount() {
	 document.removeEventListener('keypress', this.handleKeyPress);
}


  componentWillReceiveProps(nextProps) {
    this.setState({ addTodo: "" });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
		console.log('this.props', this.props)
    return (
			<div className="section">
			<div className="container">
      <div className="columns">
        <div className="column is-three-quarters">
          <input
						id="add-input"
            type="text"
            name="addTodo"
            className="add-input input is-large is-rounded"
						value={this.state.addTodo}
						ref={(input) => { this.addInput = input; }} 
            onChange={this.onChange}
            placeholder="add task"
          />
        </div>
        <div className="column">
          <button
            className="add-button button is-large is-rounded is-fullwidth"
            onClick={() => this.props.addItem(this.state.addTodo)}
          >
            Add
          </button>
        </div>
      </div>
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
