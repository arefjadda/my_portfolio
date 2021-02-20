import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import { render } from "@testing-library/react";

export default function Blog() {
  // initially set the state to null
  const [postData, setPost] = useState(null);

  // fetch the data from the client once
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(publishedAt asc) {
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  render();
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
      <ScrollUpButton />
      <section className="container mx-auto">
        <h1 className="text-4xl text-white flex justify-center cursive">
          Blog Posts
        </h1>
        <h2 className="text-lg text-white flex justify-center mb-12 mx-60 my-5">
          Welcome to my blog page! These posts usually discuss new projects I
          worked on recently or projects I am completing at the moment. There
          are also reviews of some of the courses or certificates I completed
          and other experiences such as hackathons or webinars. If you are
          looking for a specific post related to one of my projects it might be
          easier to follow the link from the respective project located in the
          projects tab.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-gray-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-gray-100 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
