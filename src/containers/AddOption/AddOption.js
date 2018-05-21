import React, { Component } from 'react';

// 3rd PARTY PACKAGES
import styled from 'styled-components';

const Container = styled.section`
  background-color: #1c313a;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ErrorParagraph = styled.p`
  background-color: palevioletred;
  color: #eee;
  font-size: 1.4rem;
  padding: 1rem;
`;

const Input = styled.input`
  background-color: #555;
  border: none;
  border-bottom: 6px solid #102027;
  color: #ddd;
  flex: 1;
  font-size: 1.6rem;
  outline: none;
  padding: 1.2rem;
`;

const Button = styled.button`
  background-color: #0081cb;
  border: none;
  border-radius: 3px;

  box-shadow: 0 6px 8px 1px rgba(0, 0, 0, 0.14),
    0 3px 10px 2px rgba(0, 0, 0, 0.12), 0 3px 3px -3px rgba(0, 0, 0, 0.4);
  color: #fff;
  cursor: pointer;

  outline: none;
  padding: 1.6rem;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

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
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 600px) {
    flex: 0 0 auto;
    margin-left: 1rem;
    padding: 1rem;
  }
`;

class AddOption extends Component {
  state = {
    inputText: '',
    error: ''
  };

  handleInputChange = evt => {
    const value = evt.target.value;
    this.setState(() => ({ inputText: value }));
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
        {error && <ErrorParagraph>{error}</ErrorParagraph>}
      </Container>
    );
  }
}

export default AddOption;
