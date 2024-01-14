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
import HomeAsset from '../src/assets/Home_Asset_Inventory.pdf'
import RiskRegister from '../src/assets/Risk_Register_exemplar.pdf'
import DataLeak from '../src/assets/Data_Leak_Worksheet.pdf'
import AccessControl from '../src/assets/Access_control_worksheet.pdf'
import VulnAssess from '../src/assets/Vulnerability_Assessment_Report.pdf'

const Reports = () => {
  return ( 
    <div className='bg-gray-100 h-full'>

      <h1 className="mt-0 mb-12 flex justify-center text-green-600 text-xl md:text-2xl font-bold">Cyber Reports</h1>

      {/* <h2 className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">This collection was built while developing a home lab and</h2> */}
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://csbygb.gitbook.io/pentips/reporting/pentest-report" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">How to report your findings</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://github.com/juliocesarfort/public-pentesting-reports" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Published Penetration Test Reports</a>
      </div>
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
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href={HomeAsset} target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Home Asset Inventory (.pdf)</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href={RiskRegister} target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Risk Register (.pdf)</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href={DataLeak} target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Data Leak Worksheet (.pdf)</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href={AccessControl} target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Access Controls Worksheet (.pdf)</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 pb-2 text-md leading-relaxed">
        <a href={VulnAssess} target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Vulnerability Assessment (.pdf)</a>
      </div>
    </div>
  )
}

export default Reports