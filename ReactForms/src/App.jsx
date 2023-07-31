import './App.css'
import Authenticate from './components/Authenitcate'
import SignUpForm from './components/SignUpForm'
import React, { useState } from 'react';

export default function App () {
  const [token, setToken] = useState(null);
  
  return (
    <div className="App">
      <div className="formBoxSignUpForm">
        <h2>Login</h2>
        <SignUpForm setToken={setToken} />
      </div>
      <div className="formBoxAuthenticate">
        <Authenticate token={token} />
      </div>
    </div>
  );
}