import React, { Component } from 'react';

export default class Cell extends Component{
  constructor(props){
    super
    this.state={color: `${this.props.val}`}
  }
    handleClick(){
      this.setState({color: "#00F"})
    }
  render(){
    return(
      <div onClick={handleClick} style={{backgroundcolor: `${this.state.color}`}}>
        
      </div>)
  }
}