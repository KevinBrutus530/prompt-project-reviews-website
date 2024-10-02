import React from "react";

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul className="reviews-list">
          {reviews.map((review, index) => (
            <li key={index} className="review-item">
              <h3>{review.title}</h3>
              <p className="review-date">{review.date}</p>
              <p className="review-title">{review.title}</p>
              <p className="review-summary">{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
