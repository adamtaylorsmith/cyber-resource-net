// import React from 'react'
// import bannerImg from '../src/images/bannerWh30.png'
// import bannersImg from '../src/images/bannerBu30.png'
// import logo from '../src/images/icon.png'

const Home = () => {
  return (
    <>
      <div className='bg-zinc-900 h-full'>
        
        <h1 className="mt-0 mb-8 flex justify-center text-green-500 text-2xl md:text-3xl font-bold mx-4 font-mono">Cyber-Resource</h1>

        <h1 className="mb-10 flex justify-center text-xl mx-8 md:mx-14 lg:mx-48 xl:mx-72 text-blue-400 font-mono">Cybersecurity Applications, Reports, Resources and Tools</h1>

        <div className="mx-8 md:mx-14 lg:mx-48 xl:mx-72 pb-16 lg:pb-24 text-base text-zinc-200 leading-7">
          I created this website to organize and showcase the wealth of resources I encountered during my cybersecurity studies. The applications, reports, resources and tools featured here were curated while building a virtual lab and pursuing the following technical certifications,
          <br/><br/><a className="font-medium hover:text-zinc-400" href="https://www.comptia.org/certifications/network" target="_blank" rel="noreferrer">CompTIA Network+</a><br/><a className="font-medium hover:text-zinc-400" target="_blank" rel="noreferrer" href="https://www.comptia.org/certifications/security">CompTIA Security+</a><br/><a className="font-medium hover:text-zinc-400" target="_blank" rel="noreferrer" href="https://grow.google/certificates/cybersecurity/">Google Cybersecurity Analyst</a>
        </div>

      </div>
    </>
  )
}

export default Home
