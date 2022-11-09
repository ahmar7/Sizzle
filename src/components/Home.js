import React from "react";
import Faq from "./Faq/faq";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import Cards from "./HowItWorks/cards";
import Navbar from "./NavBar/navbar";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Cards />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
