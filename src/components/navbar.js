import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Nav() {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex justify-between">
        <nav>
          <NavLink
            to="/"
            exact
            activeClassName="text-black"
            className="inline-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-white text-4xl font-bold cursive tracking-widest"
          >
            Aref
          </NavLink>
        </nav>
        <nav>
          <NavLink
            to="/about"
            activeClassName="text-gray-100 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-white"
          >
            About Me
          </NavLink>
          <NavLink
            to="/projects"
            activeClassName="text-gray-100 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-white"
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            activeClassName="text-gray-100 bg-gray-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-white"
          >
            Blog
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="mailto:arefjadda@gmail.com"
            title="arefjadda@gmail.com"
            className="mr-4"
            target="_blank"
            bgColor="#000"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/arefjadda"
            className="mr-4"
            target="_blank"
            bgColor="#000"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/arefjadda/"
            className="mr-4"
            target="_blank"
            bgColor="#000"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/arefjadda"
            className="mr-4"
            target="_blank"
            bgColor="#000"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
