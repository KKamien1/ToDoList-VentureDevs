import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import classnames from "classnames";
import * as actions from "../actions";

class List extends Component {
	constructor() {
    super();
    this.state = {
      textEdited :""
    };
    this.onChange = this.onChange.bind(this);
  }

	componentWillReceiveProps(nextProps) {
		this.state.isEdited = nextProps.todos.filter(todo => todo.edition)
		console.log('isEdited', this.state.isEdited)
		if(this.state.isEdited.length)	this.setState({textEdited:this.state.isEdited[0].text})
	}

  getList(filterType) {
    switch (filterType) {
      case "show-done":
        return this.props.todos.filter(todo => todo.completed);
      case "show-todo":
        return this.props.todos.filter(todo => !todo.completed);
      default:
        return this.props.todos;
    }
  }
	onChange(e) {
		console.log('state', this.state)
    this.setState({ [e.target.name]: e.target.value });
  }
  createItems(filtered) {
    return filtered.map((todo, index) => {

				if (todo.edition) {
					return 	(
						<li key={index} className="item is-flex">
							<input className="input is-large is-tree-fifths is-rounded" name="textEdited" value={this.state.textEdited} onChange={this.onChange} />
							<button className="button is-large is-one-fifth is-rounded has-background-success" onClick={() => this.props.cancelEdit(index)} >Cancel</button>
							<button className="button is-large is-one-fifth is-rounded has-background-success" onClick={() => this.props.saveItem(index, this.state.textEdited)} >Save</button>
						</li>  
					)
				}
				return (

				<li	key={index}	className="item">
        	<span className={classnames({ "item--done": todo.completed })} onClick={() => this.props.toggleItem(index)}> {todo.text} </span>
					<button
						className="is-pulled-right delete is-large"
						onClick={() => this.props.deleteItem(index)}
						/>
					<button className="button is-rounded is-pulled-right" onClick={() => this.props.toggleItem(index)}>
						<span className="icon has-text-success">
							<i className="icon ion-md-checkmark-circle-outline" />
						</span>
					</button>
					<button className="button is-rounded is-pulled-right" onClick={() => this.props.editItem(index)} >Edit</button>
				</li>
				)
	});
  }

  render() {
    const filtered = this.getList(this.props.filterType);
    return (
			<div className="section">
			<div className="container fluid">
      <div className="container">
        <ul className="list">{this.createItems(filtered)}</ul>
      </div>
      </div>
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
)(List);
