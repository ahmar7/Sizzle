import React from "react";
import Faq from "./Faq/faq";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import Cards from "./HowItWorks/cards";
import Navbar from "./NavBar/navbar";
import Tech from "./Tech/tech";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Cards />
      {/* <Tech /> */}
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
