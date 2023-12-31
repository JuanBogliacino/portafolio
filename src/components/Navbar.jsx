import { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed z-10 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div className='text-green-600 text-2xl font-bold font-tektur'>
            Portafolio
        </div>

        {/* menu */}
            <ul className='hidden md:flex font-tektur'>
                <li>
                <Link className='hover:text-white' to="home" smooth={true} duration={500}>
                Home
                </Link>
                </li>
                <li>
                <Link className='hover:text-white' to="about" smooth={true} duration={500}>
                About
                </Link>
                </li>
                <li>
                <Link className='hover:text-white' to="skills" smooth={true} duration={500}>
                Skills
                </Link>
                </li>
                <li>
                <Link className='hover:text-white' to="work" smooth={true} duration={500}>
                Work
                </Link>
                </li>
                <li>
                <Link className='hover:text-white' to="contact" smooth={true} duration={500}>
                Contact
                </Link>
                </li>
            </ul>

        {/* Hamburguer */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center font-tektur'}>
        <li className='py-6 text-4xl'>
          <Link className='hover:text-white' onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className='hover:text-white' onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className='hover:text-white' onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className='hover:text-white' onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link className='hover:text-white' onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        </ul>

        {/* Social icons */}
        <div className='hidden desktop:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://www.linkedin.com/in/juan-bogliacino-369b3026a"
                    target='_BLANK'>
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://github.com/JuanBogliacino"
                    target='_BLANK'>
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar