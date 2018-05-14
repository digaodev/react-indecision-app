import React, { Component } from 'react';

class AddOption extends Component {
  state = {
    inputText: '',
    error: ''
  };

  handleInputChange = evt => {
    const inputValue = evt.target.value.trim();

    if (inputValue.length > 0) this.setState(() => ({ inputText: inputValue }));
  };

  handleAddOption = e => {
    e.preventDefault();

    const { inputText } = this.state;
    const { handleAddOption } = this.props;

    const errorMsg = handleAddOption(inputText);

    this.setState(() => ({ inputText: '', error: errorMsg }));

    e.target.option.focus();
  };

  render() {
    const { inputText, error } = this.state;

    return (
      <section className="add-option">
        <form onSubmit={this.handleAddOption}>
          {error && <p>{error}</p>}
          <input
            type="text"
            name="option"
            id="option"
            value={inputText}
            onChange={this.handleInputChange}
            autoFocus
          />
          <button type="submit" disabled={inputText.length === 0}>
            Add Option to Task List
          </button>
        </form>
      </section>
    );
  }
}

export default AddOption;
