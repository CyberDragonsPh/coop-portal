import React from "react";

import AboutUs from "../AboutUs";
import Footer from "../Footer";
import Hero from "../Hero";
import Investment from "../Investment";
import Loans from "../Loans";
import Newsletter from "../Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Investment />
      <AboutUs />
      <Loans />
      <Newsletter />
      <Footer />
    </>
  );
}
