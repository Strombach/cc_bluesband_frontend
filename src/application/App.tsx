import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, ContentContainer } from './components';

function App() {

  const tabs = [
    {
      title: "Home",
      path: "/"
    },
    {
      path: "events"
    },
    {
      path: "about"
    }
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          tabs={tabs}
          title={"CC-Bluesband"}
        />
        <ContentContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
