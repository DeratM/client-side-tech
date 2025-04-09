import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
