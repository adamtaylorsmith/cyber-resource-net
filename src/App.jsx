import { useState } from 'react'

import Home from '../components/Home'
import Info from '../components/Info'
import Cool from '../components/Cool'
// import Footer from '../components/Footer'
import YouTube from '../components/YouTube'

function App() {
  const [view, setView] = useState('Home')

  const myComponents = {
    'Home': <Home />,
    'Reports': <Info />,
    'Resources': <YouTube />,
    'Tools': <Cool />,
  }

  // const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className='bg-gray-100 w-screen h-screen mb-10'>
          <ul className="flex justify-center">
            <li>
              <button className="text-sm md:text-md mx-4 md:mx-14  mt-10 hover:text-green-600 cursor-pointer font-bold" onClick={() => setView('Home')}>Cybersecurity</button>
            </li>
            <li>
              <button className="text-sm md:text-md mx-4 md:mx-14  mt-10 hover:text-green-600 cursor-pointer font-bold" onClick={() => setView('Reports')}>Example Reports</button>
            </li>
            <li>
              <button className="text-sm md:text-md mx-4 md:mx-14  mt-10 hover:text-green-600 cursor-pointer font-bold" onClick={() => setView('Resources')}>Online Resources</button>
            </li>
            <li>
              <button className="text-sm md:text-md mx-4 md:mx-14 mt-10 hover:text-green-600 cursor-pointer font-bold" onClick={() => setView('Tools')}>Online Tools</button>
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
