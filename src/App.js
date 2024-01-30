import './App.css';
import Navbar from './components/Navbar';
import FormText from './components/FormText';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Abouts from './components/Abouts';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#4a4545";
      showAlert("dark mode is enable", "success");
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enable", "success");
    }
  }

  setTimeout(() => {
    setAlert(null)
  }, 2000);


  return (
    <>
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />
      <div className="container">
      <FormText showAlert={showAlert} heading="Enter the text Analyze" mode={mode} />
      </div> */}
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<Abouts />}></Route>
          <Route path="/" element={<FormText showAlert={showAlert} heading="Enter the text Analyze" mode={mode} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
