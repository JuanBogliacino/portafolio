const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-green-600 font-tektur'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Juan Bogliacino, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='mb-2'>
              I have two years of training, one self-taught, and another taking the Full Stack Web Programming course from Digital House.
              </p>
              <p>
              I did a group project during the course that consisted of creating an E-commerce website, using technologies such as HTML, CSS, JavaScript, Node.js, Express, SQL, among others.
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;