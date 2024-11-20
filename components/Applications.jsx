// import React from 'react'
// import home from '../src/images/home.png'
// import friend from '../src/images/friend.png'
import Suricata from '../src/assets/Suricata_Examples_Goog_Cert.pdf'
import TcpdumpTwo from '../src/assets/Tcpdump_Cmds_for_Junior.pdf'
import TcpdumpThree from '../src/assets/Tcpdump_DNS_HTTP_Log.pdf'
import WireLog from '../src/assets/Wireshark_Log.pdf'
import SplunkQ from '../src/assets/Query_with_Chronicle_Splunk.pdf'

const Applications = () => {
  return ( 
    <div className='bg-zinc-900 h-full'>

      <h1 className="mt-0 mb-14 flex justify-center text-green-500 text-xl md:text-2xl font-bold mx-4 font-mono">Cybersecurity Applications&#39; Docs</h1>
      
{/* ****************************************************************************************************************************** */}

      <h1 className='mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-6 leading-relaxed text-xl text-blue-400'>____ Analysis and Incidents ____</h1>

        <div className="py-1.5">
          <a className="px-4 mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 pt-2 text-base leading-relaxed rounded bg-slate-800 hover:bg-slate-700 text-zinc-300 hover:text-zinc-400 flex" target="_blank" rel="noreferrer" href="https://exiftool.org/"><span className='text-lg'>ExifTool</span>&nbsp;- read, write and edit Meta information</a>
        </div>

        <div className="py-1.5">
          <a className="px-4 mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 pt-2 text-base leading-relaxed rounded bg-gray-800 hover:bg-gray-700 text-zinc-300 hover:text-zinc-400 flex" target="_blank" rel="noreferrer" href="https://code.nsa.gov/"><span className='text-lg'>NSA.gov OST</span>&nbsp;- open source tools </a>
        </div>

        <div className="py-1.5 flex-row flex flex-nowrap">
            <a className="rounded px-4 pb-3 pt-2 
            ml-10 md:ml-14 lg:ml-48 xl:ml-72 
            w-1/2 bg-slate-800 hover:bg-slate-700 text-base leading-relaxed text-zinc-300 hover:text-zinc-400" target="_blank" rel="noreferrer" href="https://www.tcpdump.org/manpages/tcpdump.1.html"><span className='text-lg'>Tcpdump</span>&nbsp;- packet analyzer</a>

            <a href={TcpdumpTwo} target="_blank" rel="noreferrer" className="px-4 pb-3 pt-3 ml-1.5 w-1/5 md:w-1/4 rounded bg-slate-800 hover:bg-slate-700 text-sm leading-relaxed text-zinc-300 hover:text-zinc-400">
              <div className='flex-row flex'>
                <div className='invisible md:visible'>Tcpdump (2)</div>
                <div className='visible md:invisible order-first'>(2)</div>
              </div>
            </a>

            <a href={TcpdumpThree} target="_blank" rel="noreferrer" className="px-4 pb-3 pt-3 ml-1.5 w-1/5 md:w-1/4 mr-10 md:mr-14 lg:mr-48 xl:mr-72 rounded bg-slate-800 hover:bg-slate-700 text-sm leading-relaxed text-zinc-300 hover:text-zinc-400">
              <div className='flex-row flex'>
                <div className='invisible md:visible'>Tcpdump (3)</div>
                <div className='visible md:invisible order-first'>(3)</div>
              </div>
            </a>
        </div>

        <div className="py-1.5 flex-row flex flex-nowrap">
            <a className="rounded px-4 pb-3 pt-2 
            ml-10 md:ml-14 lg:ml-48 xl:ml-72 
            w-2/3 bg-gray-800 hover:bg-gray-700 text-base leading-relaxed text-zinc-300 hover:text-zinc-400" target="_blank" rel="noreferrer" href="https://www.wireshark.org/docs/wsug_html/"><span className='text-lg'>Wireshark</span> - packet sniffer</a>

            <a href={WireLog} target="_blank" rel="noreferrer" className="px-4 pb-3 pt-3 ml-1.5 w-1/3 mr-10 md:mr-14 lg:mr-48 xl:mr-72 rounded bg-gray-800 hover:bg-gray-700 text-sm leading-relaxed text-zinc-300 hover:text-zinc-400">
              <div className='flex-row flex'>
                <div className='invisible md:visible'>Wireshark (2)</div>
                <div className='visible md:invisible order-first'>(2)</div>
              </div>
            </a>
        </div>

        <div className="py-1.5 flex-row flex flex-nowrap mb-12">
            <a className="rounded px-4 pb-3 pt-2 
            ml-10 md:ml-14 lg:ml-48 xl:ml-72 
            w-2/3 bg-slate-800 hover:bg-slate-700 text-base leading-relaxed text-zinc-300 hover:text-zinc-400" target="_blank" rel="noreferrer" href="https://github.com/virustotal/yara"><span className='text-lg'>Yara</span>&nbsp;- identify and classify malware samples</a>

            <a href="https://github.com/InQuest/awesome-yara" target="_blank" rel="noreferrer" className="px-4 pb-3 pt-3 ml-1.5 w-1/3 mr-10 md:mr-14 lg:mr-48 xl:mr-72 rounded bg-slate-800 hover:bg-slate-700 text-sm leading-relaxed text-slate-300 hover:text-slate-400">
              <div className='flex-row flex'>
                <div className='invisible md:visible'>Yara (2)</div>
                <div className='visible md:invisible order-first'>(2)</div>
              </div>
            </a>
        </div>

{/* ****************************************************************************************************************************** */}

      <h1 className='mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-4 leading-relaxed text-xl text-blue-400'>____ Coding ____</h1>
      
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://httpd.apache.org/" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-blue-500 ">Apache Http Server</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://explainshell.com/" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-blue-500 ">Explain Shell</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://idpro.org/body-of-knowledge/" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-blue-500 ">IAM Identity Access Management - Body of Knowledge</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://jupyter.org/try-jupyter/lab/" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-blue-500 ">Jupyter Web-based Notebook Environment</a>
      </div>
      {/* <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href={Linux} target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-blue-500 ">Linux Reference Google Cert</a>
      </div> */}
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://docs.google.com/document/d/1QVfrtp4QywbvQ5ALupN7-gKNrXI9yrYDv6PyCwWVAYg/template/preview" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-blue-500 ">SQL Reference Guide</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://mariadb.com/kb/en/documentation/" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-blue-500 ">MariaDB Docs</a>
      </div>
      
{/* ****************************************************************************************************************************** */}
      <h2 className='mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-5 leading-relaxed text-xl font-bold text-green-500 pt-10 underline'>IDS and SIEM:</h2>

      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://cloud.google.com/chronicle/docs" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-blue-500 ">Google Chronicle SIEM</a><a href="https://cloud.google.com/chronicle/docs/reference/udm-field-list" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-blue-500 ">&nbsp;(2)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://www.snort.org/#documents" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-blue-500 ">Snort - Intrusion Detection System</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://docs.splunk.com/Documentation" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-blue-500 ">Splunk SIEM</a><a href="https://docs.splunk.com/Documentation/Splunk/9.0.1/Search/GetstartedwithSearch" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-blue-500 ">&nbsp;(2)</a><a href="https://docs.splunk.com/Documentation/Splunk/9.0.2/SearchReference/WhatsInThisManual" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-blue-500 ">&nbsp;(3)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href={SplunkQ} target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-blue-500 ">Splunk and Chronicle Query</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://docs.suricata.io/en/latest/index.html" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-blue-500 ">Suricata - Network Analysis and Threat Detection Software</a><a href={Suricata} target="_blank" rel="noreferrer" className="text-blue-200 hover:text-blue-500 ">&nbsp;(2)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://documentation.wazuh.com/current/index.html" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-blue-500 ">Wazuh - SIEM</a>
      </div>

{/* ****************************************************************************************************************************** */}
      <h2 className='mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-5 leading-relaxed text-xl font-bold text-green-500 pt-10 underline'>Pentesting:</h2>

      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://github.com/angryip/ipscan" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-blue-500 ">Angry IP Network Scanner</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://portswigger.net/burp/documentation" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-blue-500 ">Burp Suite</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://github.com/ffuf/ffuf" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-blue-500 ">Ffuf - web fuzzer</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://github.com/laramies/theHarvester" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-blue-500 ">TheHarvester - OSINT Emails, subdomains and names harvester</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://github.com/vanhauser-thc/thc-hydra" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-blue-500 ">Hydra Brute Force</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://github.com/OJ/gobuster" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-blue-500 ">Gobuster - Directory/File, DNS and VHost busting tool</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://nmap.org/book/toc.html" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-blue-500 ">Nmap - Network Mapper</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://swisskyrepo.github.io/PayloadsAllTheThingsWeb/" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-blue-500 ">Payloads All The Things - Payloads and bypasses for Web Application Security</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://docs.pwntools.com/en/stable/" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-blue-500 ">Pwntools - CTF framework and exploit development library</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://github.com/mandiant/flare-vm" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-blue-500 ">Reverse Engineering </a><a href="https://www.begin.re/" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-blue-500 ">(2)</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://scapy.readthedocs.io/en/latest/introduction.html" target="_blank" rel="noreferrer" className="text-blue-200 hover:text-blue-500 ">Scapy - packet manipulation</a>
      </div>
      <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href="https://github.com/aboul3la/Sublist3r" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-blue-500 ">Sublist3r - subdomains enumeration tool</a>
      </div>
    </div>
  )
}

export default Applications