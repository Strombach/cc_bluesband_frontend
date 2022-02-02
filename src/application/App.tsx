import React from 'react';
import { Navbar, ContentContainer, Footer } from './components';

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
      <Navbar
        tabs={tabs}
        title={"CC-Bluesband"}
      />
      <ContentContainer />
      <Footer />
    </div>
  );
}

export default App;
