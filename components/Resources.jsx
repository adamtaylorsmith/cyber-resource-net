// import React from 'react'
// import bannerImg from '../src/images/bannerWh30.png'
// import bannersImg from '../src/images/bannerBu30.png'
// import ReactPlayer from 'react-player'
import Implementation from '../src/assets/CISA_NIST_Framework_Implementation_Guidance.pdf'
import IncidentHandbook from '../src/assets/Incident_Handlers_Handbook.pdf'
import RiskAssessment from '../src/assets/NIST_Risk_Assessments.pdf'

const Resources = () => {
  return (
    <div className='bg-gray-100 h-full'>

      <h1 className="mt-0 mb-12 flex justify-center text-green-600 text-xl md:text-2xl font-bold">Online Cyber Resources</h1>

      {/* <h2 className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">This collection was built while developing a home lab and</h2> */}

      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href={IncidentHandbook} target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Incident Handlers Handbook (.pdf)</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Service Name and Transport Protocol Port Number Registry</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.exploit-db.com/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Exploit Database - Exploits for Pen Testers</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Apple Security Releases</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.exploit-db.com/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Security Bulletins - Google Cloud</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Vulnerabilities Security Update Guide - Microsoft</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://nvd.nist.gov/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">NIST NVD - National Vulnerability Database</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.nist.gov/cyberframework/framework" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">NIST Framework</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://csrc.nist.gov/glossary" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">NIST Glossary</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.nist.gov/cyberframework/assessment-auditing-resources" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">NIST Assessment and Auditing Resources</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">NIST Security and Privacy Controls</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href={Implementation} target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">NIST Framework Implementation Guide (.pdf)</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href={RiskAssessment} target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">NIST Performing Risk Assessments - SP 800-30 (.pdf)</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.cisecurity.org/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Center For Internet Security</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.ncsc.gov.uk/collection/caf/caf-principles-and-guidance" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">National Cyber Security Centre (U.K.)</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.isecom.org/OSSTMM.3.pdf" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Open Source Security Testing Methodology Manual</a>
      </div>

      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">CISA Known Exploited Vulnerabilities Catalog</a>
      </div>
      
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.cyber.gc.ca/en/guidance/ransomware-playbook-itsm00099" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Canada - Ransomware Playbook</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.ready.gov/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Ready.gov</a>
      </div>
      
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://github.com/Integration-IT/Active-Directory-Exploitation-Cheat-Sheet" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline"> Active Directory Exploitation Cheat Sheet</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://github.com/Cloud-Architekt/AzureAD-Attack-Defense" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Azure Active Directory Attack and Defend</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://cyware.com/cyber-security-news-articles" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Cyware Latest Cybersecurity News and Articles</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://talosintelligence.com/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Cisco Talos Threat Intelligence</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.rfc-editor.org/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Technical and organizational documents about the Internet</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.cve.org/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">CVE - Identify, define, and catalog publicly disclosed cybersecurity vulnerabilities</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.cisecurity.org/controls/cis-controls-list" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">CIS Critical Security Controls</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">OWASP Top Ten</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.cryptohack.org/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Learn Cryptography</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.cisco.com/c/en/us/solutions/enterprise/design-zone-security/landing_safe.html" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Cisco SAFE - Secure Architecture for Everyone </a>
      </div>
      
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://github.com/center-for-threat-informed-defense/adversary_emulation_library" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Adversary Emulation Plans Library</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://thedfirreport.com/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">The DFIR Report - Intrusions and Threat Intelligence</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://unifiedkillchain.com/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Unified Kill Chain - Threat Modeling</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://attack.mitre.org/matrices/enterprise/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">MITRE Enterprise Matrix</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://engage.mitre.org/matrix/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">MITRE Engage Matrix</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://attack.mitre.org/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">MITRE ATT&CK knowledge base of adversary tactics and techniques</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://cwe.mitre.org/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Top Most Dangerous software and hardware weaknesses</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://phishingquiz.withgoogle.com/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Phishing Quiz from Google</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.malware-traffic-analysis.net/index.html" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Packet Capture files and Malware Samples</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://docs.google.com/document/d/1QVfrtp4QywbvQ5ALupN7-gKNrXI9yrYDv6PyCwWVAYg/template/preview" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">SQL Reference Guide</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://cloudsecurityalliance.org/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">Cloud Security Alliance</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 mb-2 text-md leading-relaxed">
        <a href="https://www.ncsc.gov.uk/collection/cloud/understanding-cloud-services/cloud-security-shared-responsibility-model" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">UK Cloud Security Guide</a>
      </div>
      <div className="xl:mx-80 lg:mx-60 md:mx-16 mx-10 pb-2 text-md leading-relaxed">
        <a href="https://idpro.org/body-of-knowledge/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-300 underline">IAM Identity Access Management - Body of Knowledge</a>
      </div>
    </div>
  )
}

export default Resources
