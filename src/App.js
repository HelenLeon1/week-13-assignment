import React from 'react';
import LoginForm from "./Components/LoginForm";
import Navigation from "./Components/Navigation";
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
