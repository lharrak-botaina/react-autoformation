class Name extends React.Component {
    render() {
        return <h1>hiii!</h1>;
    }
} 


ReactDOM.render(<Name />, document.getElementById('root'))




class Car extends React.Component {
    constructor() {
        super();
     this.state = {color :"red"}
    }
    render(){
        return <h1>the car is {this.state.color}</h1>
    }
  }
  
  ReactDOM.render(<Car />, document.getElementById('rootone'));
  