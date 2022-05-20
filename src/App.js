
import './App.css';
import React,{useState} from 'react';

function App() {
  
  let [countNum, setCount] = useState(0);
  const increasefun = () => {
    setCount(countNum+1)
    console.log("you pressed button")
    console.log(countNum)
    
  }
  const resetfun = () => {
    setCount(0)
    console.log("you pressed button")
    console.log(countNum)
    
  }
  const decreasefun = () => {
    setCount(countNum-1)
    console.log("you pressed button")
    console.log(countNum)
    
  }

  
  return (
    <div className="App">
      <header>
        <nav>
        <ul>
          <li ><a href="#">COUNTER APP</a></li>
          
        </ul>
        </nav>
      </header>
      <main class="content-class">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <h1>
          COUNT IS: {countNum}
        </h1>


        <div class="btn-class" >
        <p><button onClick={decreasefun} class="w3-button w3-red"><bold>-</bold></button></p>
        <p><button onClick={resetfun} class="w3-button w3-pale-yellow"><bold>RESET</bold></button></p>  
        <p><button onClick={increasefun} class="w3-button w3-green"><bold>+</bold></button></p>
        </div> 
      </main>
    </div>
  );
}

export default App;
