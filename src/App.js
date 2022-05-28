
import './App.css';
import Navbar from './components/Navbar';
 import Alert from './components/Alert';
//import Textform from './components/Textform';
import About from './components/About';
import Cards from './components/Cards';

//  import Footer from "./components/Footer";
import React,{useState} from 'react'

import {
  HashRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
//import About from './components/About';
function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  //toggle function
  const toggle=()=>{
          if(mode=== 'dark')
          {
            setMode('light');
            document.body.style.backgroundColor='white';
            showAlert("Light Mode Enabled","Success")
            
          }
          else{
            setMode('dark');
            document.body.style.backgroundColor='#212529';
            showAlert("Dark Mode Enabled","Success")
          }
  }
  const showAlert=(message,type)=>{
          setAlert({
           msg : message,
           type:type
          })
          setTimeout(()=>{
                    setAlert(null);},1500
          );
  }

  return (
    <> 
    <Router >
    <Navbar tittle="carStats"mode={mode} toggle={toggle}/>
    <Alert alert={alert}/>
    
    
      <Routes>
          <Route exact path="/link" element={<About/>}/>
           
          
          <Route path="/" element={<Cards/>}>
          
          {/* <Route path="/" element={<Textform heading="Enter Text Below"  mode={mode}/>}> */}
            
            
          </Route>
        </Routes> 
     
     {/* <About/> */}
     
     </Router>
       {/* <Footer/> */}
    </>
  );
}

export default App;
