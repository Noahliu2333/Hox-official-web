import React from "react";

import Applicants from "../components/Applicants/Applicants";
import Footer from "../components/Header/Footer";
import Header from "../components/Header/Header";

const Review = () => {
  return (
    <div>
      <Header />
      <div class="container">
        <Applicants />
      </div>
      <div class="pin">
        <Footer />
      </div>
    </div>
  );
};

export default Review;
