import { useState } from "react";

const Header = ({setView}) => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="py-4 flex justify-center">
      {/* <button className="text-xl font-bold ml-6 md:ml-12 hover:text-green-600 cursor-pointer" onClick={() => setView('Home')}>Adam T Smith</button> */}
      <nav>
        <section className="MOBILE-MENU flex md:hidden">
          <div className="flex">
            <div className="text-lg ml-4 mr-36 sm:mr-80 mt-0 font-bold text-green-600">Cyber-Resource</div>
            <div className="HAMBURGER-ICON space-y-2 mr-8 cursor-pointer" onClick={() => setIsNavOpen((prev) => !prev)}>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>
          </div>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div className="absolute top-0 right-0 px-8 py-8 cursor-pointer" onClick={() => setIsNavOpen(false)}>
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-6 cursor-pointer text-lg">
                <button onClick={() => {setView('Home');setIsNavOpen(false)}}>Cyber-Resource</button>
              </li>
              <li className="border-b border-gray-400 my-6 cursor-pointer">
                <button onClick={() => {setView('Applications');setIsNavOpen(false)}}>Applications</button>
              </li>
              <li className="border-b border-gray-400 my-6 cursor-pointer">
                <button onClick={() => {setView('Reports');setIsNavOpen(false)}}>Reports</button>
              </li>
              <li className="border-b border-gray-400 my-6 cursor-pointer">
                <button onClick={() => {setView('Resources');setIsNavOpen(false)}}>Resources</button>
              </li>
              <li className="border-b border-gray-400 my-6 cursor-pointer">
                <button onClick={() => {setView('Tools');setIsNavOpen(false)}}>Tools</button>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden md:flex">
          <li>
            <button className="text-sm md:text-lg mx-5 md:mx-8 mt-6 text-green-600 hover:text-green-400 cursor-pointer font-bold" onClick={() => setView('Home')}>Cyber-Resource</button>
          </li>
          <li>
            <button className="text-sm md:text-lg mx-5 md:mx-8 mt-6 text-neutral-300 hover:text-green-400 cursor-pointer font-bold" onClick={() => setView('Applications')}>Applications</button>
          </li>
          <li>
            <button className="text-sm md:text-lg mx-5 md:mx-8 mt-6 text-neutral-300 hover:text-green-400 cursor-pointer font-bold" onClick={() => setView('Reports')}>Reports</button>
          </li>
          <li>
            <button className="text-sm md:text-lg mx-5 md:mx-8 mt-6 text-neutral-300 hover:text-green-400 cursor-pointer font-bold" onClick={() => setView('Resources')}>Resources</button>
          </li>
          <li>
            <button className="text-sm md:text-lg mx-5 md:mx-8 mt-6 text-neutral-300 hover:text-green-400 cursor-pointer font-bold" onClick={() => setView('Tools')}>Tools</button>
          </li>
        </ul>
      </nav>
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
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

export default Header