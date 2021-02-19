import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Projects() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            date,
            tools,
            description,
            projectType,
            link,
            gitlink,
            postlink
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main
      className="bg-gray-100 min-h-screen p-12"
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
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive text-white">
          My Projects
        </h1>
        <br />
        <h2 className="text-lg flex justify-center mb-12 text-white">
          Welcome to my projects page!
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-xl shadow-xl bg-white p-16">
                <h3 className="text-gray-800 text-3xl fond-bold mb-2 text-center hover:text-gray-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener norefferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-10">
                  <div className="flex justify-center space-x-10">
                    <span>
                      <strong className="font-bold">Finished on</strong>:{" "}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                      <strong className="font-bold">Type</strong>:{" "}
                      {project.projectType}
                    </span>
                  </div>
                  <p className="mt-6 text-base text-gray-700 leading-relaxed">
                    <strong className="font-bold">Tools Used</strong>:{" "}
                    {project.tools}
                  </p>
                  <p className="mb-6 text-base text-gray-700 leading-relaxed">
                    <strong className="font-bold">Description</strong>:{" "}
                    {project.description}
                  </p>
                  <div className="flex justify-center space-x-10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener norefferrer"
                      className="rext-gray-500 font-bold hover:underline hover:text-gray-400"
                    >
                      View the project page{" "}
                      <span role="img" aria-label="right pointer">
                        👉
                      </span>
                    </a>
                    <a
                      href={project.gitlink}
                      target="_blank"
                      rel="noopener norefferrer"
                      className="rext-gray-500 font-bold hover:underline hover:text-gray-400"
                    >
                      View the github repository{" "}
                      <span role="img" aria-label="right pointer">
                        👉
                      </span>
                    </a>
                    <a
                      href={project.postlink}
                      target="_blank"
                      rel="noopener norefferrer"
                      className="rext-gray-500 font-bold hover:underline hover:text-gray-400"
                    >
                      View the blog post{" "}
                      <span role="img" aria-label="right pointer">
                        👉
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
