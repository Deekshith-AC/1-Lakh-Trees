import React from 'react'

export default class ErrorBoundary extends React.Component{
  constructor(props){
    super(props)
    this.state = {error:null, info:null}
  }
  componentDidCatch(error, info){
    this.setState({error, info})
    console.error('ErrorBoundary caught:', error, info)
  }
  render(){
    if(this.state.error){
      return (
        <div style={{padding:40,fontFamily:'sans-serif'}}>
          <h2 style={{color:'#b91c1c'}}>Application error</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <details style={{whiteSpace:'pre-wrap'}}>{this.state.info && this.state.info.componentStack}</details>
        </div>
      )
    }
    return this.props.children
  }
}
