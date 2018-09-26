import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchText: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ searchText: "" });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    this.props.filterAction({ type: "SEARCH", text: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="column ">
          <input
            id="add-input"
            type="text"
            name="searchText"
            className="add-input input is-middle is-rounded is-half"
            value={this.state.searchText}
            onChange={this.onChange}
            placeholder="search task"
          />
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
)(Search);
