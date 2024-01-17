// import React from 'react'
// import home from '../src/images/home.png'
// import friend from '../src/images/friend.png'

const Applications = () => {
  return ( 
    <div className='bg-neutral-800 h-full'>
      <h1 className="mt-0 mb-12 flex justify-center text-green-600 text-xl md:text-2xl font-bold">Cyber Applications</h1>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.snort.org/" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-green-400 underline">Snort - Intrusion Detection System</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://wazuh.com/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 underline">Wazuh Open Source SIEM</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://suricata.io/" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-green-400 underline">Suricata Network Analysis and Threat Detection Software</a>
      </div>
      
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.wireshark.org/docs/wsug_html/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 underline">Wireshark Packet Sniffer</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 pb-2 text-md leading-relaxed">
        <a href="https://www.tcpdump.org/manpages/tcpdump.1.html" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-green-400 underline">Tcpdump</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 pb-2 text-md leading-relaxed">
        <a href="https://www.snort.org/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 underline">Snort - Intrusion Detection System</a>
      </div>
    </div>
  )
}

export default Applications