import React from "react";

export function Notification({ message }) {
  if(!message) return null;
  return <div className="notification">{message}</div>;
}
