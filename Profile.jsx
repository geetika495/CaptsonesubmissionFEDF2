import React, { useState } from "react";

export default function Profile() {
  const [name, setName] = useState("Your Name");
  return (
    <div>
      <h3>Profile</h3>
      <label>Name: <input value={name} onChange={e=>setName(e.target.value)} /></label>
      <p>Preview: {name}</p>
    </div>
  );
}
