// import React from 'react'
// import bannerImg from '../src/images/bannerWh30.png'
// import bannersImg from '../src/images/bannerBu30.png'
// import logo from '../src/images/icon.png'

const Home = () => {
  return (
    <>
      <div className='bg-neutral-800 h-full'>
        
        <h1 className="mt-0 mb-12 flex justify-center text-green-500 text-xl md:text-2xl font-bold mx-4">Cybersecurity Applications, Reports, Resources and Tools</h1>

        <div className="mx-8 md:mx-14 lg:mx-48 pb-16 lg:pb-24 xl:mx-80 text-md text-neutral-300 leading-relaxed">
          This collection was built while developing a <span className="font-bold">home laboratory</span> and working towards the following Cybersecurity technical certifications;<br/><br/><span className=" text-blue-300">CompTIA Network+</span><br/><span className=" text-green-400">CompTIA Security+</span><br/><span className=" text-blue-300">Google Cybersecurity Analyst</span>
        </div>

      </div>
    </>
  )
}

export default Home
