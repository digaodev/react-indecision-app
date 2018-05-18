import React, { Component } from 'react';

// 3rd PARTY PACKAGES
import uuidv4 from 'uuid/v4';
import styled from 'styled-components';

// CONTAINERS
import AddOption from '../AddOption/AddOption';

// COMPONENTS
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import OptionList from '../../components/OptionsList/OptionsList';
import Decision from '../../components/Decision/Decision';
import OptionModal from '../../components/OptionModal/OptionModal';

const FlexColumnContainer = styled.div`
  background-color: #37474f;
  color: #eee;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

class App extends Component {
  state = {
    options: [],
    selectedOption: null
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {}
  }

  componentDidUpdate(prevProps, prevState) {
    const { options } = this.state;

    // There is no 'Save Tasks button', so whenever the options list changes in the app state, set the localStorage
    if (prevState.options.length !== options.length) {
      const json = JSON.stringify(options);
      localStorage.setItem('options', json);
    }
  }

  handleDecision = () => {
    const { options } = this.state;
    const randomNum = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomNum];

    this.setState(() => ({ selectedOption: selectedOption }));
  };

  handleAddOption = optionText => {
    const { options } = this.state;

    if (!optionText) {
      return 'Please enter a valid option to add.';
    }

    if (options.find(opt => opt.text === optionText)) {
      return 'This option already exists. Please enter another one.';
    }

    this.setState(prevState => ({
      options: [{ id: uuidv4(), text: optionText }, ...prevState.options]
    }));
  };

  handleDeleteOption = optionId => {
    this.setState(prevState => ({
      options: prevState.options.filter(opt => opt.id !== optionId)
    }));
  };

  handleDeleteAllOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: null }));
  };

  render() {
    const { options, selectedOption } = this.state;

    return (
      <FlexColumnContainer>
        <Header />

        <Decision
          handleDecision={this.handleDecision}
          hasOptions={options.length > 0}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        {options.length === 0 && <p>Please add an option to get started!</p>}
        <OptionList
          options={options}
          handleDeleteOption={this.handleDeleteOption}
          handleDeleteAllOptions={this.handleDeleteAllOptions}
        />
        <OptionModal
          selectedOption={selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />

        <Footer />
      </FlexColumnContainer>
    );
  }
}

export default App;
