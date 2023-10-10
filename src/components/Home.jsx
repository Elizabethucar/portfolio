
import {BsToggleOn} from 'react-icons/bs'
import {IoLogoLinkedin} from 'react-icons/io'
import { useState } from 'react'
import CookieBanner from './Cookies'
import Typewriter from 'typewriter-effect'
import { FaArrowDown} from 'react-icons/fa'
//import { Link } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll'




const Home = () => {
  const [darkMode, setDarkMode]= useState(false)
  
  return (
    <div name='top' className={darkMode ? 'dark' : ''}>
    <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900  dark:text-white'>
    <section className='min-h-screen'>
    <nav className='py-10 mb-12 flex justify-between'>

    <h1 className='text-xl font-burtons py-2 text-pink-700 font-semibold md:text-2xl'>
    Elizabeth's Portfolio
          </h1>
      <CookieBanner  className=''/>
      <ul className='flex items-center'>
      <li className='flex flex-col'>
       <span className='animate-bounce'><FaArrowDown /></span>
    <BsToggleOn onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer text-xl relative'/>
    </li>
    <li className='hover:scale-110 duration-300'>
      <a className='bg-gradient-to-r from-pink-400 to-pink-800 text-white px-4 py-2 rounded-full ml-6'
       href="/resume">Resume</a>
    </li>
    </ul>
    </nav>
    <div className='text-center p-10'>
      <h2 className='text-5xl py-2 text-teal-600 font-bold md:text-6xl'>

      <Typewriter
            options={{
              strings: ['Elizabeth Ucar'],
              autoStart: true,
              loop: true,
              delay:75
            }}
          />
      </h2>
      <h3 className='text-2xl py-2 md:text-3xl'>Frontend Developer</h3>
      <p className='text-md py-5 leading- text-gray-800 md:text-xl max-w-xl mx-auto  dark:text-white'>Jensen Education, Frontend Developer focusing on websecurity</p>
    </div>
    <div className='text-5xl flex justify-center'>
      <a href="https://www.linkedin.com/in/elizabeth-ucar-060826224/">
      <IoLogoLinkedin  className='hover:scale-110 duration-300'/>
      </a>
    </div>
    <div className=''>
      <img src="../images/Elizabeth.jpg" alt="Elizabeths" className=' mx-auto  rounded-full w-80 h-80 mt-20 md:h-96 md:w-96 hover' />
    </div>
    <div>

    </div>
    </section>
    <section>
      <div>
        <h3 className='text-3xl py-1 text-teal-600 font-bold'>About me</h3>
        <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'>
     
After graduating, I am excited to embark on my journey as a Frontend developer. I bring a positive and creative mindset, along with a wealth of experience in retail management and team building. With my background as a make-up artist, I have a good eye for colors and shapes.

        </p>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
        Collaborating within teams is something I truly enjoy, as it allows me to assist others and contribute my knowledge across various contexts. I believe in the power of sharing knowledge and have no hesitation in seeking help when needed. My will to learn and grow fuels my passion for Frontend development and enables me to deliver exceptional results.

        </p>
        <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'>
        By combining my diverse background and skills, I aim to make a meaningful impact as a Frontend developer, crafting visually stunning and user friendly web experiences. I look forward to embracing new challenges and leveraging my unique blend of talents to create innovative solutions.

        </p>
      </div>
      <h3 className='text-3xl py-1 mt-8 text-teal-600 font-bold'>Knowledge</h3>
      <div className='lg:flex gap-10 dark:text-white'>
      <div className='text-center shadow-2xl p-10 rounded-xl my-10 shadow-teal-600 dark:shadow-teal-500'>
        <h3 className='text-lg font-medium pt-8 pb-2'>Design</h3>
        <p className='py-2'>Design aims to enhance the user experience, making it positive and seamless by ensuring clarity, ease of use, and visual harmony.</p>
        <h4 className='py-4 text-lime-400 font-bold'>Tools i use</h4>
        <p className='text-gray-800 py-1 dark:text-white'>Html/Css</p>
        <p className='text-gray-800 py-1  dark:text-white'>Tailwind</p>
        <p className='text-gray-800 py-1  dark:text-white'>Figma</p>
      </div>
      <div className='text-center shadow-2xl p-10 rounded-xl my-10 shadow-teal-600 dark:shadow-teal-500'>
        <h3 className='text-lg font-medium pt-8 pb-2'> Coding Languages</h3>
        <p className='py-2'>Fundamental tools used in frontend development to write and structure the logic that make websites and applications function properly.</p>
        <h4 className='py-4 text-lime-400 font-bold'>Tools i use</h4>
        <p className='text-gray-800 py-1  dark:text-white'>JavaScript</p>
        <p className='text-gray-800 py-1  dark:text-white'>React</p>
        <p className='text-gray-800 py-1  dark:text-white'>Next.js</p>
      </div>
      <div className='text-center shadow-2xl p-10 rounded-xl my-10 shadow-teal-600 dark:shadow-teal-500'>
        <h3 className='text-lg font-medium pt-8 pb-2'>Other</h3>
        <p className='py-2'>Essential components of software development, providing developers with efficient collaboration, seamless deployment, and streamlined project organization.</p>
        <h4 className='py-4 text-lime-400 font-bold'>Tools i use</h4>
        <p className='text-gray-800 py-1  dark:text-white'>Git/version control</p>
        <p className='text-gray-800 py-1  dark:text-white'>Docker</p>
        <p className='text-gray-800 py-1  dark:text-white'>Jira</p>
      </div>
      </div>
    </section>
<section>
  <div>
    <h3 className='text-3xl py-1 text-teal-600 font-bold'>Interests</h3>

        <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'>
        In my spare time i love to go for walks in the woods, i love nature and the outdoors. Im trying to bring some of it inside as i am surronding myself with plants in my home. Im also passionate about sustainability and responsible use of resources to preserve the environment and meet the needs of present and future generations.

        </p>
        <p className='text-md py-2 leading-8 text-gray-800 mb-6 dark:text-white'>
         And last but not least, i love make-up and experimenting with colors, this is something i can bring in to my design.  With a deep understanding of both fields, I seamlessly blend creativity and technical expertise to create captivating websites while ensuring a visually stunning representation of my skills.

        </p>
        <div className='flex justify-end '>
        <Link className='bg-gradient-to-r from-pink-400 to-pink-800 text-white px-4 py-2 rounded-full  hover:scale-110 duration-300 mb-16'
       to="top" smooth={true} duration={500}>To The Top</Link>
       
       </div>
  </div>
</section>
    </main>
    </div>
  )
}

export default Home