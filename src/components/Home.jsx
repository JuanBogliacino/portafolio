import {HiArrowNarrowDown} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-green-600 text-2xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] mb-2'>Juan Bogliacino</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I’m a Full Stack web developer passionate about Front-End. I'm looking for a company that will guide me through the beginning of my career so that I can grow professionally</p>
        
        <Link className='w-[200px] text-white border-2 py-3 my-2 flex justify-center items-center hover:bg-green-600 hover:border-green-600 hover:cursor-pointer' to="work" smooth={true} duration={500}>
          View Work
          <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowDown className='ml-3 ' />
            </span>
        </Link>
      </div>
    </div>
  )
}

export default Home