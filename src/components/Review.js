import React, { useState } from "react";
import data from "../assets/data.js";
function Review() {
  const [index, setIndex] = useState(0);
  const handlePrevBtn = () => {
    if (index >= 1) setIndex((ind) => ind - 1);
  };
  const handleNextBtn = () => {
    if (index < data.length - 1) setIndex((ind) => ind + 1);
  };
  const handleRandBtn = () => {
    let ind = parseInt(Math.random() * data.length);
    if (index != ind) setIndex(ind);
  };
  console.log("Rerender");
  let review = data[index];
  return (
    <div>
      <h1 id="review-heading">Our Reviews</h1>
      <div className="review" key={review.id}>
        <p className="author" id={`author-${review.id}`}>
          {review.name}
        </p>
        <p className="job">{review.job}</p>
        <p className="info">{review.text}</p>
        <img
          src={review.image}
          className="person-img"
          height="200px"
          width="200px"
        ></img>
      </div>
      <button
        className="prev-btn"
        onClick={handlePrevBtn}
        disabled={index == 0 ? true : false}
      >
        previous
      </button>
      <button
        className="next-btn"
        onClick={handleNextBtn}
        disabled={index == data.length - 1 ? true : false}
      >
        next
      </button>
      <button className="random-btn" onClick={handleRandBtn}>
        surprise me
      </button>
    </div>
  );
}

export default Review;
