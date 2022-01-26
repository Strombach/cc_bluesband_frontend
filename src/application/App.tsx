import React from 'react';
import './App.scss';
import { Navbar } from './components';

function App() {

  const tabs = [
    {
      title: "Home"
    },
    {
      title: "Events"
    },
    {
      title: "About"
    }
  ];

  return (
    <div className="App">
      <Navbar
        tabs={tabs}
        title={"CC-Bluesband"}
      />
    </div>
  );
}

export default App;
