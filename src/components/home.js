import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import image from "../images/profilepic.jpg";
import docicon from "../images/docicon.png";

export default function Home() {
  return (
    <main className="stars overflow-y-scroll w-full h-full">
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="relative z-10">
        <div className="bg-gray-400 hidden lg:flex bg-opacity-50 p-5 mx-auto mt-10 rounded-lg space-y-0 justify-evenly lg:w-1/6">
          <nav>
            <NavLink
              to="/about"
              activeClassName="text-gray-100 bg-gray-700"
              className="inline-flex items-center mr-6 rounded text-white hover:text-white"
            >
              About Me
            </NavLink>
            <NavLink
              to="/projects"
              activeClassName="text-gray-100 bg-gray-700"
              className="inline-flex items-center mr-6 rounded text-white hover:text-white"
            >
              Projects
            </NavLink>
            <NavLink
              to="/blog"
              activeClassName="text-gray-100 bg-gray-700"
              className="inline-flex items-center rounded text-white hover:text-white"
            >
              Blog
            </NavLink>
          </nav>
        </div>
        <div className="bg-gray-400 bg-opacity-50 block p-5 lg:mt-5 mx-auto rounded-lg space-y-0 w-full lg:w-1/4">
          <img
            src={image}
            alt="Profile Picture"
            className="rounded-full relative mx-auto w-1/2"
          />
          <br />
          <h2 className="text-lg text-5xl font-bold cursive text-center text-white">
            Aref Jadda
          </h2>{" "}
          <br />
          <h3 className="text-lg text-3xl text-center text-white">
            Data Scientist
          </h3>{" "}
          <br />
          <h3 className="text-lg text-xl text-center text-white">
            Honours Mathematics & Biology (BS)
          </h3>
          <h3 className="text-lg text-xl text-center text-white">
            McMaster University
          </h3>{" "}
          <br />
          <h3 className="text-base text-center text-white">
            arefjadda@gmail.com
          </h3>
          <h3 className="text-base text-center text-white">(647) 780 - 8428</h3>
        </div>
        <div className="flex bg-gray-400 bg-opacity-50 block p-5 mx-auto mt-1 lg:mt-5 rounded-lg space-y-0 justify-evenly w-full lg:w-1/5">
          <SocialIcon
            url="mailto:arefjadda@gmail.com"
            title="arefjadda@gmail.com"
            className="mr-4"
            target="_blank"
            bgColor="#000"
            fgColor="#fff"
            style={{ height: 50, width: 50 }}
          />
          <SocialIcon
            url="https://github.com/arefjadda"
            className="mr-4"
            title="GitHub"
            target="_blank"
            bgColor="#000"
            fgColor="#fff"
            style={{ height: 50, width: 50 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/arefjadda/"
            className="mr-4"
            target="_blank"
            title="LinkedIn"
            bgColor="#000"
            fgColor="#fff"
            style={{ height: 50, width: 50 }}
          />
          <SocialIcon
            url="https://twitter.com/arefjadda"
            className="mr-4"
            title="Twitter"
            target="_blank"
            bgColor="#000"
            fgColor="#fff"
            style={{ height: 50, width: 50 }}
          />
          <img
            src={docicon}
            alt="Resume PDF"
            title="Resume"
            className="rounded-full bg-white"
            style={{ height: 50, width: 50 }}
          />
        </div>
      </div>
    </main>
  );
}
