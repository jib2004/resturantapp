
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import { useState } from "react";

import './App.css'
function App(){
  const [loggedIn,setLoggedIn] = useState(false)

  function handleLogin(){
    setLoggedIn(true)
  }

  return (
     
        
        <>


        {loggedIn ? <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/services" element={<Services />}/>
  </Routes>
  </BrowserRouter> : <Login onLogin={handleLogin}/>}
          

        </>


  )
}

export default App;