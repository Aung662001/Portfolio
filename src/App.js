import React from "react";
import { About, Skill, Header, Footer, Work, Testimonial } from "./container";
import { Navbar } from "./components/Navbar";
import "./App.scss";
const App = () => {
  return (
    <>
      <div className="app" style={{ userSelect: "none" }}>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skill />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};
export default App;
