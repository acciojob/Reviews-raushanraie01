import React, { useState } from "react";
import reviews from "../assets/data.js"; // assuming data.js exports the array

export default function Review() {
  const [index, setIndex] = useState(0);

  const checkIndex = (num) => {
    if (num > reviews.length - 1) return 0;
    if (num < 0) return reviews.length - 1;
    return num;
  };

  const nextPerson = () => {
    setIndex((idx) => checkIndex(idx + 1));
  };

  const prevPerson = () => {
    setIndex((idx) => checkIndex(idx - 1));
  };

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    if (randomIndex === index) {
      randomIndex = index + 1; // avoid same index
    }
    setIndex(checkIndex(randomIndex));
  };

  const { id, name, job, image, text } = reviews[index];

  return (
    <article className="review">
      <img
        src={image}
        alt={name}
        className="person-img"
        height="200xp"
        width="200px"
      />

      {/* IMPORTANT: dynamic ID author-id */}
      <h4 className="author" id={`author-${id}`}>
        {name}
      </h4>

      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          previous
        </button>
        <button className="next-btn" onClick={nextPerson}>
          next
        </button>
      </div>

      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
}
