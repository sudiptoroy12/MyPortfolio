import "./App.css";

//import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
//import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import Nav2 from "./components/nav/Nav2";

function App() {
  return (
    <div>
      <Nav />
      <Header/>
      <Nav2/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
     
    </div>
  );
}

export default App;
