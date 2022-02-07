
import { Helmet } from 'react-helmet';
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
        title: "KJ's Ronneby",
        date: "2022-02-26",
        time: "19:00",
        location: "Ronneby",
        reservation: false,
      },
      // {
      //   title: "Smoke",
      //   date: "2020-02-01",
      //   time: "12:00",
      //   location: "Smoke",
      //   reservation: true,
      //   link: "https://google.se"
      // },
      // {
      //   title: "Harry's",
      //   date: "2020-02-01",
      //   time: "19:00",
      //   location: "Någon annanstans",
      //   reservation: true,
      //   link: "https://youtube.se"
      // }
    ]
  };

  return (
    <div className="App">
      <Helmet>
        <title>CC-Bluesband</title>
      </Helmet>
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
