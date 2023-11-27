import React from 'react'
class Counter extends React.Component{
    
    constructor(){
        super();
        this.state={
       value:0
        }
        
      
        this.Increament=this.Increament.bind(this)
        this.Decreament=this.Decreament.bind(this)
    }
    render(){
        return(
            <div>
      <h1>COUNTER1</h1>
      <button  onClick={this.Increament}>+</button>
      <span>&nbsp;{this.state.value} &nbsp; </span>
      <button onClick={this.Decreament}>-</button>
      

    </div>
        )
    }

    Decreament(){
      
        this.setState({
            
           value:--this.state.value
        })
       
    }
       
    Increament(){
        
        this.setState({
            
           value:++this.state.value
        })
       
    }
}

export default Counter;