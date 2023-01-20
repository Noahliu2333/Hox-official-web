import React from "react";

import NewApplication from "../components/NewApplication/NewAppication";
import Footer from "../components/Header/Footer";
import Header from "../components/Header/Header";

const Application = () => {
  return (
    <div>
      <Header />
      <div class="container">
        <NewApplication />
      </div>
      <div class="pin">
        <Footer />
      </div>
    </div>
  );
};

export default Application;
