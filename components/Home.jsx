// import React from 'react'
// import bannerImg from '../src/images/bannerWh30.png'
// import bannersImg from '../src/images/bannerBu30.png'
// import logo from '../src/images/icon.png'

const Home = () => {
  return (
    <>
      <div className='bg-zinc-900 h-full'>
        
      <h1 className="mt-8 mb-4 flex justify-center text-green-500 text-2xl md:text-3xl font-bold mx-4">The Cyber-Resource</h1>
        <h1 className="mt-0 mb-16 flex justify-center text-xl font-bold mx-4 text-neutral-300">Cybersecurity Applications, Reports, Resources and Tools</h1>

        <div className="mx-8 md:mx-14 lg:mx-48 pb-16 lg:pb-24 xl:mx-80 text-lg text-neutral-300 leading-relaxed">
        {/* This website catalogues the numerous resources I have accumulated during my studies.  */}
        This resources on this website were gathered while I established a home laboratory and pursued the following certifications in Cybersecurity,<br/><br/><span className="font-bold">CompTIA Network+</span><br/><span className="font-bold">CompTIA Security+</span><br/><span className="font-bold">Google Cybersecurity Analyst</span>
        </div>
      </div>
    </>
  )
}

export default Home
