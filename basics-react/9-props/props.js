class Car extends React.Component{
    render(){
        return <h2>the cas is {this.props.color}</h2>
    }
}
ReactDOM.render(<Car color="red"/>,document.getElementById('root'))