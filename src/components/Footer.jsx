import {FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
             <div className='desktop:hidden flex justify-center bg-[#040c18] py-6'>
             <ul className='flex gap-8'>
                 <li className='w-[140px] h-[50px] flex justify-between items-center bg-blue-600'>
                     <a className='flex justify-between items-center w-full text-gray-300' 
                     href="https://www.linkedin.com/in/juan-bogliacino-369b3026a"
                     target='_BLANK'>
                         Linkedin <FaLinkedin size={30} />
                     </a>
                 </li>
                 <li className='w-[140px] h-[50px] flex justify-between items-center bg-[#333333]'>
                     <a className='flex justify-between items-center w-full text-gray-300' 
                     href="https://github.com/JuanBogliacino"
                     target='_BLANK'>
                         GitHub <FaGithub size={30} />
                     </a>
                 </li>
             </ul>
         </div>
  )
}

export default Footer