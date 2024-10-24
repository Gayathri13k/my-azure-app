import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Welcome to My Azure Deployed App!');

  const changeMessage = () => {
    setMessage('You clicked the button! Congrats!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <button onClick={changeMessage} style={styles.button}>Click Me</button>
      </header>
    </div>
  );
}

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default App;

