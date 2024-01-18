import { useState } from 'react'

import Home from '../components/Home'
import Reports from '../components/Reports'
import Tools from '../components/Tools'
import Footer from '../components/Footer'
import Resources from '../components/Resources'
import Applications from '../components/Applcations'
import Header from '../components/Header'

function App() {

  const [view, setView] = useState('Home')

  const myComponents = {
    'Home': <Home />,
    'Reports': <Reports />,
    'Resources': <Resources />,
    'Tools': <Tools />,
    'Applications': <Applications />,
  }

  // const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      
      <div className='bg-neutral-800 w-screen h-screen mb-10'>
        
        <Header setView={setView} />

          {/* <ul className="flex justify-center">
            <li>
              <button className="text-sm md:text-lg mx-5 md:mx-12 mt-10 hover:text-green-600 cursor-pointer font-bold" onClick={() => setView('Home')}>Cybersecurity</button>
            </li>
            <li>
              <button className="text-sm md:text-lg mx-5 md:mx-12 mt-10 hover:text-green-600 cursor-pointer font-bold" onClick={() => setView('Applications')}>Applications</button>
            </li>
            <li>
              <button className="text-sm md:text-lg mx-5 md:mx-12 mt-10 hover:text-green-600 cursor-pointer font-bold" onClick={() => setView('Reports')}>Reports</button>
            </li>
            <li>
              <button className="text-sm md:text-lg mx-5 md:mx-12 mt-10 hover:text-green-600 cursor-pointer font-bold" onClick={() => setView('Resources')}>Resources</button>
            </li>
            <li>
              <button className="text-sm md:text-lg mx-5 md:mx-12 mt-10 hover:text-green-600 cursor-pointer font-bold" onClick={() => setView('Tools')}>Tools</button>
            </li>
          </ul> */}

        <div>
          <br /><br />

          {myComponents[view]}
        </div>

        <div className=''>
          <Footer />
        </div>

      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </>
  )
}

export default App
