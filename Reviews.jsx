import React from "react";

export default function Reviews({ reviews=[] }) {
  return (
    <div>
      <h3>User Reviews</h3>
      {reviews.length===0 ? <p>No reviews yet.</p> : reviews.map((r,i)=>(
        <div key={i} className="review">
          <strong>{r.author}</strong>: <span>{r.text}</span>
        </div>
      ))}
    </div>
  );
}
