import React from "react";
import "./Button.css";

export default function RedirectButton({ label, url, newTab = false }) {
  const handleClick = () => {
    if (newTab) {
      window.open(url, "_blank");
    } else {
      window.location.href = url;
    }
  };

  return (
    <button className="redirect-button" onClick={handleClick}>
      {label}
    </button>
  );
}
