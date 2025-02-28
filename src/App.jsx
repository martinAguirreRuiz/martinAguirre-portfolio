import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
      <Hero/>
    </section>
    {/* <section id="Services">Parallax</section> */}
    <section id="Services"><Services/></section>
    {/* <section id="Portfolio">Parallax</section> */}
    <Portfolio id="Portfolio"/>
  </div>;
};

export default App;
