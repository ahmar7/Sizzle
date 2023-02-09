import React from "react";
import Faq from "./Faq/faq";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import Cards from "./HowItWorks/cards";
import Navbar from "./NavBar/navbar";
import Tech from "./Tech/tech";
import Boost from "./Boost/boost";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Boost />
      <Cards />
      <Tech />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
