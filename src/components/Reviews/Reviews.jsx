import React from "react";
import "./_Reviews.css"; // Add this import

const Reviews = ({ reviews }) => {
  // Sort reviews by date, most recent first
  const sortedReviews = [...reviews].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {sortedReviews.length === 0 ? (
        <div className="no-reviews">
          <p>No reviews yet.</p>
        </div>
      ) : (
        <div className="reviews-grid">
          {sortedReviews.map((review, index) => (
            <div key={index} className="review-card">
              <h3>{review.title}</h3>
              <p className="review-date">{formatDate(review.date)}</p>
              <p className="review-name">{review.name}</p>
              <p className="review-content">{review.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
