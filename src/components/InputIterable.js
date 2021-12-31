import React, { Component } from "react";

export class InputIterable extends Component {
  constructor(props) {
      super(props);
      this.changeFName = this.handleFName.bind(this);
    this.changeLName = this.handleLName.bind(this);
  }
  state = {
    fName: this.props.firstName,
    lName: this.props.lastName,
    id: this.props.id,
    index: this.props.index,
  };
  handleFName(e) {
    this.setState({ fName: e.target.value });
  }
  handleLName(e) {
    this.setState({ lName: e.target.value });
  }
  render() {
    let { handleEdit, handleRemove } = this.props;

    return (
      <div className="Input">
        <input
          type="text"
          placeholder="Enter First Name"
          value={this.state.fName}
          onChange={this.changeFName}
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          value={this.state.lName}
          onChange={this.changeLName}
        />
        <button onClick={() => {
            handleRemove(this.state.id);
          }}>Remove</button>
        <button
          onClick={() => {
            handleEdit(this.state.fName, this.state.lName, this.state.id);
          }}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default InputIterable;
