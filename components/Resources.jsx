// import React from 'react'
// import bannerImg from '../src/images/bannerWh30.png'
// import bannersImg from '../src/images/bannerBu30.png'
// import ReactPlayer from 'react-player'
import Implementation from '../src/assets/CISA_NIST_Framework_Implementation_Guidance.pdf'
import IncidentHandbook from '../src/assets/Incident_Handlers_Handbook.pdf'
import RiskAssessment from '../src/assets/NIST_Risk_Assessments.pdf'
import Pasta from '../src/assets/PASTA_Worksheet.pdf'
import Incident from '../src/assets/Applying_NIST_CSF.pdf'
import PyReference from '../src/assets/Reference_Guide_Python_Concepts.pdf'
import Glossary from '../src/assets/Google_Cybersecurity_Glossary.pdf' 
import Control from '../src/assets/Control_Categories.pdf' 
import Linux from '../src/assets/Linux_Reference_Goog_Cert.pdf'
import LinuxCheat from '../src/images/LinuxCheatsheet.png'

const Resources = () => {
  return (
    <div className='bg-zinc-900 h-full'>

      <h1 className="mt-0 mb-16 flex justify-center text-green-500 text-xl md:text-2xl font-bold mx-4 font-mono">Cybersecurity Online Resources</h1>

      <h1 className='mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-4 leading-relaxed text-xl font-medium text-blue-300'>Analysis and Preparation Resources:</h1>

      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://www.scamwatch.gov.au/"><span className='text-base font-medium text-zinc-300'>Australia Anti-Scam Centre</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://www.cisco.com/c/en/us/solutions/enterprise/design-zone-security/landing_safe.html">Cisco Secure Architecture for Everyone</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href={Control}><span className='text-base font-medium text-zinc-300'>Control Categories (.pdf)</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://www.sans.org/blog/cybersecurity-podcast-roundup/">Cybersecurity Podcasts</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://cyware.com/cyber-security-news-articles"><span className='text-base font-medium text-zinc-300'>Cyware Latest Cybersecurity News and Articles</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href={Glossary}>Google Cybersecurity Glossary (.pdf)</a>
      </div>

      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://engage.mitre.org/starter-kit/"><span className='text-base font-medium text-zinc-300'>MITRE Cyber Defense Starter Kit</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://staysafeonline.org/resources/">NCA Stay Safe Online</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://media.defense.gov/2023/Feb/22/2003165170/-1/-1/0/CSI_BEST_PRACTICES_FOR_SECURING_YOUR_HOME_NETWORK.PDF"><span className='text-base font-medium text-zinc-300'>NSA Best Practices for Securing Your Home Network (.pdf)</span></a>
      </div>

      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://github.com/OWASP/SecurityShepherd"><span className='text-base font-medium text-zinc-300'>OWASP Security Shepherd __ Application Security Training Platform</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://www.malware-traffic-analysis.net/index.html">Packet Capture files and Malware Samples</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://www.phishing.org/"><span className='text-base font-medium text-zinc-300'>Phishing Prevention and Resources</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://phishingquiz.withgoogle.com/">Phishing Quiz from Google</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://www.ready.gov/"><span className='text-base font-medium text-zinc-300'>Ready.gov</span></a>
      </div>
      <div className="py-1.5 mb-12">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://niccs.cisa.gov/workforce-development/nice-framework">Workforce Framework for Cybersecurity (NICE)</a>
      </div>

{/* ***************************************************************************************************************************88 */}

      <h1 className='mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-4 leading-relaxed text-xl font-medium text-blue-300'>Coding and Operating System Resources:</h1>

      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://overapi.com/">All Cheat Sheets A-Z</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://generatedata.com/"><span className='text-base font-medium text-zinc-300'>Generate Test Data</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://www.cryptohack.org/">Learn Cryptography</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href={LinuxCheat}><span className='text-base font-medium text-zinc-300'>Linux Cheatsheet</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href={Linux}>Linux Reference Google Cert</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://docs.python.org/3/library/functions.html"><span className='text-base font-medium text-zinc-300'>Python Built-in Functions</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://www.pythoncheatsheet.org/cheatsheet/basics"><span className='text-base font-medium text-zinc-300'>Python Cheatsheet</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href={PyReference}>Python Concepts Google Cert (.pdf)</a>
      </div>
      <div className="py-1.5 mb-12">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://peps.python.org/pep-0008/">Python PEP8 Style Guide</a>
      </div>
      

{/* ****************************************************************************************************************************** */}

      <h1 className='mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-4 leading-relaxed text-xl font-medium text-blue-300'>Incident and Response Resources:</h1>

      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://www.cyber.gc.ca/en/guidance/ransomware-playbook-itsm00099"><span className='text-base font-medium text-zinc-300'>Ransomware Playbook</span></a>
      </div>
      <div className="py-1.5 mb-12">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href={IncidentHandbook}>SANS Incident Handlers Handbook (.pdf)</a>
      </div>


{/* ***************************************************************************************************************************88 */}

      <h1 className='mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-4 leading-relaxed text-xl font-medium text-blue-300'>NIST Resources:</h1>

      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://www.nist.gov/cyberframework/assessment-auditing-resources"><span className='text-base font-medium text-zinc-300'>NIST Assessment and Auditing</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href={Implementation}>NIST CSF Application Guide (.pdf)</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://pages.nist.gov/800-63-FAQ/"><span className='text-base font-medium text-zinc-300'>NIST Digital Identity Guidelines</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://www.nist.gov/cyberframework/framework">NIST Framework</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href={Incident}><span className='text-base font-medium text-zinc-300'>NIST Incident Handling Guide (.pdf)</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://nvd.nist.gov/">NIST NVD __ National Vulnerability Database</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href={RiskAssessment}><span className='text-base font-medium text-zinc-300'>NIST Performing Risk Assessments __ SP 800-30 (.pdf)</span></a>
      </div>
      <div className="py-1.5 mb-12">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final">NIST Security and Privacy Controls</a>
      </div>

{/* ****************************************************************************************************************************** */}

      <h1 className='mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-4 leading-relaxed text-xl font-medium text-blue-300'>Organizational Resources:</h1>

      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://www.cisecurity.org/"><span className='text-base font-medium text-zinc-300'>Center For Internet Security</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://www.cisa.gov/">CISA Cybersecurity and Infrastructure Security Agency</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://cloudsecurityalliance.org/"><span className='text-base font-medium text-zinc-300'>Cloud Security Alliance</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://www.ncsc.gov.uk/collection/caf/caf-principles-and-guidance">National Cyber Security Centre (U.K.)</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml"><span className='text-base font-medium text-zinc-300'>Service Name and Transport Protocol Port Number Registry</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://www.rfc-editor.org/">Technical and Organizational Documents about the Internet</a>
      </div>
      <div className="py-1.5 mb-12">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://www.ncsc.gov.uk/collection/cloud/understanding-cloud-services/cloud-security-shared-responsibility-model"><span className='text-base font-medium text-zinc-300'>UK Cloud Security Guide</span></a>
      </div>

{/* ****************************************************************************************************************************** */}

      <h1 className='mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-4 leading-relaxed text-xl font-medium text-blue-300'>Threat Resources:</h1>

      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://github.com/center-for-threat-informed-defense/adversary_emulation_library"><span className='text-base font-medium text-zinc-300'>Adversary Emulation Plans Library</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://talosintelligence.com/">Cisco Talos Threat Intelligence</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://thedfirreport.com/"><span className='text-base font-medium text-zinc-300'>DFIR Report __ Intrusions and Threat Intelligence</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://www.exploit-db.com/">Exploit Database</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://blog.google/threat-analysis-group/"><span className='text-base font-medium text-zinc-300'>Google Threat Analysis Group Blog</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://gtfobins.github.io/">GTFOBins - Bypass local security restrictions</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://labs.inquest.net/"><span className='text-base font-medium text-zinc-300'>InQuest Labs __ File data and threat intelligence</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://github.com/center-for-threat-informed-defense/adversary_emulation_library">Library of adversary emulation plans</a>
      </div>
      <div className="py-1.5 flex-row flex flex-nowrap">
        <a className="rounded px-4 md:px-6 py-3 
        ml-10 md:ml-14 lg:ml-48 xl:ml-72 
        w-2/3 bg-zinc-800 hover:bg-zinc-700 text-base leading-relaxed text-zinc-200 hover:text-zinc-300" target="_blank" rel="noreferrer" href="https://attack.mitre.org/"><span className='text-base font-medium text-zinc-300'>MITRE ATT&CK knowledge base of adversary tactics and techniques</span></a>
        <a href="https://attack.mitre.org/matrices/enterprise/" target="_blank" rel="noreferrer" className="px-4 pb-3 pt-3 ml-1.5 w-1/5 md:w-1/4 mr-10 md:mr-14 lg:mr-48 xl:mr-72 rounded bg-zinc-800 hover:bg-zinc-700 text-sm leading-relaxed text-zinc-200 hover:text-zinc-300">
          <div className='flex-row flex pt-1'>
            <div className='invisible md:visible'>ATT&CK (2)</div>
            <div className='visible md:invisible order-first'>(2)</div>
          </div>
        </a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://engage.mitre.org/matrix/">MITRE Engage Matrix</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://attack.mitre.org/tactics/TA0010/"><span className='text-base font-medium text-zinc-300'>MITRE Exfiltration techniques</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href={Pasta}>PASTA Threat Modeling (.pdf)</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://www.threathunting.net/"><span className='text-base font-medium text-zinc-300'>Threat Hunting Project</span></a>
      </div>
      <div className="py-1.5 mb-12">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://unifiedkillchain.com/">Unified Kill Chain - Threat Modeling</a>
      </div>      

{/* ******************************************************************************************************************************
  {/* <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-base leading-relaxed">
        <a href="https://github.com/Integration-IT/Active-Directory-Exploitation-Cheat-Sheet" target="_blank" rel="noreferrer" className=" text-blue-200 hover:text-blue-500 ">Active Directory Exploitation Cheat Sheet</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-base leading-relaxed">
        <a href="https://github.com/Cloud-Architekt/AzureAD-Attack-Defense" target="_blank" rel="noreferrer" className=" text-zinc-200 hover:text-blue-500 ">Azure Active Directory Attack and Defend</a>
      </div> 
*/}

      <h1 className='mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-4 leading-relaxed text-xl font-medium text-blue-300'>Vulnerability Resources:</h1>

      {/* <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml"><span className='text-base font-medium text-zinc-300'>Apple Security Releases</span></a>
      </div> */}
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://www.cisecurity.org/controls/cis-controls-list">CIS Critical Security Controls</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog"><span className='text-base font-medium text-zinc-300'>CISA Known Exploited Vulnerabilities Catalog</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://www.cve.org/">CVE __ Identify, define, and catalog publicly disclosed cybersecurity vulnerabilities</a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://cwe.mitre.org/"><span className='text-base font-medium text-zinc-300'>Most Dangerous software and hardware weaknesses</span></a>
      </div>
      <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://owasp.org/www-project-top-ten/">OWASP Top Ten application security</a>
      </div>
      {/* <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-400 flex font-medium" target="_blank" rel="noreferrer" href="https://cwe.mitre.org/"><span className='text-base font-medium text-zinc-300'>Security Bulletins from Google Cloud</span></a>
      </div> */}
      {/* <div className="py-1.5">
        <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 leading-relaxed rounded bg-neutral-800 hover:bg-zinc-700 hover:text-zinc-300 flex font-medium text-zinc-200 text-base" target="_blank" rel="noreferrer" href="https://owasp.org/www-project-top-ten/">Vulnerabilities Security Update Guide - Microsoft</a>
      </div> */}
  
    </div>
  )
}

export default Resources
