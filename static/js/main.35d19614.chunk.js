(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{160:function(e,t,a){},528:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a.n(c),s=a(24),l=a.n(s),n=(a(160),a(6)),i=a(13),o=a(26),d=a.p+"static/media/profilepic.49ac2427.jpg",b=a.p+"static/media/docicon.15be4104.png",j=a(0);function x(){return Object(j.jsxs)("main",{className:"stars overflow-y-scroll w-full h-full",children:[Object(j.jsx)("div",{className:"twinkling"}),Object(j.jsx)("div",{className:"clouds"}),Object(j.jsxs)("div",{className:"relative z-10",children:[Object(j.jsx)("div",{className:"bg-gray-400 hidden lg:flex bg-opacity-50 p-5 mx-auto mt-10 rounded-lg space-y-0 justify-evenly lg:w-1/6",children:Object(j.jsxs)("nav",{children:[Object(j.jsx)(i.c,{to:"/about",className:"inline-flex items-center mr-6 rounded text-white hover:text-white font-bold",children:"About Me"}),Object(j.jsx)(i.c,{to:"/projects",className:"inline-flex items-center mr-6 rounded text-white hover:text-white font-bold",children:"Projects"})]})}),Object(j.jsxs)("div",{className:"bg-gray-400 bg-opacity-50 block p-5 lg:mt-5 mx-auto rounded-lg space-y-0 w-full lg:w-1/4",children:[Object(j.jsx)("img",{src:d,alt:"Profile Picture",className:"rounded-full relative mx-auto w-1/2"}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"text-lg text-5xl font-bold cursive text-center text-white",children:"Aref Jadda"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("h3",{className:"text-lg text-3xl text-center text-white",children:"Data Scientist"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("h3",{className:"text-lg text-xl text-center text-white",children:"Honours Mathematics & Biology (BS)"}),Object(j.jsx)("h3",{className:"text-lg text-xl text-center text-white",children:"McMaster University"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("h3",{className:"text-base text-center text-white",children:"arefjadda@gmail.com"}),Object(j.jsx)("h3",{className:"text-base text-center text-white",children:"(647) 780 - 8428"})]}),Object(j.jsxs)("div",{className:"flex bg-gray-400 bg-opacity-50 block p-5 mx-auto mt-1 lg:mt-5 rounded-lg space-y-0 justify-evenly w-full lg:w-1/5",children:[Object(j.jsx)(o.SocialIcon,{url:"mailto:arefjadda@gmail.com",title:"arefjadda@gmail.com",className:"mr-4",target:"_blank",bgColor:"#000",fgColor:"#fff",style:{height:50,width:50}}),Object(j.jsx)(o.SocialIcon,{url:"https://github.com/arefjadda",className:"mr-4",title:"GitHub",target:"_blank",bgColor:"#000",fgColor:"#fff",style:{height:50,width:50}}),Object(j.jsx)(o.SocialIcon,{url:"https://www.linkedin.com/in/arefjadda/",className:"mr-4",target:"_blank",title:"LinkedIn",bgColor:"#000",fgColor:"#fff",style:{height:50,width:50}}),Object(j.jsx)(o.SocialIcon,{url:"https://twitter.com/arefjadda",className:"mr-4",title:"Twitter",target:"_blank",bgColor:"#000",fgColor:"#fff",style:{height:50,width:50}}),Object(j.jsx)("img",{src:b,alt:"Resume PDF",title:"Resume",className:"rounded-full bg-white",style:{height:50,width:50}})]})]})]})}var h=a(4),m=a(63),g=a(152),p=a.n(g)()({projectId:"ilpmnnua",dataset:"production"});function u(){var e,t=Object(c.useState)(null),a=Object(m.a)(t,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){p.fetch('*[_type == "project"] | order(date desc) {\n            title,\n            date,\n            tools,\n            description,\n            projectType,\n            link,\n            gitlink,\n            postlink\n        }').then((function(e){return s(e)})).catch(console.error)}),[]),Object(j.jsx)("main",{className:"bg-gray-100 min-h-screen p-12",style:(e={background:"#3d3d3d"},Object(h.a)(e,"background","-moz-radial-gradient(center, ellipse cover,  #bababa 0%, #9c9c9c 29%, #6e6e6e 55%, #3d3d3d 84%, #000 96%)"),Object(h.a)(e,"background","-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,#bababa), color-stop(29%,#9c9c9c), color-stop(55%,#6e6e6e), color-stop(84%,#3d3d3d), color-stop(96%,#000))"),Object(h.a)(e,"background","-webkit-radial-gradient(center, ellipse cover,  #bababa 0%,#9c9c9c 29%,#6e6e6e 55%,#3d3d3d 84%,#000 96%)"),Object(h.a)(e,"background","-o-radial-gradient(center, ellipse cover,  #bababa 0%,#9c9c9c 29%,#6e6e6e 55%,#3d3d3d 84%,#000 96%)"),Object(h.a)(e,"background","-ms-radial-gradient(center, ellipse cover,  #bababa 0%,#9c9c9c 29%,#6e6e6e 55%,#3d3d3d 84%,#000 96%)"),Object(h.a)(e,"background","radial-gradient(ellipse at center,  #bababa 0%,#9c9c9c 29%,#6e6e6e 55%,#3d3d3d 84%,#000 96%)"),Object(h.a)(e,"filter","progid:DXImageTransform.Microsoft.gradient( startColorstr='#bababa', endColorstr='#000',GradientType=1 )"),e),children:Object(j.jsxs)("section",{className:"container mx-auto",children:[Object(j.jsx)("h1",{className:"text-5xl flex justify-center cursive text-white",children:"My Projects"}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"text-lg flex justify-center mb-12 text-white",children:"Welcome to my projects page!"}),Object(j.jsx)("section",{className:"grid grid-cols-2 gap-8",children:r&&r.map((function(e,t){return Object(j.jsxs)("article",{className:"relative rounded-xl shadow-xl bg-white p-16",children:[Object(j.jsx)("h3",{className:"text-gray-800 text-3xl fond-bold mb-2 text-center hover:text-gray-700",children:Object(j.jsx)("a",{href:e.link,alt:e.title,target:"_blank",rel:"noopener norefferrer",children:e.title})}),Object(j.jsxs)("div",{className:"text-gray-500 text-xs space-x-10",children:[Object(j.jsxs)("div",{className:"flex justify-center space-x-10",children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("strong",{className:"font-bold",children:"Finished on"}),":"," ",new Date(e.date).toLocaleDateString()]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("strong",{className:"font-bold",children:"Type"}),":"," ",e.projectType]})]}),Object(j.jsxs)("p",{className:"mt-6 text-base text-gray-700 leading-relaxed",children:[Object(j.jsx)("strong",{className:"font-bold",children:"Tools Used"}),":"," ",e.tools]}),Object(j.jsxs)("p",{className:"mb-6 text-base text-gray-700 leading-relaxed",children:[Object(j.jsx)("strong",{className:"font-bold",children:"Description"}),":"," ",e.description]}),Object(j.jsxs)("div",{className:"flex justify-center space-x-10",children:[Object(j.jsxs)("a",{href:e.link,target:"_blank",rel:"noopener norefferrer",className:"rext-gray-500 font-bold hover:underline hover:text-gray-400",children:["View the project page"," ",Object(j.jsx)("span",{role:"img","aria-label":"right pointer",children:"\ud83d\udc49"})]}),Object(j.jsxs)("a",{href:e.gitlink,target:"_blank",rel:"noopener norefferrer",className:"rext-gray-500 font-bold hover:underline hover:text-gray-400",children:["View the github repository"," ",Object(j.jsx)("span",{role:"img","aria-label":"right pointer",children:"\ud83d\udc49"})]})]})]})]})}))})]})})}function O(){return Object(j.jsx)("h1",{children:"Single Post page!"})}var f=a(153),y=a(154);function N(){var e,t=Object(c.useState)(null),a=Object(m.a)(t,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){p.fetch('*[_type == "post"] | order(publishedAt asc) {\n            title,\n            slug,\n            mainImage{\n                asset->{\n                    _id,\n                    url\n                },\n                alt\n            }\n        }').then((function(e){return s(e)})).catch(console.error)}),[]),Object(y.a)(),Object(j.jsxs)("main",{className:"bg-gray-50 min-h-screen p-12",style:(e={background:"#3d3d3d"},Object(h.a)(e,"background","-moz-radial-gradient(center, ellipse cover,  #bababa 0%, #9c9c9c 29%, #6e6e6e 55%, #3d3d3d 84%, #000 96%)"),Object(h.a)(e,"background","-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,#bababa), color-stop(29%,#9c9c9c), color-stop(55%,#6e6e6e), color-stop(84%,#3d3d3d), color-stop(96%,#000))"),Object(h.a)(e,"background","-webkit-radial-gradient(center, ellipse cover,  #bababa 0%,#9c9c9c 29%,#6e6e6e 55%,#3d3d3d 84%,#000 96%)"),Object(h.a)(e,"background","-o-radial-gradient(center, ellipse cover,  #bababa 0%,#9c9c9c 29%,#6e6e6e 55%,#3d3d3d 84%,#000 96%)"),Object(h.a)(e,"background","-ms-radial-gradient(center, ellipse cover,  #bababa 0%,#9c9c9c 29%,#6e6e6e 55%,#3d3d3d 84%,#000 96%)"),Object(h.a)(e,"background","radial-gradient(ellipse at center,  #bababa 0%,#9c9c9c 29%,#6e6e6e 55%,#3d3d3d 84%,#000 96%)"),Object(h.a)(e,"filter","progid:DXImageTransform.Microsoft.gradient( startColorstr='#bababa', endColorstr='#000',GradientType=1 )"),e),children:[Object(j.jsx)(f.VerticleButton,{}),Object(j.jsxs)("section",{className:"container mx-auto",children:[Object(j.jsx)("h1",{className:"text-4xl text-white flex justify-center cursive",children:"Blog Posts"}),Object(j.jsx)("h2",{className:"text-lg text-white flex justify-center mb-12 mx-60 my-5",children:"Welcome to my blog page! These posts usually discuss new projects I worked on recently or projects I am completing at the moment. There are also reviews of some of the courses or certificates I completed and other experiences such as hackathons or webinars. If you are looking for a specific post related to one of my projects it might be easier to follow the link from the respective project located in the projects tab."}),Object(j.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:r&&r.map((function(e,t){return Object(j.jsx)("article",{children:Object(j.jsx)(i.b,{to:"/blog/"+e.slug.current,children:Object(j.jsxs)("span",{className:"block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-gray-400",children:[Object(j.jsx)("img",{src:e.mainImage.asset.url,alt:e.mainImage.alt,className:"w-full h-full rounded-r object-cover absolute"}),Object(j.jsx)("span",{className:"block relative h-full flex justify-end items-end pr-4 pb-4",children:Object(j.jsx)("h3",{className:"text-gray-800 text-lg font-bold px-3 py-4 bg-gray-100 bg-opacity-75 rounded",children:e.title})})]},t)},e.slug.current)})}))})]})]})}function k(){var e;return Object(j.jsxs)("main",{className:"bg-gray-50 min-h-screen p-12",style:(e={background:"#3d3d3d"},Object(h.a)(e,"background","-moz-radial-gradient(center, ellipse cover,  #bababa 0%, #9c9c9c 29%, #6e6e6e 55%, #3d3d3d 84%, #000 96%)"),Object(h.a)(e,"background","-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,#bababa), color-stop(29%,#9c9c9c), color-stop(55%,#6e6e6e), color-stop(84%,#3d3d3d), color-stop(96%,#000))"),Object(h.a)(e,"background","-webkit-radial-gradient(center, ellipse cover,  #bababa 0%,#9c9c9c 29%,#6e6e6e 55%,#3d3d3d 84%,#000 96%)"),Object(h.a)(e,"background","-o-radial-gradient(center, ellipse cover,  #bababa 0%,#9c9c9c 29%,#6e6e6e 55%,#3d3d3d 84%,#000 96%)"),Object(h.a)(e,"background","-ms-radial-gradient(center, ellipse cover,  #bababa 0%,#9c9c9c 29%,#6e6e6e 55%,#3d3d3d 84%,#000 96%)"),Object(h.a)(e,"background","radial-gradient(ellipse at center,  #bababa 0%,#9c9c9c 29%,#6e6e6e 55%,#3d3d3d 84%,#000 96%)"),Object(h.a)(e,"filter","progid:DXImageTransform.Microsoft.gradient( startColorstr='#bababa', endColorstr='#000',GradientType=1 )"),e),children:[Object(j.jsx)("h1",{className:"text-5xl flex justify-center cursive text-white",children:"About Me"}),Object(j.jsx)("img",{src:d,alt:"Profile Picture",className:"rounded-full border-2 border-white mt-10 relative mx-auto",style:{width:150}}),Object(j.jsxs)("div",{className:"relative z-10",children:[Object(j.jsxs)("div",{className:"bg-white bg-opacity-80 block p-5 mx-auto mt-10 rounded-lg w-2/3",children:[Object(j.jsx)("h1",{className:"text-center text-2xl cursive text-black",children:"Aref Jadda"}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"text-xl text-black font-bold",children:"Bio"}),Object(j.jsxs)("p",{children:["Hello there! My name is Aref. I am a Mathematician and Biologist turned Data Scientist. After learning about computer science through an elective course in university, I became obsessed with learning to code and data science later on. Even though the course was challening for me, having no prior experience with the subject, I developed a deep passion for the field and decided to learn more on my own. What excites me about the computer science world is that I can get very creative with my work and basically build anything at anytime. Unlike most fields where you would need a lab for research and hands on experience, in today's world I can do data science research or software development on a small laptop and basically carry my lab with me everywhere I go.",Object(j.jsx)("br",{}),"I have spent the last year expanding my knowledge in data science and computer science through bootcamps, online courses, youtube videos, personal projects, etc. After spending a lot of time on these subjects and seeing all the interesting research, I would love to get the opportunity to pursue a graduate degree in Computer Science."]}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"text-xl text-black font-bold",children:"Interests"}),Object(j.jsx)("p",{children:"I am currently seeking opportunities for research in the fields of AI and Machine Learning. The hardest part for me in research and work has been narrowing down my interests and becoming more specialized. At the time being, deep learning is my main research interest area. In terms of work I am mostly interested in Data Engineer, ML Engineer, and Data Scientist postitions however, I am also open to other related positions and Software Development."})]}),Object(j.jsxs)("div",{className:"bg-white bg-opacity-80 block p-5 mx-auto mt-10 rounded-lg w-2/3",children:[Object(j.jsx)("h1",{className:"text-center text-2xl cursive text-black",children:"Education"}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"text-xl text-black",children:"BrainStation | Data Science (Diploma)"}),Object(j.jsxs)("p",{className:"text-sm",children:["Jun 2020 - Sep 2020",Object(j.jsx)("br",{}),"Toronto, ON"]}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"text-xl text-black",children:"McMaster University | Honours Mathematics and Biology (BS)"}),Object(j.jsxs)("p",{className:"text-sm",children:["Sep 2014 - Apr 2019",Object(j.jsx)("br",{}),"Hamilton, ON"]}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"text-xl text-black font-bold",children:"Other Certificates"}),Object(j.jsx)("h2",{className:"text-lg text-black",children:"DeepLearning.AI | Deep Learning Specialization (2021)"}),Object(j.jsx)("h2",{className:"text-lg text-black",children:"IBM | Data Science Professional Certificate (2020)"})]}),Object(j.jsxs)("div",{className:"bg-white bg-opacity-80 block p-5 mx-auto mt-10 rounded-lg w-2/3",children:[Object(j.jsx)("h1",{className:"text-center text-2xl cursive text-black",children:"Experience"}),Object(j.jsx)("br",{}),Object(j.jsx)(i.b,{className:"hover:underline",to:"/projects",children:Object(j.jsxs)("h2",{className:"italic",children:["Visit my Projects page to see all the other relevant work I have done in computer science and data science!"," ",Object(j.jsx)("span",{role:"img","aria-label":"right pointer",children:"\ud83d\udc49"})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"text-xl text-black font-bold",children:"Relevant Experience"}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"text-lg text-black",children:"Web Developer | Green Destiny LLC"}),Object(j.jsx)("p",{className:"text-sm",children:"2018 - 2020 | Chicago, IL (remote)"}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"text-xl text-black font-bold",children:"Other Work"}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"text-lg text-black",children:"Startup Co-Founder | CANEMBRYO"}),Object(j.jsx)("p",{className:"text-sm",children:"2014 - 2017 | Toronto, ON"}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"text-lg text-black",children:"Hospital Emergency Volunteer | SNH - Birchmount Hospital"}),Object(j.jsx)("p",{className:"text-sm",children:"2018 - 2019 | Scarborough, ON"}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"text-lg text-black",children:"Hospital Rehabilitation Volunteer | Sunnybrook - St. John's Rehab"}),Object(j.jsx)("p",{className:"text-sm",children:"2012 - 2014 | Toronto, ON"})]}),Object(j.jsxs)("div",{className:"bg-white bg-opacity-80 block p-5 mx-auto mt-10 rounded-lg w-2/3",children:[Object(j.jsx)("h1",{className:"text-center text-2xl cursive text-black",children:"Skills"}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"text-xl text-black font-bold",children:"Computer Science"}),Object(j.jsx)("p",{children:"Languages: Pyhon | C | C++ | R | JavaScript | HTML | CSS"}),Object(j.jsx)("p",{children:"Object-oriented Programming | Node.js | Linux | Docker | GitHub | Bash | Express.js | Socket.io | React | Wordpress"}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"text-xl text-black font-bold",children:"Data Science"}),Object(j.jsx)("p",{children:"SQL | Scikit-learn | Numpy | Pandas | TensorFlow | Tableau | Statistical and Mathematical Modelling | Deep Learning | Machine Learning | Webscraping | Data Cleaning and Preprocessing | Data Visualization (Matplotlib, Seaborn, Bokeh, Plotly, Folium) | AWS | Deployment"}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{className:"text-xl text-black font-bold",children:"Other"}),Object(j.jsx)("p",{children:"Scrum & Agile | Strong Logical-thinking and Problem-Solving Skills | Strong Interpersonal Skills | Bilingual (English & Persian)"})]})]})]})}function w(){return Object(j.jsx)("header",{className:"bg-black",children:Object(j.jsxs)("div",{className:"container mx-auto flex justify-between",children:[Object(j.jsx)("nav",{children:Object(j.jsx)(i.c,{to:"/",exact:!0,activeClassName:"text-black",className:"inline-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-white text-4xl font-bold cursive tracking-widest",children:"Aref"})}),Object(j.jsxs)("nav",{children:[Object(j.jsx)(i.c,{to:"/about",activeClassName:"text-gray-100 bg-gray-700",className:"inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-white",children:"About Me"}),Object(j.jsx)(i.c,{to:"/projects",activeClassName:"text-gray-100 bg-gray-700",className:"inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-white",children:"Projects"})]}),Object(j.jsxs)("div",{className:"inline-flex py-3 px-3 my-6",children:[Object(j.jsx)(o.SocialIcon,{url:"mailto:arefjadda@gmail.com",title:"arefjadda@gmail.com",className:"mr-4",target:"_blank",bgColor:"#000",fgColor:"#fff",style:{height:35,width:35}}),Object(j.jsx)(o.SocialIcon,{url:"https://github.com/arefjadda",className:"mr-4",target:"_blank",bgColor:"#000",fgColor:"#fff",style:{height:35,width:35}}),Object(j.jsx)(o.SocialIcon,{url:"https://www.linkedin.com/in/arefjadda/",className:"mr-4",target:"_blank",bgColor:"#000",fgColor:"#fff",style:{height:35,width:35}}),Object(j.jsx)(o.SocialIcon,{url:"https://twitter.com/arefjadda",className:"mr-4",target:"_blank",bgColor:"#000",fgColor:"#fff",style:{height:35,width:35}})]})]})})}var v=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)(n.c,{children:[Object(j.jsx)(n.a,{component:x,path:"/",exact:!0}),Object(j.jsx)(n.a,{component:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(w,{}),Object(j.jsx)(n.a,{component:k,path:"/about"}),Object(j.jsx)(n.a,{component:u,path:"/projects"}),Object(j.jsx)(n.a,{component:O,path:"/blog/:slug"}),Object(j.jsx)(n.a,{component:N,path:"/blog"})]})}})]})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,529)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),c(e),r(e),s(e),l(e)}))};l.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),S()}},[[528,1,2]]]);
//# sourceMappingURL=main.35d19614.chunk.js.map