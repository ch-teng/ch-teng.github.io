import React from "react";
import LeftStars from "./Stars/LeftStars";
import RightStars from "./Stars/RightStars";

const Name = () => {
  return (
    <div className="name">
      <h1>Christopher</h1>
      <h1>Teng</h1>
    </div>
  );
};

export default function BackgroundSky() {
  return (
    <div className="background-sky-container">
      <RightStars />
      <LeftStars />
    </div>
  );
}
