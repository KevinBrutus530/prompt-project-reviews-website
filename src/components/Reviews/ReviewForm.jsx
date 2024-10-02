import React, { useState } from "react";
import "./_ReviewForm.css"; // Add this import for the CSS file

const ReviewForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitForm();
    }
  };

  const submitForm = () => {
    const currentDate = new Date();
    onSubmit({
      title,
      name,
      content,
      date: currentDate.toLocaleString()
    });
    // Clear form fields after submission
    setTitle("");
    setName("");
    setContent("");
    
    // Remove focus from the active element
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <div className="review-form-container">
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="reviewForm">
        <div className="form-group">
          <label htmlFor="title">Review Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Review:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" className="submit-button">Submit Review</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
