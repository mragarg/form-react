import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import Input from './Input';
import Output from './Output';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    }
  }

  render() {
    return (
      <div className="App">
        <Input 
          handleChange={this._setInputText}
        />
        <Output 
          text={this.state.inputText} 
        />
  
      </div>
    );
  }

  _setInputText = (inputText) => {
    this.setState({
      inputText
    })
  }

}



export default App;
