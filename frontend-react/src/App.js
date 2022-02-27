import React from "react";
import {
  About,
  Footer,
  Header,
  Works,
  Skills,
  Testimonials,
} from "./container";

import { Navbar } from "./components";

import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />

      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
