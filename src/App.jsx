import React from 'react';
import { useState } from 'react';
import { Routes, Route, Link , Navigate } from "react-router-dom"
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

// CPU,
// ARCH
// FREEMEM
// HOSTNAME
// PLATFORM
// TOTALMEM
// TYPE
// UPTIME

  return (
    <div>
      <Routes>
      <Route exact path="/" element={<SignUp />} />
        <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/login" element={<LogIn setLoggedIn={setLoggedIn} />} />
      </Routes>
    </div>
  );
};

export default App;
