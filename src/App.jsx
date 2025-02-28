import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
      <Hero/>
    </section>
    {/* <section id="Services">Parallax</section> */}
    <section id="Services"><Services/></section>
    {/* <section id="Portfolio">Parallax</section> */}
    <section id="Portfolio">Portfolio1</section>
    <section>Portfolio2</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
