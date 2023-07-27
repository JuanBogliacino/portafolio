import ReduxCart from '../assets/projects/redux-cart.png'
import QuizApp from '../assets/projects/quiz-app.png'
import Pokedex from '../assets/projects/pokedex.png'
import AppClima from '../assets/projects/app-clima.png'
import EcommerceCars from '../assets/projects/e-commerce-autos.png'
import AppMovies from '../assets/projects/app-movies.png'
import TaskList from '../assets/projects/task-list.png'
import Projects from './Projects'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 pt-[120px]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-600 font-tektur'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <Projects img={EcommerceCars} name='E-commerce Cars' serCODE='https://github.com/JuanBogliacino/e-commerce-autos' />
                <Projects img={ReduxCart} live name='Redux Cart' serCODE='https://github.com/JuanBogliacino/redux-cart' srcLIVE='https://juanbogliacino.github.io/redux-cart/' />
                <Projects img={AppMovies} live name='Search Movies App' serCODE='https://github.com/JuanBogliacino/search-movies-app' srcLIVE='https://search-movies-app10.netlify.app/' />
                <Projects img={TaskList} live name='Task List' serCODE='https://github.com/JuanBogliacino/Task-List' srcLIVE='https://task-list10.netlify.app/' />
                <Projects img={QuizApp} live name='Quiz App' serCODE='https://github.com/JuanBogliacino/quiz-app' srcLIVE='https://64b606a842d1e213eb391e71--benevolent-creponne-0d0df9.netlify.app/' />
                <Projects img={Pokedex} live name='Pokedex' serCODE='https://github.com/JuanBogliacino/pokedex' srcLIVE='https://pokedex10.netlify.app/' />
                <Projects img={AppClima} name='App Clima' serCODE='https://github.com/JuanBogliacino/app-clima' />
            </div>
        </div>
    </div>
  )
}

export default Work