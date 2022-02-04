
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

  const content = {
    about: {},
    events: [
      {
        title: "Smoke",
        date: "2020-02-01",
        time: "12:00",
        location: "Smoke",
        reservation: false,
        link: "https://google.se"
      },
      // {
      //   title: "Harry's",
      //   location: "Någon annanstans",
      //   reservation: true,
      //   link: "https://youtube.se"
      // },
      // {
      //   title: "Harry's",
      //   location: "Någon annanstans",
      //   reservation: true,
      //   link: "https://youtube.se"
      // }
    ]
  };

  return (
    <div className="App">
      <Navbar
        tabs={tabs}
        title={"CC-Bluesband"}
        contents={content}
      />
      <div className="wrapper">
        <Main content={content} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
