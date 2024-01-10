import { useState } from 'react'

import Home from '../components/Home'
import Reports from '../components/Reports'
import Tools from '../components/Tools'
// import Footer from '../components/Footer'
import Resources from '../components/Resources'

function App() {
  const [view, setView] = useState('Home')

  const myComponents = {
    'Home': <Home />,
    'Reports': <Reports />,
    'Resources': <Resources />,
    'Tools': <Tools />,
  }

  // const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className='bg-gray-100 w-screen h-screen mb-10'>
          <ul className="flex justify-center">
            <li>
              <button className="text-sm md:text-lg mx-4 md:mx-14  mt-10 hover:text-green-600 cursor-pointer font-bold" onClick={() => setView('Home')}>Cybersecurity</button>
            </li>
            <li>
              <button className="text-sm md:text-lg mx-4 md:mx-14  mt-10 hover:text-green-600 cursor-pointer font-bold" onClick={() => setView('Reports')}>Reports</button>
            </li>
            <li>
              <button className="text-sm md:text-lg mx-4 md:mx-14  mt-10 hover:text-green-600 cursor-pointer font-bold" onClick={() => setView('Resources')}>Resources</button>
            </li>
            <li>
              <button className="text-sm md:text-lg mx-4 md:mx-14 mt-10 hover:text-green-600 cursor-pointer font-bold" onClick={() => setView('Tools')}>Tools</button>
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
