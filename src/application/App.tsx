
import Navbar from './navbar';
import Main from './main';
import Footer from './footer';

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
      <div className="wrapper">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
