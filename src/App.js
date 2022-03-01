import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
 
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
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#56595c' ;
      setAler("Dark Mode Has Been Enabled", "success");

    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white';
    }
  }
  return (
    <>
    <Router>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={
            <About/>
          }>
            
          </Route>
        
          <Route exact path="/" element= {
            <TextForm setAler={setAler} heading="Enter the text to analyze below" mode={mode}/>
          }>
          
          </Route>
        </Routes> 

    
    </div>
     </Router>
    </> 
  );
}

export default App;
