import { useState } from 'react'

import Home from '../components/Home'
import Reports from '../components/Reports'
import Tools from '../components/Tools'
import Footer from '../components/Footer'
import Resources from '../components/Resources'
import Applications from '../components/Applications'
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
      
      <div className='bg-zinc-900 w-screen h-screen pb-10'>
        
        <Header setView={setView} view={view} />

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
