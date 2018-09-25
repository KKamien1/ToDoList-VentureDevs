import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import classnames from "classnames";
import * as actions from "../actions";

class List extends Component {
  constructor() {
    super();
    this.state = {
      textEdited: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state.isEdited = nextProps.todos.filter(todo => todo.edition);
    if (this.state.isEdited.length)
      this.setState({ textEdited: this.state.isEdited[0].text });
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
    this.setState({ [e.target.name]: e.target.value });
  }
  createItems(filtered) {
    return filtered.map((todo, index) => {
      if (todo.edition) {
        return (
          <li key={index} className="item columns">
						<div className="column is-two-thirds">
							<input
								className="input is-large is-rounded"
								name="textEdited"
								value={this.state.textEdited}
								onChange={this.onChange}
							/>
						</div>
            <div className="column">
						<div className="is-pulled-right">
							<button
								className="button is-large is-rounded has-background-primary"
								onClick={() => this.props.cancelEdit(index)}
							>
								Cancel
							</button>
							<button
								className="button is-large is-rounded has-background-primary"
								onClick={() => this.props.saveItem(index, this.state.textEdited)}
							>
								Save
							</button>
							</div>
						</div >
          </li>
        );
      }
      return (
        <li key={index} className="item columns is-mobile">
          <span
            className={classnames("column is-size-5-mobile is-three-quarters-desktop " , { "item--done": todo.completed })}
            onClick={() => this.props.toggleItem(index)}
          >
            {todo.text}
					</span>
          <div className="column">
						<div className="is-pulled-right">
							<button
								className={classnames("item__button button is-rounded ", { "button--active": todo.completed })}
								onClick={() => this.props.toggleItem(index)}
							>
								<span className="icon has-text-success"><i className={classnames("icon" , { "ion-md-checkmark": todo.completed })} /></span>
							</button>
							<button
								className="item__button button is-rounded "
								onClick={() => this.props.editItem(index)}
							>
								<span className="icon has-text-success"><i className="icon ion-md-create" /></span>
							</button>
							<button	className="button is-rounded"
								onClick={() => this.props.deleteItem(index)}
							>
								<span className="icon has-text-success"><i className="icon ion-md-close-circle-outline" /></span>
								</button>
						</div>
					</div>
        </li>
      );
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
