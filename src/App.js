import About from "./components/About";
import Blog from "./components/Blog";
import Dentist from "./components/Dentist";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Services />
      <About />
      <Dentist />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
