import { BsToggleOn } from 'react-icons/bs';
import { useState } from 'react';
import CookieBanner from './Cookies';
import { FaHome, FaPhone, FaLinkedinIn, FaGithub, FaEnvelope ,FaArrowDown} from 'react-icons/fa';
//import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll'


const Resume = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div name='top' className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white px-10 md:px-10 lg:px-40 dark:bg-gray-900 dark:text-white">
        <nav className="py-10 mb-12 flex justify-between">
          <a href='/' className="text-xl font-burtons py-2 text-pink-700 font-semibold md:text-2xl">
          Elizabeth's Portfolio
          </a>
          <CookieBanner className="" />
          <ul className="flex items-center">
            <li className='flex flex-col'>
              <span className='animate-bounce'><FaArrowDown /></span>
              <BsToggleOn
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-xl mt-1"
              />
            </li>
            <li className="hover:scale-110 duration-300">
              <a
                className="bg-gradient-to-r from-pink-400 to-pink-800 text-white px-4 py-1 rounded-full ml-8 sm:max-w-[959px] inline-block"
                href='/'
              >
               Home
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-6">
          <h2 className="text-5xl py-2 text-teal-600 font-bold md:text-5xl">
          Elizabeth Ucar
          </h2>
          <h2 className="text-5xl py-2 text-teal-600 font-bold mb-6 md:text-5xl">CV</h2>
          <p className="text-center">
            <span className="inline-block">Skarpbrunnavägen 197</span>
            <span className="inline-block mt-1 ml-2">
              <FaHome />
            </span>
          </p>
          <p className="text-center">
            <span className="inline-block">+46 739701047</span>
            <span className="inline-block mt-1 ml-2">
              <FaPhone />
            </span>
          </p>
          <p className="text-center">
            <a className="underline text-indigo-500 animate-pulse" href="mailto:elizg77@hotmail.com">
              elizg77@hotmail.com
            </a>
            <span className="inline-block mt-1 ml-2">
              <FaEnvelope />
            </span>
          </p>
          <p className="text-center">
          <a href='https://www.linkedin.com/in/elizabeth-ucar-060826224/' className="inline-block underline text-indigo-500">Elizabeth Ucar</a>
            <span className="inline-block mt-1 ml-2">
              <FaLinkedinIn />
            </span>
          </p>
          <p className="text-center">
            <a href='https://github.com/Elizabethucar?tab=repositories' className="inline-block underline text-indigo-500">Elizabethucar</a>
            <span className="inline-block mt-1 ml-2">
              <FaGithub />
            </span>
          </p>
          <p className="mt-12">
            I'm a detail-oriented front-end developer who believes in writing clean, maintainable code and passionate
            about all things tech and web development. I have experience with responsive design, working with APIs,
            version control (Git/Github), as well a very good understanding of Scrum and agile way of working.
          </p>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 mt-16 dark:text-white '>
      <div className='text-center shadow-2xl shadow-teal-600 p-6 rounded-xl my-10 dark:shadow-teal-500'>
        <h4 className='py-4 text-lime-400 font-bold'>Tools i use</h4>
        <p className='text-gray-800 py-1 dark:text-white'>• React.js</p>
        <p className='text-gray-800 py-1  dark:text-white'>• JavaScript</p>
        <p className='text-gray-800 py-1  dark:text-white'>• MongoDB</p>
        <p className='text-gray-800 py-1  dark:text-white'>• GitHub</p>
        <p className='text-gray-800 py-1  dark:text-white'>• Next.js</p>
      </div>
      <div className='text-center shadow-2xl  shadow-teal-600 p-6 rounded-xl my-10 dark:shadow-teal-500'>
        <h4 className='py-4 text-lime-400 font-bold'>Tools i use</h4>
        <p className='text-gray-800 py-1  dark:text-white'>• Scrum</p>
        <p className='text-gray-800 py-1  dark:text-white'>• Node.js</p>
        <p className='text-gray-800 py-1  dark:text-white'>• Tailwind Css</p>
        <p className='text-gray-800 py-1  dark:text-white'>• Express</p>
        <p className='text-gray-800 py-1  dark:text-white'>• Docker</p>
      </div>
      </div>
    
       
          <div className="pt-10 flex flex-col items-start relative pb-16 md: sm:items-start">
          <div>
              <img src="../images/branch.png" alt="branches" className='absolute opacity-10 ml-12 
              ' />
              </div>
            <h3 className="text-2xl text-start py-2 text-black font-bold mt-12 mb-6 md:text-2xl dark:text-white">Experience</h3>
            <p>NOV 2022</p>
            <h2 className="text-3xl text-start py-2 text-teal-600 font-bold md:text-3xl">LIA | Sudo Sweden (24 weeks)</h2>
            <ul className="flex flex-col text-start mt-6">
              <li> Building a responsive application with React and Tailwind</li>
              <li> Connect API from backend</li>
              <li>Scrum master</li>
            </ul>
            <div className="pt-12 flex flex-col text-start">
              <p>SEP 2017 - 2023</p>
              <h2 className="text-3xl py-2 text-teal-600 font-bold md:text-3xl">Retail Manager | Mac Cosmetics</h2>
              <ul className="flex flex-col text-start mt-6">
                <li> Planning schedule, budgets, sales and visual merchandiser</li>
                <li> Pushing sales, motivate the team, educate the team</li>
                <li> Sales oriented and customer focus</li>
                <li>Business acumen, cross-functional teams</li>
              </ul>
            </div>
         
              <p className='mt-12'>NOV 2022</p>
              <h2 className="text-3xl py-2 text-teal-600 font-bold text-start md:text-3xl">IT Consultant | Phantoms</h2>
             
              <ul className="flex flex-col text-start mt-6">
                <li> Server teacher at Jensen Education Kista</li>
                <li> Teaching server, API, Express, Node.js, Git, and GitHub</li>
                <li> Planning lessons</li>
              </ul>
           
             
            <div className=" flex flex-col items-start pt-12">
              <p>APRIL 2013 - 2017</p>
              <h2 className="text-3xl py-2 text-teal-600 text-start font-bold md:text-3xl ">Sales | Åhlens Linköping</h2>
              <ul className="flex flex-col text-start mt-6">
                <li> Cashier, visual merchandiser</li>
                <li> Sales oriented and customer focus</li>
              </ul>
            </div>
           
            <h3 className="text-2xl py-2 text-black font-bold mt-12 mb-6 md:text-2xl dark:text-white">Education</h3>
              <p>AUG 2021 - JUNE 2023</p>
              <h2 className="text-3xl py-2 text-teal-600 font-bold text-start md:text-3xl">
              Frontend Development | 2 Years</h2>
              <p className='text-start'>Jensen Education, focus on websecurity</p>
              
              <h3 className="text-2xl py-2 text-black font-bold text-start mt-12 mb-6 md:text-2xl dark:text-white">
                Skills & Interests
              </h3>
              <h2 className="text-3xl py-2  text-teal-600 font-bold md:text-3xl">Skills:</h2>
             
              <p className='text-start'> JavaScript, ReactJS, Bootstrap, HTML/CSS, Tailwind, Node.js, Express.js, Git, REST.API, MongoDB, Jira,
                Scrum.
              </p>
              <h2 className="text-3xl py-2 text-teal-600 font-bold md:text-3xl mt-12">Languages:</h2>
              <p className='text-start'>Swedish - Native language</p>
              <p className='text-start'>English - Fluent</p>
              <p className='text-start'>Arameic - Native Language</p>
              <h2 className="text-3xl py-2 text-teal-600 font-bold md:text-3xl mt-12">Interests:</h2>
              <p className="text-start">Sustainability, coding, music, design, make-up, cinema, travelling, nature.</p>
        
          </div>
          <div className='flex justify-end relative'>
        <Link className='bg-gradient-to-r from-pink-400 to-pink-800 text-white px-4 py-2 rounded-full  hover:scale-110 duration-300 '
       to="top" smooth={true} duration={500}>To The Top</Link>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
