import React from 'react';
import './App.css';
import TempleTour from './pages/TempleTour';
import PasswordGate from './components/PasswordGate';

function App() {
  return (
    <div className="App">
      <PasswordGate>
        <TempleTour />
      </PasswordGate>
    </div>
  );
}

export default App;