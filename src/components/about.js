import React from "react";
import image from "../images/profilepic.jpg";

export default function About() {
  return (
    <main
      className="bg-gray-50 min-h-screen p-12"
      style={{
        background: "#3d3d3d",
        background:
          "-moz-radial-gradient(center, ellipse cover,  #bababa 0%, #9c9c9c 29%, #6e6e6e 55%, #3d3d3d 84%, #000 96%)",
        background:
          "-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,#bababa), color-stop(29%,#9c9c9c), color-stop(55%,#6e6e6e), color-stop(84%,#3d3d3d), color-stop(96%,#000))",
        background:
          "-webkit-radial-gradient(center, ellipse cover,  #bababa 0%,#9c9c9c 29%,#6e6e6e 55%,#3d3d3d 84%,#000 96%)",
        background:
          "-o-radial-gradient(center, ellipse cover,  #bababa 0%,#9c9c9c 29%,#6e6e6e 55%,#3d3d3d 84%,#000 96%)",
        background:
          "-ms-radial-gradient(center, ellipse cover,  #bababa 0%,#9c9c9c 29%,#6e6e6e 55%,#3d3d3d 84%,#000 96%)",
        background:
          "radial-gradient(ellipse at center,  #bababa 0%,#9c9c9c 29%,#6e6e6e 55%,#3d3d3d 84%,#000 96%)",
        filter:
          "progid:DXImageTransform.Microsoft.gradient( startColorstr='#bababa', endColorstr='#000',GradientType=1 )",
      }}
    >
      <h1 className="text-5xl flex justify-center cursive text-white">
        About Me
      </h1>
      <img
        src={image}
        alt="Profile Picture"
        className="rounded-full border-2 border-white mt-10 relative mx-auto"
        style={{ width: 150 }}
      />
      <div className="relative z-10">
        <div
          className="flex bg-white bg-opacity-80 block p-5 mx-auto mt-10 rounded-lg justify-evenly"
          style={{ width: 500 }}
        >
          <h1 className="text-center text-2xl cursive text-black">
            Aref Jadda
          </h1>
        </div>
        <div
          className="flex bg-white bg-opacity-80 block p-5 mx-auto mt-10 rounded-lg justify-evenly"
          style={{ width: 500 }}
        >
          <h1 className="text-center text-2xl cursive text-black">Education</h1>
        </div>
        <div
          className="flex bg-white bg-opacity-80 block p-5 mx-auto mt-10 rounded-lg justify-evenly"
          style={{ width: 500 }}
        >
          <h1 className="text-center text-2xl cursive text-black">
            Experience
          </h1>
        </div>
        <div
          className="flex bg-white bg-opacity-80 block p-5 mx-auto mt-10 rounded-lg justify-evenly"
          style={{ width: 500 }}
        >
          <h1 className="text-center text-2xl cursive text-black">Skills</h1>
        </div>
      </div>
    </main>
  );
}
