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
    <div className='bg-neutral-800 h-full'>

      <h1 className="mt-0 mb-12 flex justify-center text-green-500 text-xl md:text-2xl font-bold mx-4">Online Resources</h1>


{/* ****************************************************************************************************************************** */}
      <h2 className='mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-5 text-md leading-relaxed text-xl font-bold text-green-600 underline'>Analysis and Preparation:</h2>
      
      {/* <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://github.com/Integration-IT/Active-Directory-Exploitation-Cheat-Sheet" target="_blank" rel="noreferrer" className=" text-blue-300 hover:text-green-400 ">Active Directory Exploitation Cheat Sheet</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://github.com/Cloud-Architekt/AzureAD-Attack-Defense" target="_blank" rel="noreferrer" className=" text-neutral-300 hover:text-green-400 ">Azure Active Directory Attack and Defend</a>
      </div> */}
      
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.scamwatch.gov.au/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Australia Anti-Scam Centre</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.cisco.com/c/en/us/solutions/enterprise/design-zone-security/landing_safe.html" target="_blank" rel="noreferrer" className=" text-neutral-300 hover:text-green-400 ">Cisco SAFE - Secure Architecture for Everyone </a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={Control} target="_blank" rel="noreferrer" className=" text-blue-300 hover:text-green-400 ">Control Categories</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.sans.org/blog/cybersecurity-podcast-roundup/" target="_blank" rel="noreferrer" className=" text-neutral-300 hover:text-green-400 ">Cybersecurity Podcasts</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://cyware.com/cyber-security-news-articles" target="_blank" rel="noreferrer" className=" text-blue-300 hover:text-green-400 ">Cyware Latest Cybersecurity News and Articles</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={Glossary} target="_blank" rel="noreferrer" className=" text-neutral-300 hover:text-green-400 ">Google Cybersecurity Glossary (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://engage.mitre.org/starter-kit/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">MITRE Cyber Defense Starter Kit</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://staysafeonline.org/resources/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">NCA Stay Safe Online</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://media.defense.gov/2023/Feb/22/2003165170/-1/-1/0/CSI_BEST_PRACTICES_FOR_SECURING_YOUR_HOME_NETWORK.PDF" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">NSA Best Practices for Securing Your Home Network (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.isecom.org/OSSTMM.3.pdf" target="_blank" rel="noreferrer" className=" text-blue-300 hover:text-green-400 ">Open Source Security Testing Methodology Manual</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://github.com/OWASP/SecurityShepherd" target="_blank" rel="noreferrer" className=" text-blue-300 hover:text-green-400 ">OWASP Security Shepherd - Application Security Training Platform</a>
      </div>
      {/*   <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.sans.org/newsletters/ouch/" target="_blank" rel="noreferrer" className=" text-blue-300 hover:text-green-400 ">OUCH! Security Awareness Newsletter</a>
      </div> */}
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.malware-traffic-analysis.net/index.html" target="_blank" rel="noreferrer" className=" text-neutral-300 hover:text-green-400 ">Packet Capture files and Malware Samples</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.phishing.org/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Phishing Prevention and Resources</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://phishingquiz.withgoogle.com/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Phishing Quiz from Google</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.ready.gov/" target="_blank" rel="noreferrer" className=" text-blue-300 hover:text-green-400">Ready.gov</a>
      </div>

{/* ***************************************************************************************************************************88 */}
      <h2 className='mx-10 md:mx-14 lg:mx-48 xl:mx-80 text-md leading-relaxed text-xl font-bold text-green-600 pt-10 pb-5 underline'>Coding and OS:</h2>

      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://generatedata.com/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Generate Test Data</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.cryptohack.org/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Learn Cryptography</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={LinuxCheat} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Linux Cheatsheet</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={Linux} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Linux Reference Google Cert</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://docs.python.org/3/library/functions.html" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Python Built-in Functions</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={PyReference} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Python Concepts Google Cert</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.pythoncheatsheet.org/cheatsheet/basics" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Python Cheatsheet</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://peps.python.org/pep-0008/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Python PEP8 Style Guide</a>
      </div>


{/* ****************************************************************************************************************************** */}
      <h2 className='mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-5 text-md leading-relaxed text-xl font-bold text-green-600 pt-10 underline'>Incidents and Response:</h2>

      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.cyber.gc.ca/en/guidance/ransomware-playbook-itsm00099" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Canada Ransomware Playbook</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={IncidentHandbook} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">SANS Incident Handlers Handbook (.pdf)</a>
      </div>


{/* ***************************************************************************************************************************88 */}
      <h2 className='mx-10 md:mx-14 lg:mx-48 xl:mx-80 text-md leading-relaxed text-xl font-bold text-green-600 pt-10 pb-5 underline'>NIST:</h2>

      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.nist.gov/cyberframework/assessment-auditing-resources" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">NIST Assessment and Auditing Resources</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={Implementation} target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">NIST CSF Application Guide (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://pages.nist.gov/800-63-FAQ/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">NIST Digital Identity Guidelines</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.nist.gov/cyberframework/framework" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">NIST Framework</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={Incident} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">NIST Incident Handling Guide (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://nvd.nist.gov/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">NIST NVD - National Vulnerability Database</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={RiskAssessment} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">NIST Performing Risk Assessments - SP 800-30 (.pdf)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">NIST Security and Privacy Controls</a>
      </div>


{/* ****************************************************************************************************************************** */}
      <h2 className='mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-5 text-md leading-relaxed text-xl font-bold text-green-600 pt-10 underline'>Organizational:</h2>
      
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.cisecurity.org/" target="_blank" rel="noreferrer" className=" text-neutral-300 hover:text-green-400 ">Center For Internet Security</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.cisa.gov/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">CISA Cybersecurity and Infrastructure Security Agency</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://cloudsecurityalliance.org/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Cloud Security Alliance</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.ncsc.gov.uk/collection/caf/caf-principles-and-guidance" target="_blank" rel="noreferrer" className=" text-blue-300 hover:text-green-400">National Cyber Security Centre (U.K.)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Service Name and Transport Protocol Port Number Registry</a>
      </div>
       <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.rfc-editor.org/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Technical and organizational documents about the Internet</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.ncsc.gov.uk/collection/cloud/understanding-cloud-services/cloud-security-shared-responsibility-model" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">UK Cloud Security Guide</a>
      </div>


{/* ****************************************************************************************************************************** */}
      <h2 className='mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-5 text-md leading-relaxed text-xl font-bold text-green-600 pt-10 underline'>Threats:</h2>
      
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://github.com/center-for-threat-informed-defense/adversary_emulation_library" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Adversary Emulation Plans Library</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://talosintelligence.com/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Cisco Talos Threat Intelligence</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://thedfirreport.com/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">DFIR Report - Intrusions and Threat Intelligence</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.exploit-db.com/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Exploit Database</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://blog.google/threat-analysis-group/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Google Threat Analysis Group Blog</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://gtfobins.github.io/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">GTFOBins - Bypass local security restrictions in misconfigured systems</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://labs.inquest.net/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">InQuest Labs - File data and threat intelligence</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://github.com/center-for-threat-informed-defense/adversary_emulation_library" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Library of adversary emulation plans</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://attack.mitre.org/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">MITRE ATT&CK knowledge base of adversary tactics and techniques</a><a href="https://attack.mitre.org/matrices/enterprise/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">&nbsp;(2)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://engage.mitre.org/matrix/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">MITRE Engage Matrix</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://attack.mitre.org/tactics/TA0010/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">MITRE Exfiltration techniques</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href={Pasta} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">PASTA Threat Modeling</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.threathunting.net/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Threat Hunting Project</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://unifiedkillchain.com/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Unified Kill Chain - Threat Modeling</a>
      </div>
      

{/* ****************************************************************************************************************************** */}
      <h2 className='mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-5 text-md leading-relaxed text-xl font-bold text-green-600 pt-10 underline'>Vulnerabilities:</h2>

      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Apple Security Releases</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.cisecurity.org/controls/cis-controls-list" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">CIS Critical Security Controls</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">CISA Known Exploited Vulnerabilities Catalog</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.cve.org/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">CVE - Identify, define, and catalog publicly disclosed cybersecurity vulnerabilities</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://cwe.mitre.org/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Most Dangerous software and hardware weaknesses</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">OWASP Top Ten</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.exploit-db.com/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-green-400 ">Security Bulletins - Google Cloud</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-80 pb-3 text-md leading-relaxed">
        <a href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" target="_blank" rel="noreferrer" className="text-blue-300 hover:text-green-400 ">Vulnerabilities Security Update Guide - Microsoft</a>
      </div>
    </div>

  )
}

export default Resources
