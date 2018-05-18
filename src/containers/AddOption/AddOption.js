import React, { Component } from 'react';

// 3rd PARTY PACKAGES
import styled from 'styled-components';

const Container = styled.section`
  background-color: #1c313a;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  background-color: #555;
  border: none;
  border-bottom: 4px solid #102027;
  color: #ddd;
  flex: 1;
  outline: none;
  padding: 1rem;
`;

const Button = styled.button`
  background-color: #0081cb;
  border: none;
  margin-left: 1rem;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4);
  color: #fff;
  cursor: pointer;
  flex: 0 0 auto;
  outline: none;
  padding: 1rem;
  text-transform: uppercase;
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background-color: #00b0ff;
  }

  :disabled {
    background-color: #718792;
    color: #ccc;
    cursor: not-allowed;
  }

  &:active {
    background-color: #69e2ff;
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
`;

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

    if (errorMsg) {
      // if there is an error, keep the input and set the error
      this.setState(() => ({ error: errorMsg }));
    } else {
      // if there isnt, clean the input and the error
      this.setState(() => ({ inputText: '', error: errorMsg }));
    }

    e.target.option.focus();
  };

  render() {
    const { inputText, error } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleAddOption}>
          {error && <p>{error}</p>}
          <Input
            type="text"
            name="option"
            id="option"
            value={inputText}
            onChange={this.handleInputChange}
            autoFocus
          />
          <Button type="submit" disabled={inputText.length === 0}>
            Add Option
          </Button>
        </Form>
      </Container>
    );
  }
}

export default AddOption;
