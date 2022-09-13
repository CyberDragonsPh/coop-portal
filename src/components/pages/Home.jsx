import React from "react";

import AboutUs from "../AboutUs";
import Hero from "../Hero";
import Investment from "../Investment";
import Loans from "../Loans";
import MemberProfile from "./MemberProfile";

export default function Home() {
  return (
    <>
      <Hero />
      <MemberProfile />
      <Investment />
      <AboutUs />
      <Loans />
    </>
  );
}
