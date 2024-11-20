// import React from 'react'
// import home from '../src/images/home.png'
// import friend from '../src/images/friend.png'
import Suricata from '../src/assets/Suricata_Examples_Goog_Cert.pdf'
import TcpdumpTwo from '../src/assets/Tcpdump_Cmds_for_Junior.pdf'
import TcpdumpThree from '../src/assets/Tcpdump_DNS_HTTP_Log.pdf'
import WireLog from '../src/assets/Wireshark_Log.pdf'
// import SplunkQ from '../src/assets/Query_with_Chronicle_Splunk.pdf'

const Applications = () => {
  return ( 
    <div className='bg-zinc-900 h-full'>

      <h1 className="mt-0 mb-14 flex justify-center text-green-500 text-xl md:text-2xl font-bold mx-4 font-mono">Cybersecurity Applications&#39; Docs</h1>
      
{/* ****************************************************************************************************************************** */}

        <h1 className='mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-4 leading-relaxed text-xl font-semibold text-blue-400'>__ Analysis and Incident Applications:</h1>

        <div className="py-1.5">
          <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 text-base leading-relaxed rounded bg-slate-800 hover:bg-slate-700 text-zinc-300 hover:text-zinc-400 flex" target="_blank" rel="noreferrer" href="https://exiftool.org/"><span className='text-lg font-semibold text-zinc-200'>ExifTool</span>&nbsp;__ read, write and edit meta information</a>
        </div>

        <div className="py-1.5">
          <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 text-base leading-relaxed rounded bg-gray-800 hover:bg-gray-700 text-zinc-300 hover:text-zinc-400 flex" target="_blank" rel="noreferrer" href="https://code.nsa.gov/"><span className='text-lg font-semibold text-zinc-300'>NSA.gov OST</span>&nbsp;__ open source tools </a>
        </div>

        <div className="py-1.5 flex-row flex flex-nowrap">
            <a className="rounded px-4 md:px-6 py-3 
            ml-10 md:ml-14 lg:ml-48 xl:ml-72 
            w-1/2 bg-slate-800 hover:bg-slate-700 text-base leading-relaxed text-zinc-300 hover:text-zinc-400" target="_blank" rel="noreferrer" href="https://www.tcpdump.org/manpages/tcpdump.1.html"><span className='text-lg font-semibold text-zinc-200'>Tcpdump</span>&nbsp;__ packet analyzer</a>

            <a href={TcpdumpTwo} target="_blank" rel="noreferrer" className="px-4 py-3 ml-1.5 w-1/6 md:w-1/5 rounded bg-slate-800 hover:bg-slate-700 text-sm leading-relaxed text-zinc-300 hover:text-zinc-400">
              <div className='flex-row flex pt-1'>
                <div className='invisible md:visible'>Tcpdump (2)</div>
                <div className='visible md:invisible order-first'>(2)</div>
              </div>
            </a>

            <a href={TcpdumpThree} target="_blank" rel="noreferrer" className="px-4 pb-3 pt-3 ml-1.5 w-1/6 md:w-1/5 mr-10 md:mr-14 lg:mr-48 xl:mr-72 rounded bg-slate-800 hover:bg-slate-700 text-sm leading-relaxed text-zinc-300 hover:text-zinc-400">
              <div className='flex-row flex pt-1'>
                <div className='invisible md:visible'>Tcpdump (3)</div>
                <div className='visible md:invisible order-first'>(3)</div>
              </div>
            </a>
        </div>

        <div className="py-1.5 flex-row flex flex-nowrap">
            <a className="rounded px-4 md:px-6 py-3 
            ml-10 md:ml-14 lg:ml-48 xl:ml-72 
            w-2/3 bg-gray-800 hover:bg-gray-700 text-base leading-relaxed text-zinc-300 hover:text-zinc-400" target="_blank" rel="noreferrer" href="https://www.wireshark.org/docs/wsug_html/"><span className='text-lg font-semibold text-zinc-300'>Wireshark</span>&nbsp;__ packet sniffer</a>

            <a href={WireLog} target="_blank" rel="noreferrer" className="px-4 pb-3 pt-3 ml-1.5 w-1/5 md:w-1/4 mr-10 md:mr-14 lg:mr-48 xl:mr-72 rounded bg-gray-800 hover:bg-gray-700 text-sm leading-relaxed text-zinc-300 hover:text-zinc-400">
              <div className='flex-row flex pt-1'>
                <div className='invisible md:visible'>Wireshark (2)</div>
                <div className='visible md:invisible order-first'>(2)</div>
              </div>
            </a>
        </div>

        <div className="py-1.5 flex-row flex flex-nowrap mb-12">
            <a className="rounded px-4 md:px-6 py-3 
            ml-10 md:ml-14 lg:ml-48 xl:ml-72 
            w-2/3 bg-slate-800 hover:bg-slate-700 text-base leading-relaxed text-zinc-300 hover:text-zinc-400" target="_blank" rel="noreferrer" href="https://github.com/virustotal/yara"><span className='text-lg font-semibold text-zinc-200'>Yara</span>&nbsp;__ identify and classify malware samples</a>

            <a href="https://github.com/InQuest/awesome-yara" target="_blank" rel="noreferrer" className="px-4 pb-3 pt-3 ml-1.5 w-1/5 md:w-1/4 mr-10 md:mr-14 lg:mr-48 xl:mr-72 rounded bg-slate-800 hover:bg-slate-700 text-sm leading-relaxed text-slate-300 hover:text-slate-400">
              <div className='flex-row flex pt-1'>
                <div className='invisible md:visible'>Yara (2)</div>
                <div className='visible md:invisible order-first'>(2)</div>
              </div>
            </a>
        </div>

{/* ****************************************************************************************************************************** */}

      <h1 className='mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-4 leading-relaxed text-xl font-semibold text-blue-400'>__ Coding Applications:</h1>
      
      <div className="py-1.5">
          <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 text-base leading-relaxed rounded bg-slate-800 hover:bg-slate-700 text-zinc-300 hover:text-zinc-400 flex" target="_blank" rel="noreferrer" href="https://httpd.apache.org/"><span className='text-lg font-semibold text-red-200 hover:text-red-300'>Apache Http Server</span>&nbsp;__ </a>
        </div>
        <div className="py-1.5">
          <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 text-base leading-relaxed rounded bg-gray-800 hover:bg-gray-700 text-zinc-300 hover:text-zinc-400 flex" target="_blank" rel="noreferrer" href="https://explainshell.com/"><span className='text-lg font-semibold text-orange-100 hover:text-orange-200'>Explain Shell</span>&nbsp;__</a>
        </div>
        <div className="py-1.5">
          <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 text-base leading-relaxed rounded bg-slate-800 hover:bg-slate-700 text-zinc-300 hover:text-zinc-400 flex" target="_blank" rel="noreferrer" href="https://idpro.org/body-of-knowledge/"><span className='text-lg font-semibold text-red-200 hover:text-red-300'>IAM</span>&nbsp;__ identity access management</a>
        </div>
        <div className="py-1.5">
          <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 text-base leading-relaxed rounded bg-gray-800 hover:bg-gray-700 text-zinc-300 hover:text-zinc-400 flex" target="_blank" rel="noreferrer" href="https://jupyter.org/try-jupyter/lab/"><span className='text-lg font-semibold text-orange-100 hover:text-orange-200'>Jupyter</span>&nbsp;__ web-based notebook environment</a>
        </div>
        <div className="py-1.5">
          <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 text-base leading-relaxed rounded bg-slate-800 hover:bg-slate-700 text-zinc-300 hover:text-zinc-400 flex" target="_blank" rel="noreferrer" href="https://mariadb.com/kb/en/documentation/"><span className='text-lg font-semibold text-red-200 hover:text-red-300'>MariaDB</span>&nbsp;__ official MySQL fork</a>
        </div>
        <div className="py-1.5 mb-12">
          <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 text-base leading-relaxed rounded bg-gray-800 hover:bg-gray-700 text-zinc-300 hover:text-zinc-400 flex" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1QVfrtp4QywbvQ5ALupN7-gKNrXI9yrYDv6PyCwWVAYg/template/preview"><span className='text-lg font-semibold text-orange-100 hover:text-orange-200'>SQL</span>&nbsp;__ reference guide</a>
        </div>
        
      {/* <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
        <a href={Linux} target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-blue-500 ">Linux Reference Google Cert</a>
      </div> */}
      
{/* ****************************************************************************************************************************** */}

      <h1 className='mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-4 leading-relaxed text-xl font-semibold text-blue-400'>__ IDS and SIEM Applications:</h1>

        <div className="py-1.5 flex-row flex flex-nowrap">
          <a className="rounded px-4 md:px-6 py-3 
          ml-10 md:ml-14 lg:ml-48 xl:ml-72 
          w-2/3 bg-slate-800 hover:bg-slate-700 text-base leading-relaxed text-zinc-300 hover:text-zinc-400" target="_blank" rel="noreferrer" href="https://cloud.google.com/chronicle/docs">
              <span className='text-lg font-semibold text-red-200 hover:text-red-300'>Chronicle</span>&nbsp;__ Google SIEM
          </a>

          <a href="https://cloud.google.com/chronicle/docs/reference/udm-field-list" target="_blank" rel="noreferrer" className="px-4 pb-3 pt-3 ml-1.5 w-1/5 md:w-1/4 mr-10 md:mr-14 lg:mr-48 xl:mr-72 rounded bg-slate-800 hover:bg-slate-700 text-sm leading-relaxed text-slate-300 hover:text-slate-400">
            <div className='flex-row flex pt-1'>
              <div className='invisible md:visible'>Chronicle (2)</div>
              <div className='visible md:invisible order-first'>(2)</div>
            </div>
          </a>
        </div>

        <div className="py-1.5">
          <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 text-base leading-relaxed rounded bg-gray-800 hover:bg-gray-700 text-zinc-300 hover:text-zinc-400 flex" target="_blank" rel="noreferrer" href="https://www.snort.org/#documents"><span className='text-lg font-semibold text-orange-100 hover:text-orange-200'>Snort</span>&nbsp;__ intrusion detection system</a>
        </div>

        <div className="py-1.5 flex-row flex flex-nowrap">
            <a className="rounded px-4 md:px-6 py-3 
            ml-10 md:ml-14 lg:ml-48 xl:ml-72 
            w-1/2 bg-slate-800 hover:bg-slate-700 text-base leading-relaxed text-zinc-300 hover:text-zinc-400" target="_blank" rel="noreferrer" href="https://docs.splunk.com/Documentation"><span className='text-lg font-semibold text-red-200 hover:text-red-300'>Splunk</span>&nbsp;__ SIEM</a>

            <a href="https://docs.splunk.com/Documentation/Splunk/9.0.1/Search/GetstartedwithSearch" target="_blank" rel="noreferrer" className="px-4 pb-3 pt-3 ml-1.5 w-1/6 md:w-1/5 rounded bg-slate-800 hover:bg-slate-700 text-sm leading-relaxed text-zinc-300 hover:text-zinc-400">
              <div className='flex-row flex pt-1'>
                <div className='invisible md:visible'>Splunk (2)</div>
                <div className='visible md:invisible order-first'>(2)</div>
              </div>
            </a>

            <a href="https://docs.splunk.com/Documentation/Splunk/9.0.2/SearchReference/WhatsInThisManual" target="_blank" rel="noreferrer" className="px-4 pb-3 pt-3 ml-1.5 w-1/6 md:w-1/5 mr-10 md:mr-14 lg:mr-48 xl:mr-72 rounded bg-slate-800 hover:bg-slate-700 text-sm leading-relaxed text-zinc-300 hover:text-zinc-400">
              <div className='flex-row flex pt-1'>
                <div className='invisible md:visible'>Splunk (3)</div>
                <div className='visible md:invisible order-first'>(3)</div>
              </div>
            </a>
        </div>

        {/* <div className="mx-10 md:mx-14 lg:mx-48 xl:mx-72 pb-3 text-base leading-relaxed">
          <a href={SplunkQ} target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-blue-500 ">Splunk and Chronicle Query</a>
        </div> */}

        <div className="py-1.5 flex-row flex flex-nowrap">
          <a className="rounded px-4 md:px-6 py-3 
          ml-10 md:ml-14 lg:ml-48 xl:ml-72 
          w-2/3 bg-gray-800 hover:bg-gray-700 text-base leading-relaxed text-zinc-300 hover:text-zinc-400" target="_blank" rel="noreferrer" href="https://docs.suricata.io/en/latest/index.html">
              <span className='text-lg font-semibold text-orange-100 hover:text-orange-200'>Suricata</span>&nbsp;__ network analysis and threat detection
          </a>

          <a href={Suricata} target="_blank" rel="noreferrer" className="px-4 pb-3 pt-3 ml-1.5 w-1/5 md:w-1/4 mr-10 md:mr-14 lg:mr-48 xl:mr-72 rounded bg-gray-800 hover:bg-gray-700 text-sm leading-relaxed text-slate-300 hover:text-slate-400">
            <div className='flex-row flex pt-1'>
              <div className='invisible md:visible'>Suricata (2)</div>
              <div className='visible md:invisible order-first'>(2)</div>
            </div>
          </a>
        </div>

        <div className="py-1.5">
          <a className="px-4 md:px-6 mx-10 md:mx-14 lg:mx-48 xl:mx-72 py-3 text-base leading-relaxed rounded bg-slate-800 hover:bg-slate-700 text-zinc-300 hover:text-zinc-400 flex" target="_blank" rel="noreferrer" href="https://documentation.wazuh.com/current/index.html"><span className='text-lg font-semibold text-red-200 hover:text-red-300'>Wazuh</span>&nbsp;__ SIEM</a>
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