import React from "react";

class Button extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    addCount =()=>{
        this.setState(
            {
                count : this.state.count+1
            }
        )
        
    }
    subCount =()=>{
        this.setState(
                {
                    count : this.state.count-1
                })
    }
    resetCount = ()=>{
        this.setState({
            count: 0
        })
    }
  render() {
    return (

  <div>
   <button className='inc' onClick={this.addCount}>^-Increase Count-^</button>
   <br/>
   <button className='dec' onClick={this.subCount}>v-Decrease Count-v</button>
   <br/>
   <button className='reset' onClick={this.resetCount}>>Reset Counter<</button>
   <h1>Current Count: {this.state.count}</h1>
  </div>
    );
  }
}

export default Button