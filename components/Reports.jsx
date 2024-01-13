// import React from 'react'
// import home from '../src/images/home.png'
// import friend from '../src/images/friend.png'
import NIST_CSF from '../src/assets/Applying_the_NIST_CSF.pdf'
import NIST_CSF_Incident from '../src/assets/Incident_Report_Analysis_NIST_CSF.pdf'
import IncidentReport from '../src/assets/Example_Incident_Report_Analysis.pdf'
import AnalyzeNetworkAttack from '../src/assets/Analyze_Network_Attack.pdf'
import IncidentInitial from '../src/assets/Incident_Initial_Report.pdf'
import SecurityIncident from '../src/assets/Security_Incident_Report.pdf'
import SecurityRisk from '../src/assets/Security_Risk_Assessment.pdf'

const Reports = () => {
  return ( 
    <div className='bg-gray-100 h-full'>

      <h1 className="mt-0 mb-12 flex justify-center text-green-600 text-xl md:text-2xl font-bold">Example Cyber Reports</h1>

      {/* <h2 className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">This collection was built while developing a home lab and</h2> */}

      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href={NIST_CSF} target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Applying the NIST CSF (.pdf)</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href={NIST_CSF_Incident} target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Incident Report Analysis using NIST CSF (.pdf)</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href={IncidentReport} target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Incident Report Analysis (.pdf)</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href={AnalyzeNetworkAttack} target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Analyze a Network Attack (.pdf)</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href={IncidentInitial} target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Incident Initial Report (.pdf)</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href={SecurityIncident} target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Security Incident Report (.pdf)</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href={SecurityRisk} target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Security Risk Assessment (.pdf)</a>
      </div>
      
      
      {/* <img src={home} className="mx-4" height={448} width={220} /> */}

    </div>
  )
}

export default Reports