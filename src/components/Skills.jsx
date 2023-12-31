import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import SQL from '../assets/sql.png';
import GIT from '../assets/git.png'
import Express from '../assets/express.png'
import Redux from '../assets/redux.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full text-gray-300 py-[150px]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-green-600 font-tektur'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='img-container shadow-md shadow-[#040c16] duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='img-container shadow-md shadow-[#040c16] duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='img-container shadow-md shadow-[#040c16] duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JAVASCRIPT icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='img-container shadow-md shadow-[#040c16] duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="REACT icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='img-container shadow-md shadow-[#040c16] duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="NODE icon" />
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='img-container shadow-md shadow-[#040c16] duration-500'>
                    <img className='w-36 mx-auto' src={Express} alt="EXPRESS icon" />
                    <p className='my-4'>EXPRESS</p>
                </div>
                <div className='img-container shadow-md shadow-[#040c16] duration-500'>
                    <img className='w-20 mx-auto' src={SQL} alt="SQL icon" />
                    <p className='my-4'>SQL</p>
                </div>
                <div className='img-container shadow-md shadow-[#040c16] duration-500'>
                    <img className='w-20 mx-auto' src={GIT} alt="GIT icon" />
                    <p className='my-4'>GIT</p>
                </div>
                <div className='img-container shadow-md shadow-[#040c16] duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GITHUB icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='img-container shadow-md shadow-[#040c16] duration-500'>
                    <img className='w-20 mx-auto' src={Redux} alt="REDUX icon" />
                    <p className='my-4'>REDUX</p>
                </div>
                <div className='img-container shadow-md shadow-[#040c16] duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="TAILWIND icon" />
                    <p className='my-4'>TAILWIND</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills