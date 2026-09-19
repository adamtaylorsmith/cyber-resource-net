// import React from 'react'
// import cup from '../src/images/coffee2.png'

export default function Footer() {
  return (
    <div className='flex justify-center text-sm bg-zinc-900 pt-16 pb-4'>
      <div className='font-bold mb-6 text-zinc-500 px-6'>Adam Taylor 2026</div>
      <a href="mailto:is3jlxt0g@mozmail.com" target="_blank" rel="noreferrer" className="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5" color="#71717A">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className='font-bold mb-6 text-zinc-500'
      >
        Back to top &#8593;
      </a>
      {/* window.scrollTo(0, 0) &#8593; */}
      {/* <a href="https://buymeacoffee.com/adamtaylorsmith" target="_blank" rel="noreferrer" className="">
        <img src={cup} className='w-6 mt-0.5' />
      </a> */}
    </div>
  )
}
