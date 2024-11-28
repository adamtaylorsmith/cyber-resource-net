// import React from 'react'
// import home from '../src/images/home.png'
// import friend from '../src/images/friend.png'
import NIST_CSF_Incident from '../src/assets/Incident_Report_Analysis_NIST_CSF.pdf'
import IncidentReport from '../src/assets/Example_Incident_Report_Analysis.pdf'
import AnalyzeNetworkAttack from '../src/assets/Analyze_Network_Attack.pdf'
import IncidentInitial from '../src/assets/Incident_Initial_Report.pdf'
import SecurityIncident from '../src/assets/Security_Incident_Report.pdf'
// import SecurityRisk from '../src/assets/Security_Risk_Assessment.pdf'
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
    <div className='bg-zinc-900 h-full'>

      <h1 className="mt-0 mb-16 flex justify-center text-green-500 text-xl md:text-2xl font-bold mx-4 font-mono">Cybersecurity Example Reports</h1>

      <h1 className='mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-4 leading-relaxed text-xl font-medium text-blue-400'>__ Analysis and Preparation Reports:</h1>

      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href={AccessControl}><span className='text-base font-medium text-zinc-300'>Access Controls Worksheet</span>&nbsp;&nbsp;(.pdf)</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href={Documentation}>Best Practices for Effective Documentation (.pdf)</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href={Controls}><span className='text-base font-medium text-zinc-300'>Controls and Compliance</span>&nbsp;&nbsp;(.pdf)</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200" target="_blank" rel="noreferrer" href={HomeAsset}><span className='text-base font-medium text-zinc-300'>Home Asset Inventory</span>&nbsp;&nbsp;(.pdf)</a>
      </div>
      <div className="py-1.5 flex-row flex flex-nowrap">
        <a className="rounded px-4 md:px-6 py-3 
        ml-10 md:ml-14 lg:ml-48 xl:ml-72 
        w-2/3 bg-zinc-800 hover:bg-zinc-700 text-base leading-relaxed text-zinc-300 hover:text-zinc-400" target="_blank" rel="noreferrer" href="https://csbygb.gitbook.io/pentips/reporting/pentest-report"><span className='font-medium text-zinc-300'>How To Report Your Findings</span></a>
        <a href="https://www.hacker101.com/resources/articles/writing_a_report_and_cvss" target="_blank" rel="noreferrer" className="px-4 pb-3 pt-3 ml-1.5 w-1/5 md:w-1/4 mr-10 md:mr-14 lg:mr-48 xl:mr-72 rounded bg-zinc-800 hover:bg-zinc-700 text-sm leading-relaxed text-zinc-300 hover:text-zinc-400">
          <div className='flex-row flex pt-1'>
            <div className='invisible md:visible'>How To (2)</div>
            <div className='visible md:invisible order-first'>(2)</div>
          </div>
        </a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200" target="_blank" rel="noreferrer" href={USB}><span className='text-base font-medium text-zinc-300'>Parking Lot USB Exercise</span>&nbsp;&nbsp;(.pdf)</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium " target="_blank" rel="noreferrer" href={Phishing}><span className='text-base font-medium text-zinc-300'>Phishing Exercise with Playbook</span>&nbsp;&nbsp;(.pdf)</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200" target="_blank" rel="noreferrer" href="https://github.com/juliocesarfort/public-pentesting-reports"><span className='text-base font-medium text-zinc-300'>Published Public Penetration Test Reports</span></a>
      </div>
      <div className="py-1.5 flex-row flex flex-nowrap">
        <a className="rounded px-4 md:px-6 py-3 
        ml-10 md:ml-14 lg:ml-48 xl:ml-72 
        w-2/3 bg-zinc-800 hover:bg-zinc-700 text-base leading-relaxed text-zinc-300 hover:text-zinc-400" target="_blank" rel="noreferrer" href={RiskAssess}><span className='font-medium text-zinc-300'>Risk Assessment Exercise (.pdf)</span></a>
        <a href={RiskControl} target="_blank" rel="noreferrer" className="px-4 pb-3 pt-3 ml-1.5 w-1/5 md:w-1/4 mr-10 md:mr-14 lg:mr-48 xl:mr-72 rounded bg-zinc-800 hover:bg-zinc-700 text-sm leading-relaxed text-zinc-300 hover:text-zinc-400">
          <div className='flex-row flex pt-1'>
            <div className='invisible md:visible'>Risk (2) (.pdf)</div>
            <div className='visible md:invisible order-first'>(2)</div>
          </div>
        </a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200" target="_blank" rel="noreferrer" href={RiskRegister}><span className='text-base font-medium text-zinc-300'>Risk Register (.pdf)</span></a>
      </div>
      <div className="py-1.5 mb-12">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href={VulnAssess}><span className='text-base font-medium'>Vulnerability Assessment (.pdf)</span></a>
      </div>

{/* ****************************************************************************************************************************** */}

      <h1 className='mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-4 leading-relaxed text-xl font-medium text-blue-400'>__ Incident and Response Reports:</h1>

      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 text-neutral-300 hover:text-neutral-400 flex font-medium" target="_blank" rel="noreferrer" href={AnalyzeNetworkAttack}><span className='text-base font-medium text-zinc-300'>Analyze a Network Attack (.pdf)</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href={DataLeak}><span className='text-base font-medium'>Data Leak Worksheet (.pdf)</span></a>
      </div>


      <div className="py-1.5 flex-row flex flex-nowrap">
        <a className="rounded px-4 md:px-6 py-3 
        ml-10 md:ml-14 lg:ml-48 xl:ml-72 
        w-2/3 bg-neutral-800 hover:bg-zinc-700 text-base leading-relaxed text-neutral-300 hover:text-neutral-400" target="_blank" rel="noreferrer" href={IncidentInitial}><span className='font-medium '>Incident Initial Report (.pdf)</span></a>
        <a href={FinalReport} target="_blank" rel="noreferrer" className="px-4 pb-3 pt-3 ml-1.5 w-1/5 md:w-1/4 mr-10 md:mr-14 lg:mr-48 xl:mr-72 rounded bg-neutral-800 hover:bg-zinc-700 text-sm leading-relaxed text-neutral-300 hover:text-neutral-400">
          <div className='flex-row flex pt-1'>
            <div className='invisible md:visible'>Final Report (.pdf)</div>
            <div className='visible md:invisible order-first'>(2)</div>
          </div>
        </a>
      </div>

      <div className="py-1.5 flex-row flex flex-nowrap">
        <a className="rounded px-4 md:px-6 py-3 
        ml-10 md:ml-14 lg:ml-48 xl:ml-72 
        w-2/3 bg-zinc-800 hover:bg-zinc-700 text-base leading-relaxed text-zinc-300 hover:text-zinc-400" target="_blank" rel="noreferrer" href={IncidentReport}><span className='font-medium text-zinc-300'>Incident Report Analysis (.pdf)</span></a>
        <a href={NIST_CSF_Incident} target="_blank" rel="noreferrer" className="px-4 pb-3 pt-3 ml-1.5 w-1/5 md:w-1/4 mr-10 md:mr-14 lg:mr-48 xl:mr-72 rounded bg-zinc-800 hover:bg-zinc-700 text-sm leading-relaxed text-zinc-300 hover:text-zinc-400">
          <div className='flex-row flex pt-1'>
            <div className='invisible md:visible'>NIST CSF (.pdf)</div>
            <div className='visible md:invisible order-first'>(2)</div>
          </div>
        </a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 neutral flex font-medium" target="_blank" rel="noreferrer" href={SecurityIncident}><span className='text-base font-medium text-neutral-300 hover:text-neutral-400'>Security Incident Report (.pdf)</span></a>
      </div>
    </div>
  )
}

export default Reports