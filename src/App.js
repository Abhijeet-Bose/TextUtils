
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Outlet,
  BrowserRouter
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)


  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  let toggleMode = () =>
  {
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled","success")
      document.title = "TextUtils - Dark"
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
      document.title = "TextUtils - Light"
    }
  }
  return (
    <>
    <BrowserRouter>
  <Navbar title = "TextUtils" aboutText = "About Us" home = "Home"  mode = {mode}  toggleMode = {toggleMode}/>
  <Alert  alert = {alert}/>
  <div className='container my-3' >
    <Routes>
          <Route exact path="/about" element={<About/>}/>
          
          <Route exact path="/" element={<TextForm heading = "Enter your text" mode = {mode}  showAlert = {showAlert}/>}/>
           
        </Routes>
  </div>
        </BrowserRouter>

    
  {/*<About/>*/}

  </>
  );
}


export default App;
