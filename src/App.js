import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header.component';
import Footer from './Components/footer.component';
import Calculator from './Components/calculator';

class App extends Component {
  constructor(){
    super();
    this.state = {name:"SitKP",age:20};
  }
  set(){
    this.setState({name:"BoB"});
  }
  getVal(){
    return "getval";
  }
  setAge(e){
    const age = e.target.value;
    this.setState({age:age});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Calculator />
      </div>
    );
  }
}
const fn = (e) =>{

}
export default App;
