import { useState } from 'react'

import Home from '../components/Home'
import Info from '../components/Info'
import Cyber from '../components/Next'
import Cool from '../components/Cool'
// import Footer from '../components/Footer'
import YouTube from '../components/YouTube'

function App() {
  const [view, setView] = useState('Home')

  const myComponents = {
    'Home': <Home />,
    'Info': <Info />,
    'YouTube': <YouTube />,
    'Cool': <Cool />,
    'Next': <Cyber />,
  }

  // const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className='bg-gray-100 w-screen h-screen mb-10'>
          <ul className="flex justify-center">
            <li>
              <button className="text-sm md:text-md mx-4 md:mx-14  mt-10 hover:text-green-600 cursor-pointer font-bold" onClick={() => setView('Home')}>Headline</button>
            </li>
            <li>
              <button className="text-sm md:text-md mx-4 md:mx-14  mt-10 hover:text-green-600 cursor-pointer font-bold" onClick={() => setView('Info')}>App Info</button>
            </li>
            <li>
              <button className="text-sm md:text-md mx-4 md:mx-14  mt-10 hover:text-green-600 cursor-pointer font-bold" onClick={() => setView('YouTube')}>Demo</button>
            </li>
            <li>
              <button className="text-sm md:text-md mx-4 md:mx-14 mt-10 hover:text-green-600 cursor-pointer font-bold" onClick={() => setView('Cool')}>Why Its Cool</button>
            </li>
            <li>
              <button className="text-sm md:text-md mx-4 md:mx-14  mt-10 hover:text-green-600 cursor-pointer font-bold" onClick={() => setView('Next')}>Whats Next</button>
            </li>
          </ul>
        <div>
          <br /><br />

          {myComponents[view]}
        </div>

        {/* <div className=''>
          <Footer />
        </div> */}

      </div>
    </>
  )
}

export default App
