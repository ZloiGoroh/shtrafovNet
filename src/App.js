import React from 'react';
import './css/App.css';
import Header from './Header';
import Search from './Form';


function App() {
  return (
    <div className="grid">
      <div></div>
      <div>
        <Header />
        <Search />
      </div>
      <div></div>
    </div>
  );
}

export default App;
