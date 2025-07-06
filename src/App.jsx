import React from "react";
import {Router, Routes, Route, BrowserRouter ,Link} from "react-router-dom";
import "./App.css"
function Home(){
  return(
    <>
    <section class="text-gray-400 bg-black body-font" >
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded  " className="hero-image " alt="hero" src="./src/assets/portfolio.png"/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white hero-image">HI! I AM SUNEHA</h1>
      <p class="leading-relaxed mb-8  text-white hero-image">I AM A SOFTWARE ENGINEER AND A FRONT END DEVELOPER.</p>
      
      </div>
    </div>
</section>
    
    
    </>
  )
}

function About(){
  return(
    <>
    <section class="text-gray-600 body-font bg-black h-200">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-5xl  mb-4 font-large  " className="about-heading text-white">About Me </h1>
       <h2 class="font-bold text-2xl about-para text-white">Front-end developer|Software engineer
      </h2>
      <p class="mb-8 leading-relaxed about-para text-2xl text-white">I'm a passionate and creative Frontend Developer with a strong
          foundation in HTML, CSS, JavaScript, and React. I love building
          responsive and interactive websites with clean UI and seamless UX. My
          goal is to combine design and development to bring ideas to life on
          the web. I'm always eager to learn new technologies and work on
          innovative projects.Skilled in database management using MySQL and
          Firebase, with a strong understanding of ES6.
         I currently pursuing a Bachelor's degree in Software Engineering at Sindh Madressatul Islam University (SMIU).
         
</p>
 
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded about-heading" alt="hero" src="./src/assets/portfolio.png"/>
    </div>
  </div>
</section>
    </>
  )
}

function Projects(){
  return(
    <>
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Projects
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              I'm excited to showcase some of the projects I've built as part of
              my frontend development journey. Each project reflects my skills
              in HTML, CSS, JavaScript, and React — along with my passion for
              creating user-friendly and visually engaging web applications.
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4 image-container">
              <div className="bg-gray-100 p-6 rounded-lg relative overflow-hidden">
                <img
                  className="h-60 rounded w-full object-cover object-center mb-6 project-image"
                  src="./src/assets/work-1.png"
                  alt="Github Dev Finder"
                />
                <div className="blur-layer">
                  <div className="blur"></div>
                  <a
                    href="https://sunehamariam.github.io/github-dev-finder/"
                    className="text"
                    target="_blank"
                  >
                    🔍 Preview Project
                  </a>
                </div>
                <h2 className="text-lg text-gray-900 font-bold title-font mb-4">
                  Github Dev Finder
                </h2>
                <p className="leading-relaxed text-base">
                  A sleek React app to search GitHub profiles with live API
                  fetch and user-friendly UI.
                </p>
              </div>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4 image-container">
              <div className="bg-gray-100 p-6 rounded-lg relative overflow-hidden">
                <img
                  className="h-60 rounded w-full object-cover object-center mb-6 project-image"
                  src="./src/assets/work-2.png"
                  alt="Music Player"
                />
                <div className="blur-layer">
                  <div className="blur"></div>
                  <a
                    href="https://sunehamariam.github.io/music-player/"
                    className="text"
                    target="_blank"
                  >
                    🔍 Preview Project
                  </a>
                </div>
                <h2 className="text-lg text-gray-900 font-bold title-font mb-4">
                  Music Player
                </h2>
                <p className="leading-relaxed text-base">
                  Stylish interactive player with smooth controls using HTML,
                  CSS, JS.
                </p>
              </div>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4 image-container">
              <div className="bg-gray-100 p-6 rounded-lg relative overflow-hidden">
                <img
                  className="h-60 rounded w-full object-cover object-center mb-6 project-image"
                  src="./src/assets/work-3.png"
                  alt="Calculator"
                />
                <div className="blur-layer">
                  <div className="blur"></div>
                  <a
                    href="https://sunehamariam.github.io/codeAlpha-Task2/"
                    className="text"
                    target="_blank"
                  >
                    🔍 Preview Project
                  </a>
                </div>
                <h2 className="text-lg text-gray-900 font-bold title-font mb-4">
                  Calculator
                </h2>
                <p className="leading-relaxed text-base">
                  A basic calculator with standard operations and clean UI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {/* Card 1 */}
      <div className="xl:w-1/4 md:w-1/2 p-4 image-container">
        <div className="bg-gray-100 p-6 rounded-lg relative overflow-hidden">
          <img
            className="h-60 rounded w-full object-cover object-center mb-6 project-image"
            src="./src/assets/work-4.png"
            alt="Real Time Form"
          />
          <div className="blur-layer">
            <div className="blur"></div>
            <a
              href="https://sunehamariam.github.io/real-time-form/"
              className="text"
              target="_blank"
            >
              🔍 Preview Project
            </a>
          </div>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-4">
            Real Time Form
          </h2>
          <p className="leading-relaxed text-base">
            Interactive feedback form with real-time validation and live preview.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="xl:w-1/4 md:w-1/2 p-4 image-container">
        <div className="bg-gray-100 p-6 rounded-lg relative overflow-hidden">
          <img
            className="h-60 rounded w-full object-cover object-center mb-6 project-image"
            src="./src/assets/work-5.png"
            alt="SOAT Bootstrap"
          />
          <div className="blur-layer">
            <div className="blur"></div>
            <a
              href="https://sunehamariam.github.io/bootstrap/bootstrap/"
              className="text"
              target="_blank"
            >
              🔍 Preview Project
            </a>
          </div>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-4">
            SOAT Bootstrap
          </h2>
          <p className="leading-relaxed text-base">
            Responsive website for SOAT using Bootstrap framework.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="xl:w-1/4 md:w-1/2 p-4 image-container">
        <div className="bg-gray-100 p-6 rounded-lg relative overflow-hidden">
          <img
            className="h-60 rounded w-full object-cover object-center mb-6 project-image"
            src="./src/assets/work-6.png"
            alt="Watch Landing Page"
          />
          <div className="blur-layer">
            <div className="blur"></div>
            <a
              href="https://sunehamariam.github.io/smart-watch/landing%20page/"
              className="text"
              target="_blank"
            >
              🔍 Preview Project
            </a>
          </div>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-4">
            Watch Landing Page
          </h2>
          <p className="leading-relaxed text-base">
            Modern responsive page showcasing a premium watch product.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
    )}

function Skills() {
  return (
    <>
      <section className="bg-black text-white py-26 text-8xl " id="skills">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 animate-fadeIn">💻 My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Skill Item */}
            <div className="group relative p-6 bg-gray-800 rounded-2xl shadow-lg transform transition-transform hover:-translate-y-2 hover:scale-105">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-12 h-12 mx-auto animate-pulse" />
              <p className="mt-4 text-lg font-semibold group-hover:text-yellow-300 transition">HTML5</p>
            </div>

            <div className="group relative p-6 bg-gray-800 rounded-2xl shadow-lg transform transition-transform hover:-translate-y-2 hover:scale-105">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-12 h-12 mx-auto animate-pulse" />
              <p className="mt-4 text-lg font-semibold group-hover:text-blue-400 transition">CSS3</p>
            </div>

            <div className="group relative p-6 bg-gray-800 rounded-2xl shadow-lg transform transition-transform hover:-translate-y-2 hover:scale-105">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12 mx-auto animate-pulse" />
              <p className="mt-4 text-lg font-semibold group-hover:text-yellow-400 transition">JavaScript</p>
            </div>

            <div className="group relative p-6 bg-gray-800 rounded-2xl shadow-lg transform transition-transform hover:-translate-y-2 hover:scale-105">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12 mx-auto animate-pulse" />
              <p className="mt-4 text-lg font-semibold group-hover:text-cyan-300 transition">React</p>
            </div>

            {/* ES6 */}
            <div className="group relative p-6 bg-gray-800 rounded-2xl shadow-lg transform transition-transform hover:-translate-y-2 hover:scale-105">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="ES6" className="w-12 h-12 mx-auto animate-pulse" />
              <p className="mt-4 text-lg font-semibold group-hover:text-yellow-200 transition">ES6</p>
            </div>

            {/* Firebase */}
            <div className="group relative p-6 bg-gray-800 rounded-2xl shadow-lg transform transition-transform hover:-translate-y-2 hover:scale-105">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-12 h-12 mx-auto animate-pulse" />
              <p className="mt-4 text-lg font-semibold group-hover:text-orange-300 transition">Firebase</p>
            </div>

            {/* Bootstrap */}
            <div className="group relative p-6 bg-gray-800 rounded-2xl shadow-lg transform transition-transform hover:-translate-y-2 hover:scale-105">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-12 h-12 mx-auto animate-pulse" />
              <p className="mt-4 text-lg font-semibold group-hover:text-purple-300 transition">Bootstrap</p>
            </div>

            {/* Tailwind CSS */}
            <div className="group relative p-6 bg-gray-800 rounded-2xl shadow-lg transform transition-transform hover:-translate-y-2 hover:scale-105">
              <img src="./src/assets/icons8-tailwind-css-48.png" alt="Tailwind CSS" className="w-12 h-12 mx-auto animate-pulse" />
              <p className="mt-4 text-lg font-semibold group-hover:text-teal-300 transition">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function Contact(){
  return(
    <>
    <section class="text-gray-600 body-font relative bg-black">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Let's Connect!</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Have a question, want to work together, or just want to say hi?  
Fill out the form below and I’ll get back to you as soon as possible..</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2 border-b-blue-950">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-white">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-white">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-white">Message</label>
            <textarea id="message" name="message" class="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</section>
    <footer class="text-gray-600 body-font bg-black h-60 flex items-end justify-center">
    <p class="text-sm text-white ">© 2025 Suneha | Frontend Developer</p>
</footer>

    
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
    <div>
      <nav className="navbar">
        <h1>Suneha | Frontend Developer</h1>
      <Link to="/" className="nav-links">Home</Link>
      <Link to="About" className="nav-links">About</Link>
        <Link to="Projects" className="nav-links">Projects</Link>
           <Link to="skills" className="nav-links">Skills</Link>
              <Link to="Contact" className="nav-links">Contact</Link>

      </nav>
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;