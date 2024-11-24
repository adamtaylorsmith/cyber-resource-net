// import React from 'react'
// import bannerImg from '../src/images/bannerWh30.png'
// import bannersImg from '../src/images/bannerBu30.png'
// import logo from '../src/images/icon.png'

const Home = () => {
  return (
    <>
      <div className='bg-stone-900 h-full'>
        
        <h1 className="mt-0 mb-8 flex justify-center text-green-500 text-2xl md:text-3xl font-bold mx-4 font-mono">Cyber Resource</h1>

        <h1 className="mb-10 flex justify-center text-xl mx-8 md:mx-14 lg:mx-48 xl:mx-72 text-blue-400 font-mono">Cybersecurity Applications, Reports, Resources and Tools</h1>

        <div className="mx-8 md:mx-14 lg:mx-48 xl:mx-72 pb-16 lg:pb-24 text-base text-zinc-200 leading-7">
          The Cybersecurity applications, reports, resources and tools cataloged on this website were gathered while establishing a home laboratory and pursuing the following certifications,
          <br/><br/><span className="font-medium">CompTIA Network+</span><br/><span className="font-medium">CompTIA Security+</span><br/><span className="font-medium">Google Cybersecurity Analyst</span>
        </div>

      </div>
    </>
  )
}

export default Home
