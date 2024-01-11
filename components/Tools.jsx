// import React from 'react'
// import bannerImg from '../src/images/bannerWh30.png'
// import bannersImg from '../src/images/bannerBu30.png'

const Tools = () => {

  return (
    <div className='bg-gray-100 h-full'>

      <h1 className="mt-0 mb-12 flex justify-center text-green-600 text-xl md:text-2xl font-bold">Online Cyber Tools</h1>

      {/* <h2 className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">This collection was built while developing a home lab and</h2> */}

      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.cisa.gov/resources-tools/resources/free-cybersecurity-services-and-tools" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300">CISA Services and Tools</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.google.com/advanced_image_search" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300">Google Advanced Image Search</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.ipaddressguide.com/cidr" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300">CIDR to IPv4</a>
      </div>

      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://crackstation.net/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300">Password Cracking</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.base64decode.org/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300">Decode and Encode</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://dnsdumpster.com/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300">DNS Recon</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://urlscan.io/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300">URL Scan</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://app.phishtool.com/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300">PhishTool</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://code.nsa.gov/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300">Open Source Tools @ NSA.gov</a>
      </div>

    </div>
  )
}

export default Tools
