import React from 'react';

class Calculator extends React.Component {
    constructor(){
        super();
        
        this.state = {sum1:"", sum2:""};
      }
      setNum(e){
        const  num = e.target.value;
        this.setState({sum1:num});
      }
      setNum2(e){
        const  num = e.target.value;
        this.setState({sum2:num});
      }
    render(){
        return (
            <div>
                <h1>Num1 : {this.state.sum1}</h1>
                <input onChange={this.setNum.bind(this)}></input>
                <h1>Num2 : {this.state.sum2}</h1>
                <input onChange={this.setNum2.bind(this)}></input>
                <h1>Total : {this.state.sum1+this.state.sum2}</h1>
            </div>
        );
    }
}
export default Calculator;