import React, { Component } from 'react';
import './App.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import OptionList from '../../components/OptionsList/OptionsList';
import Decision from '../../components/Decision/Decision';

class App extends Component {
  state = {
    options: [
      {
        id: 0,
        text: 'My first task'
      },
      {
        id: 1,
        text: 'My second task'
      },
      {
        id: 2,
        text: 'My third task'
      }
    ]
  };

  handleDeleteOption = optionId => {
    console.log('handleDeleteOption', optionId);
  };

  handleDecision = () => {
    const { options } = this.state;
    const randomNum = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomNum];

    alert(`You need to do ${selectedOption.text}!`);
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
        <OptionList
          options={options}
          handleDeleteOption={this.handleDeleteOption}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
