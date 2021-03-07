import React from 'react';
import ReactDOM from 'react-dom'
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    console.log(this.myRef);
  }
  render() {
    return <div ref={this.myRef} >Hello</div>
  }
}


ReactDOM.render(<MyComponent />,document.getElementById('app'));

export default MyComponent;