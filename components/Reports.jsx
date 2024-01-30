// import React from 'react'
// import home from '../src/images/home.png'
// import friend from '../src/images/friend.png'
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
import USB from '../src/assets/Parking_Lot_USB_exercise.pdf'
import Documentation from '../src/assets/Best_Practices_for_Documentation.pdf'
import Phishing from '../src/assets/Phishing_Exercise_Report_with_Playbook.pdf'
import FinalReport from '../src/assets/Incident_Final_Report.pdf'
import Controls from '../src/assets/Controls.pdf'
import RiskAssess from '../src/assets/Risk_Assessment_Report.pdf'
import RiskControl from '../src/assets/Controls_Compliance_Checklist.pdf'

const Reports = () => {
  return ( 
    <div className='bg-neutral-800 h-full'>

      <h1 className="mt-0 mb-12 flex justify-center text-green-500 text-xl md:text-2xl font-bold mx-4">Example Reports</h1>

{/* ****************************************************************************************************************************** */}
      <h2 className='mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-5 text-md underline leading-relaxed text-xl font-bold text-green-600'>Analysis and Preparation:</h2>

      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={AccessControl} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Access Controls Worksheet (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={Documentation} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Best Practices for Effective Documentation (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={Controls} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Controls and Compliance (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={HomeAsset} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Home Asset Inventory (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://csbygb.gitbook.io/pentips/reporting/pentest-report" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">How to report your findings </a><a href="https://www.hacker101.com/resources/articles/writing_a_report_and_cvss" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">(2)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={USB} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Parking Lot USB exercise (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={Phishing} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Phishing Exercise with Playbook (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://github.com/juliocesarfort/public-pentesting-reports" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Published Public Penetration Test Reports</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={RiskAssess} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Risk Assessment <a href={RiskControl} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">(2)</a> (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={RiskRegister} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Risk Register (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={SecurityRisk} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Security Risk Assessment (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={VulnAssess} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Vulnerability Assessment (.pdf)</a>
      </div>


{/* ****************************************************************************************************************************** */}
      <h2 className='mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-5 text-md leading-relaxed text-xl font-bold text-green-600 pt-6 underline'>Incident and Response:</h2>

      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={AnalyzeNetworkAttack} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Analyze a Network Attack (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={DataLeak} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Data Leak Worksheet (.pdf)</a>
      </div>
      
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={FinalReport} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Incident Final Report (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={IncidentInitial} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Incident Initial Report (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={IncidentReport} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Incident Report Analysis (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={NIST_CSF_Incident} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Incident Report Analysis using NIST CSF (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={SecurityIncident} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Security Incident Report (.pdf)</a>
      </div>
      
      
      
    </div>
  )
}

export default Reports