import { useState } from "react";

const Header = ({view, setView}) => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-8">
      <button className="text-xl font-bold ml-6 md:ml-12 text-green-500 hover:text-green-300 cursor-pointer mt-1" onClick={() => setView('Home')}><span className="font-mono">Cyber-Resource</span></button>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 mr-12 cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-gray-300"></span>
            <span className="block h-0.5 w-8 bg-gray-300"></span>
            <span className="block h-0.5 w-8 bg-gray-300"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-300"
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
              <li className="border-b border-gray-400 my-6 cursor-pointer">
                <button className="text-base" onClick={() => {setView('Home');setIsNavOpen(false)}}><span className={(view == 'Home' ? 'text-blue-400' : 'text-zinc-200')}>Cyber-Resource Home</span></button>
              </li>
              <li className="border-b border-gray-400 my-6 cursor-pointer">
                <button className="text-base" onClick={() => {setView('Applications');setIsNavOpen(false)}}><span className={(view == 'Applications' ? 'text-blue-400' : 'text-zinc-200')}>Applications Official Docs</span></button>
              </li>
              <li className="border-b border-gray-400 my-6 cursor-pointer">
                <button className="text-base" onClick={() => {setView('Reports');setIsNavOpen(false)}}><span className={(view == 'Reports' ? 'text-blue-400' : 'text-zinc-200')}>Example Reports</span></button>
              </li>
              <li className="border-b border-gray-400 my-6 cursor-pointer">
                <button className="text-base" onClick={() => {setView('Resources');setIsNavOpen(false)}}><span className={(view == 'Resources' ? 'text-blue-400' : 'text-zinc-200')}>Online Resources</span></button>
              </li>
              <li className="border-b border-gray-400 my-6 cursor-pointer">
                <button className="text-base" onClick={() => {setView('Tools');setIsNavOpen(false)}}><span className={(view == 'Tools' ? 'text-blue-400' : 'text-zinc-200')}>Online Tools</span></button>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden lg:flex">
          <li>
            <button className={"mr-16 xl:mr-20 mt-2 hover:text-blue-400 text-lg cursor-pointer"} onClick={() => setView('Applications')}><span className={(view == 'Applications' ? 'text-blue-400' : 'text-zinc-200')}>Applications</span></button>
          </li>
          <li>
            <button className="mr-16 xl:mr-20 mt-2 text-zinc-200 hover:text-blue-400 text-lg cursor-pointer" onClick={() => setView('Reports')}><span className={(view == 'Reports' ? 'text-blue-400' : 'text-zinc-200')}>Reports</span></button>
          </li>
          <li>
            <button className="mr-16 xl:mr-20 mt-2 text-zinc-200 hover:text-blue-400 text-lg cursor-pointer" onClick={() => setView('Resources')}><span className={(view == 'Resources' ? 'text-blue-400' : 'text-zinc-200')}>Resources</span></button>
          </li>
          <li>
            <button className="mr-20 xl:mr-24 mt-2 text-zinc-200 hover:text-blue-400 text-lg cursor-pointer" onClick={() => setView('Tools')}><span className={(view == 'Tools' ? 'text-blue-400' : 'text-zinc-200')}>Tools</span></button>
          </li>
        </ul>
      </nav>
      <style>
        {`
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
            background-color : #0c0a09
          }
        `}
      </style>
    </div>
  );
  // return (
  //   <div className="py-4 flex justify-center">
  //     {/* <button className="text-xl font-bold ml-6 md:ml-12 hover:text-green-600 cursor-pointer" onClick={() => setView('Home')}>Adam T Smith</button> */}
  //     <nav>
  //       <section className="MOBILE-MENU flex md:hidden">
  //         <div className="flex pt-6">
  //           <div className="text-lg ml-4 mt mr-36 sm:mx-72 font-bold text-green-600">Cyber-Resource</div>
  //           <div className="HAMBURGER-ICON space-y-2 mr-8 mt-1 cursor-pointer" onClick={() => setIsNavOpen((prev) => !prev)}>
  //             <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
  //             <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
  //             <span className="block h-0.5 w-8 animate-pulse bg-gray-200"></span>
  //           </div>
  //         </div>
  //         <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
  //           <div className="absolute top-0 right-0 px-8 pt-10 cursor-pointer" onClick={() => setIsNavOpen(false)}>
  //             <svg
  //               className="h-8 w-8 text-gray-300 mr-2 sm:mr-20"
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               stroke="currentColor"
  //               strokeWidth="2"
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //             >
  //               <line x1="18" y1="6" x2="6" y2="18" />
  //               <line x1="6" y1="6" x2="18" y2="18" />
  //             </svg>
  //           </div>
  //           <ul className="flex flex-col items-center justify-between min-h-[250px]">
  //             <li className="border-b border-gray-400 my-6 cursor-pointer text-lg text-zinc-200">
  //               <button onClick={() => {setView('Home');setIsNavOpen(false)}}>Cyber-Resource</button>
  //             </li>
  //             <li className="border-b border-gray-400 my-6 cursor-pointer text-zinc-200">
  //               <button onClick={() => {setView('Applications');setIsNavOpen(false)}}>Applications</button>
  //             </li>
  //             <li className="border-b border-gray-400 my-6 cursor-pointer text-zinc-200">
  //               <button onClick={() => {setView('Reports');setIsNavOpen(false)}}>Reports</button>
  //             </li>
  //             <li className="border-b border-gray-400 my-6 cursor-pointer text-zinc-200">
  //               <button onClick={() => {setView('Resources');setIsNavOpen(false)}}>Resources</button>
  //             </li>
  //             <li className="border-b border-gray-400 my-6 cursor-pointer text-zinc-200">
  //               <button onClick={() => {setView('Tools');setIsNavOpen(false)}}>Tools</button>
  //             </li>
  //           </ul>
  //         </div>
  //       </section>

  //       <ul className="DESKTOP-MENU hidden md:flex">
  //         <li>
  //           <button className="text-sm md:text-lg mx-5 md:mx-8 mt-6 text-green-600 hover:text-green-400 cursor-pointer font-bold" onClick={() => setView('Home')}>Cyber-Resource</button>
  //         </li>
  //         <li>
  //           <button className="text-sm md:text-lg mx-5 md:mx-8 mt-6 text-zinc-200 hover:text-green-400 cursor-pointer font-bold" onClick={() => setView('Applications')}>Applications</button>
  //         </li>
  //         <li>
  //           <button className="text-sm md:text-lg mx-5 md:mx-8 mt-6 text-zinc-200 hover:text-green-400 cursor-pointer font-bold" onClick={() => setView('Reports')}>Reports</button>
  //         </li>
  //         <li>
  //           <button className="text-sm md:text-lg mx-5 md:mx-8 mt-6 text-zinc-200 hover:text-green-400 cursor-pointer font-bold" onClick={() => setView('Resources')}>Resources</button>
  //         </li>
  //         <li>
  //           <button className="text-sm md:text-lg mx-5 md:mx-8 mt-6 text-zinc-200 hover:text-green-400 cursor-pointer font-bold" onClick={() => setView('Tools')}>Tools</button>
  //         </li>
  //       </ul>
  //     </nav>
  //     <style>
  //       {`
  //         .hideMenuNav {
  //           display: none;
  //         }
  //         .showMenuNav {
  //           display: block;
  //           position: absolute;
  //           width: 100%;
  //           height: 100vh;
  //           top: 0;
  //           left: 0;
  //           z-index: 10;
  //           display: flex;
  //           flex-direction: column;
  //           justify-content: space-evenly;
  //           align-items: center;
  //           background-color : #252526;
  //           colo
  //         }
  //       `}
  //     </style>
  //   </div>
  // );
}

export default Header