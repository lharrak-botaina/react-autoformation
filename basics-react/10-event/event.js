

  function Test(){
    const testing =()=>{
       alert('gooood')
    }
    return(
        <button onClick={testing}> take the test</button>
    )
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Test />);