import React, { Component } from 'react';

import uuidv4 from 'uuid/v4';

import './App.css';

// CONTAINERS
import AddOption from '../AddOption/AddOption';

// COMPONENTS
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import OptionList from '../../components/OptionsList/OptionsList';
import Decision from '../../components/Decision/Decision';

class App extends Component {
  state = {
    options: []
  };

  handleDecision = () => {
    const { options } = this.state;
    const randomNum = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomNum];

    alert(`You need to do ${selectedOption.text}!`);
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

  render() {
    const { options } = this.state;

    return (
      <div className="App">
        <Header />
        <Decision
          handleDecision={this.handleDecision}
          hasOptions={options.length > 0}
        />
        <hr />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        <OptionList
          options={options}
          handleDeleteOption={this.handleDeleteOption}
          handleDeleteAllOptions={this.handleDeleteAllOptions}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
