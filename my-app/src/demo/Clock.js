import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const ThemeContext = React.createContext();
class App extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      value: {something: 'something'},
    };
  }
  render() {
   console.log('App');
    return (
    <>
      <ThemeContext.Provider value={this.state.value}>
        {this.props.children}
      </ThemeContext.Provider>
      <button onClick={this.handler}>click me</button>
      </>
    );
  }

  handler=()=>{
  this.forceUpdate()
  }
}

const app =  (<App>
    <ThemeContext.Consumer>
        {(value)=>( <Toolbar test={value}/>)}
    </ThemeContext.Consumer>
</App>);

class Toolbar extends React.Component {
  render() {
   console.log('Toolbar');
    return (
     <div></div>
    );
  }
}

ReactDOM.render(app, document.getElementById('app'));