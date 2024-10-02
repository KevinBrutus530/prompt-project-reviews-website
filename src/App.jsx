import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Reviews from "./components/Reviews/Reviews";
import ReviewForm from "./components/Reviews/ReviewForm";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('reviews');
    return savedReviews ? JSON.parse(savedReviews) : [];
  });

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleReviewSubmit = (review) => {
    const updatedReviews = [...reviews, review];
    setReviews(updatedReviews);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="content-wrapper">
          <ReviewForm onSubmit={handleReviewSubmit} />
          <Reviews reviews={reviews} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
