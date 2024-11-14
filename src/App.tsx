import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signUp = () => {
    console.log('signUp');

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert('User created successfully');
      
      user.getIdToken().then(function(idToken){
        sessionStorage.setItem("accessToken", idToken)
        console.log("token saved to session storage")
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
  });
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert('Signed in successfully');

      user.getIdToken().then(function(idToken){
        sessionStorage.setItem("accessToken", idToken)
        console.log("token saved to session storage")
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  };

  const logOut = () => {
    console.log('logOut');

    signOut(auth).then(() => {
      alert('Signed out successfully');
    }).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="App">
      <div className="login-container">
        <h1>Sample Login Page</h1>
        <form>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button type="button" className="login-button" onClick={signUp}>
              Register
            </button>
          </div>
          <div className="form-group">
            <button type="button" className="login-button" onClick={login}>
              Sign In
            </button>
          </div>
          <div className="form-group">
            <button type="button" className="login-button" onClick={logOut}>
              Log Out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
