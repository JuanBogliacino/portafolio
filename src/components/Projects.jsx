const Projects = ({ live, img, name, srcLIVE, serCODE }) => {
  return (
    <div>
     {/* Mobile Info */}
    <div className="sm:hidden">
        <p className="pb-5 text-2xl font-bold text-white">{name}</p>
    </div>

    <div style={{backgroundImage: `url(${img})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 sm:group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            { name }
                        </span>
                        <div className='pt-8 text-center'>
                            {
                                live &&
                                <a href={srcLIVE} target='_BLANK'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-600 text-white font-bold text-lg'>Live</button>
                            </a>
                            }
                            <a href={serCODE} target='_BLANK'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-800 text-white font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
    </div>

    <div className='sm:hidden text-center'>
                        <div className='pt-4 text-center'>
                            {
                                live &&
                                <a href={srcLIVE} target='_BLANK'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-green-600 text-white font-bold text-lg'>Live</button>
                            </a>
                            }
                            <a href={serCODE} target='_BLANK'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-800 text-white font-bold text-lg'>Code</button>
                            </a>
                        </div>
        </div>
    </div>
  )
}

export default Projects