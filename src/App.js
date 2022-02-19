import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 import React, { useState } from 'react'
import Alert from './components/Alert';
 
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const setAler =(message,type)=> {
    setAlert(
      {
        msg:message,
        typ:type
      }
    )
  }
  const toggleMode = ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#56595c';

    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white';
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={mode}/>
    {/* <About/> */}
    </div>
    </> 
  );
}

export default App;
