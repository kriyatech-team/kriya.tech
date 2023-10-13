import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import ContactPage from "./ContactPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
      <Cards />
      <Footer />
      <ContactPage />
    </div>
  );
};

export default App;
