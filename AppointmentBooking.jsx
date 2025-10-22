import React, { useState } from "react";

export default function AppointmentBooking() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [booked, setBooked] = useState(false);
  return (
    <div className="appointment">
      <h2>Appointment Booking (Sample)</h2>
      <input placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
      <button onClick={()=>setBooked(true)}>Book</button>
      {booked && <p>Booked for {name} on {date}</p>}
    </div>
  );
}
