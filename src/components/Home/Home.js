import { Box } from "@mui/system";
import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import HomePage from "./HomePage/HomePage";
import Navigation from "./Navigation/Navigation";
import Portfolio from "./Portfolio/Portfolio";
import Services from "./Services/Services";
import Tarifs from "./Tarif/Tarifs";

export default function Home() {
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Navigation />
      </Box>
      <HomePage />
      <Portfolio />
      <About />
      <Services />
      <Tarifs />
      <Contact />
      <Footer />
    </>
  );
}
