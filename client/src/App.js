import './App.css';
import Login from './components/Login/Login'
import MainPage from './components/MainPage/MainPage'
import NewLogin from './components/NewLogin'
import React, { useState } from 'react'

function App() {
  const[user, setUser] = useState(null)
  return (
    user === null ? <NewLogin setUser={setUser}/> : <h1>{user.username}</h1>
  );
}

export default App;
