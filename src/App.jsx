import React from "react";
import Navbar from "./components/app/Navbar";
import Hero from "./components/app/Hero";
import Footer from "./components/app/Footer";

const App = () => {
  return (
    <div className="container mx-auto h-full md:h-screen px-8 md:px-60 text-white pt-8 bg-[#0D1317]">
      <Navbar />
      <Hero />
      <Footer/>
    </div>
  );
};

export default App;
