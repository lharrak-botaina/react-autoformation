function MissdGoal(){
    return <h1>MISSED!!</h1>
}

function MadeGoal(){
    return <h1>GOAL!!</h1>
}
function Goal(props){
    const isGoal = props.isGoal;
    if(isGoal){
        return <MadeGoal/>
    }
    return <MissdGoal/>

}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Goal isGoal={true}/>)