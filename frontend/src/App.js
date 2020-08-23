import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import axios from "axios";

function App() {

  const [state,setState] = useState();
  const ec2Url = process.env.REACT_APP_EC2_URL;

 const handleEc2Click =async  ()=>{
   console.log("hitting EC2...");
    const res = await axios.get(ec2Url);
    console.log("red",res);

    const st = {
      ...state,
      ec2:res.data.message
    }

    setState(st);
 }

 const slsUrl = process.env.REACT_APP_SLS_URL;

 const handleSLSClick = async ()=>{
  const res = await axios.get(slsUrl);
  console.log("red",res);

  const st = {
    ...state,
    ec2:res.data.message
  }

  setState(st);
 }
  return (
    <div >
      <header>
      <Button onClick={()=>handleEc2Click()} color="secondary" >
        EC2
      </Button>
      <Button onClick={()=>handleSLSClick()} color="secondary" >
        Lambda
      </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
      </header>
      {state && state.ec2 ? state.ec2:""}
    </div>
  );
}

export default App;
