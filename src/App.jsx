import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { useState } from "react";
import Reviews from "./components/Reviews";
import ReviewForm from "./components/ReviewForm";

const App = () => {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div>
      {/* <h1>Reviews Website Prompt Project</h1> */}
      <Header />
      <ReviewForm onSubmit={handleReviewSubmit} />
      <Reviews reviews={reviews} />
      <Footer />
    </div>
  );
};

export default App;
