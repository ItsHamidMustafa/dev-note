import './App.css';
// import Navbar from './components/Navbar';
// import Form from './components/Form';
import Layout from './Layout';
import React, { useState } from 'react';
// import React from 'react';
// import Alert from './components/Alert';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import About from './components/About';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Form />
//   },
//   {
//     path: "/about",
//     element: <About />
//   }
// ])

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [isChecked, setIsChecked] = useState(false);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.title = "devNote - Dark Mode";
      setTimeout(() => {
        document.title = "devNote - Home";
      }, 2000);
      setIsChecked(!isChecked);
      showAlert("Dark mode has been enabled successfully", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.title = "devNote - Light Mode";
      setTimeout(() => {
        document.title = "devNote - Home";
      }, 2000);
      setIsChecked(!isChecked);
      showAlert("Light mode has been enabled successfully", "success");
    }
  }


  return (
    <>
      { /* <Router>
        <Routes>
          <Route path="/" element={ */ }
            <Layout mode={mode} showAlert={showAlert} toggleMode={toggleMode} alert={alert} isChecked={isChecked} />
          {/* }> */}
          {/* </Route> */}
          {/* <Route path='about' element={<About text="This is about tag" />} /> */}
          {/* <Route path="/about" element={<About text="This is about tag" />}/> 
        </Routes>
      </Router>*/}
    </>
  )
}

export default App;