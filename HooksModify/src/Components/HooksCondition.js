import React, { Component } from 'react'

export default class HooksCondition extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
         name : ''
      }
    }
    componentDidMount() {
        document.title = 'Cliked'+this.state.count+'times'
    }
    componentDidUpdate(props,states){
        if(states.count != this.state.count)
              document.title = 'Cliked'+this.state.count+'times'
    }
  render() {
    return (
      <div>
        <input type='text' value={this.state.name} onChange={e=> this.setState({name : e.target.value})}/><br/>
        <button onClick={()=> this.setState({ count : this.state.count + 1 })}> Click</button>
      <h1> {this.state.name}</h1>
      </div>
    )
  }
}
