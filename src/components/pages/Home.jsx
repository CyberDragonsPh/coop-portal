import React from "react";

import AboutUs from "../AboutUs";
import Hero from "../Hero";
import Investment from "../Investment";
import Loans from "../Loans";

export default function Home() {
  return (
    <>
      <Hero />
      <Investment />
      <AboutUs />
      <Loans />
    </>
  );
}
