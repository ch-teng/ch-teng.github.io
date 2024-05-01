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
//https://codesandbox.io/p/sandbox/framer-motion-5-1-line-drawing-ph6ln?file=%2Fsrc%2FApp.js&from-embed=
//Think about this for a future design...maybe create a jumping line that adds name and a few stars
//Also add contact information
export default function BackgroundSky() {
  return (
    <div className="background-sky-container">
      <Name />
    </div>
  );
}
