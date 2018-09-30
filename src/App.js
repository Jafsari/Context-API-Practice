import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// First make new context
const myContext = React.createContext();

// Create provider component
class MyProvider extends Component{
  state = {
    name:'justin',
    age:24,
    sex:'M'
  }
  render(){
    return(
      <myContext.Provider value={{
        state: this.state,
        growAYearOlder: () => 
          this.setState({
            age: this.state.age + 1
          })
        
      }}>
      {this.props.children}
      </myContext.Provider>
    )
  }

}


const Family = (props) => {
  return(
  <div className='family'>
    <Person />
  </div>
  )
}
class Person extends Component {
  render(){
  return(
    <div className='person'>
    <myContext.Consumer >  
      {(context) => (
        <React.Fragment>
        <p> My name is {context.state.name} </p>
        <p> My age is {context.state.age} </p>
        <p> My sex is  {context.state.sex} </p>
        <button onClick={context.growAYearOlder}> </button>
        </React.Fragment>
      )}
    </myContext.Consumer>
    </div>
  )
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
      <div className="App">
      <Family />
      </div>
      </MyProvider>
    );
  }
}

export default App;


