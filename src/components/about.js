import React from "react";
import { Link } from "react-router-dom";
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
        <div className="bg-white bg-opacity-80 block p-5 mx-auto mt-10 rounded-lg w-2/3">
          <h1 className="text-center text-2xl cursive text-black">
            Aref Jadda
          </h1>
          <br />
          <h2 className="text-xl text-black font-bold">Bio</h2>
          <p>
            Hello there! My name is Aref. I am a Mathematician and Biologist
            turned Data Scientist. After learning about computer science through
            an elective course in university, I became obsessed with learning to
            code and data science later on. Even though the course was
            challening for me, having no prior experience with the subject, I
            developed a deep passion for the field and decided to learn more on
            my own. What excites me about the computer science world is that I
            can get very creative with my work and basically build anything at
            anytime. Unlike most fields where you would need a lab for research
            and hands on experience, in today's world I can do data science
            research or software development on a small laptop and basically
            carry my lab with me everywhere I go.
            <br />I have spent the last year expanding my knowledge in data
            science and computer science through bootcamps, online courses,
            youtube videos, personal projects, etc. After spending a lot of time
            on these subjects and seeing all the interesting research, I would
            love to get the opportunity to pursue a graduate degree in Computer
            Science.
          </p>
          <br />
          <h2 className="text-xl text-black font-bold">Interests</h2>
          <p>
            I am currently seeking opportunities for research in the fields of
            AI and Machine Learning. The hardest part for me in research and
            work has been narrowing down my interests and becoming more
            specialized. At the time being, deep learning is my main research
            interest area. In terms of work I am mostly interested in Data
            Engineer, ML Engineer, and Data Scientist postitions however, I am
            also open to other related positions and Software Development.
          </p>
        </div>
        <div className="bg-white bg-opacity-80 block p-5 mx-auto mt-10 rounded-lg w-2/3">
          <h1 className="text-center text-2xl cursive text-black">Education</h1>
          <br />
          <h2 className="text-xl text-black">
            BrainStation | Data Science (Diploma)
          </h2>
          <p className="text-sm">
            Jun 2020 - Sep 2020
            <br />
            Toronto, ON
          </p>
          <br />
          <h2 className="text-xl text-black">
            McMaster University | Honours Mathematics and Biology (BS)
          </h2>
          <p className="text-sm">
            Sep 2014 - Apr 2019
            <br />
            Hamilton, ON
          </p>
          <br />
          <h2 className="text-xl text-black font-bold">Other Certificates</h2>
          <h2 className="text-lg text-black">
            DeepLearning.AI | TensorFlow Developer Professional Certificate
            (2021)
          </h2>
          <h2 className="text-lg text-black">
            DeepLearning.AI | Deep Learning Specialization (2021)
          </h2>
          <h2 className="text-lg text-black">
            IBM | Data Science Professional Certificate (2020)
          </h2>
        </div>
        <div className="bg-white bg-opacity-80 block p-5 mx-auto mt-10 rounded-lg w-2/3">
          <h1 className="text-center text-2xl cursive text-black">
            Experience
          </h1>
          <br />
          <Link className="hover:underline" to="/projects">
            <h2 className="italic">
              Visit my Projects page to see all the other relevant work I have
              done in computer science and data science!{" "}
              <span role="img" aria-label="right pointer">
                👉
              </span>
            </h2>
          </Link>
          <br />
          <h2 className="text-xl text-black font-bold">Relevant Experience</h2>
          <br />
          <h2 className="text-lg text-black">
            Computer Science and Math Tutor
          </h2>
          <p className="text-sm">2021 | Toronto, ON</p>
          <ul>
            <li className="list-disc list-inside ml-10">
              Implemented lessons through interesting real-life examples for
              students to develop passion for the subject.
            </li>
            <li className="list-disc list-inside ml-10">
              Planned lessons for allotted time to strengthen weak subjects and
              build skills.
            </li>
            <li className="list-disc list-inside ml-10">
              Collaborated with students to complete homework assignments,
              identify lagging skills and correct weaknesses, which increased
              their grades by %13.7 on average.
            </li>
          </ul>
          <br />
          <h2 className="text-lg text-black">
            Web Developer | Green Destiny LLC
          </h2>
          <p className="text-sm">2018 - 2020 | Chicago, IL (remote)</p>
          <ul>
            <li className="list-disc list-inside ml-10">
              Self-taught full-stack web development, converting mockups into
              usable web presence with HTML, CSS, JS, and WordPress.
            </li>
            <li className="list-disc list-inside ml-10">
              Collaborated with partners on marketing strategies and approaches,
              boosting website visits by 60%.
            </li>
          </ul>
          <br />
          <h2 className="text-xl text-black font-bold">Other Work</h2>
          <br />
          <h2 className="text-lg text-black">
            Hospital Emergency Volunteer | SNH - Birchmount Hospital
          </h2>
          <p className="text-sm">2018 - 2019 | Scarborough, ON</p>
          <br />
          <h2 className="text-lg text-black">
            Hospital Rehabilitation Volunteer | Sunnybrook - St. John's Rehab
          </h2>
          <p className="text-sm">2012 - 2014 | Toronto, ON</p>
        </div>
        <div className="bg-white bg-opacity-80 block p-5 mx-auto mt-10 rounded-lg w-2/3">
          <h1 className="text-center text-2xl cursive text-black">Skills</h1>
          <br />
          <h2 className="text-xl text-black font-bold">Computer Science</h2>
          <p>Languages: Pyhon | C | C++ | R | JavaScript | HTML | CSS</p>
          <p>
            Object-oriented Programming | Node.js | Linux | Docker | GitHub |
            Bash | Express.js | Socket.io | React | Wordpress
          </p>
          <br />
          <h2 className="text-xl text-black font-bold">Data Science</h2>
          <p>
            SQL | Scikit-learn | Numpy | Pandas | TensorFlow | Tableau |
            Statistical and Mathematical Modelling | Deep Learning | Machine
            Learning | Webscraping | Data Cleaning and Preprocessing | Data
            Visualization (Matplotlib, Seaborn, Bokeh, Plotly, Folium) | AWS |
            Deployment
          </p>
          <br />
          <h2 className="text-xl text-black font-bold">Soft Skills</h2>
          <p>
            Scrum & Agile | Strong Logical-thinking and Problem-Solving Skills |
            Strong Interpersonal Skills | Bilingual (English & Persian)
          </p>
        </div>
      </div>
    </main>
  );
}
