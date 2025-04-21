
import { ProfessionData } from "@/types/tool";

export const blueTeamersData: ProfessionData = {
  profession: "blue-teamers",
  title: "Blue Team Tools",
  description: "Tools used by defensive security teams to detect, respond to, and mitigate threats and security incidents.",
  icon: "shield-alert",
  categories: [
    {
      name: "Malware Analysis",
      description: "Tools for analyzing malicious software and understanding its behavior",
      tools: [
        {
          name: "Ghidra",
          description: "Software reverse engineering framework developed by NSA for analyzing compiled code.",
          homepage: "https://ghidra-sre.org/",
          github: "https://github.com/NationalSecurityAgency/ghidra",
          tags: ["open-source", "reverse-engineering", "NSA"]
        },
        {
          name: "IDA Pro",
          description: "Multi-processor disassembler and debugger used for reverse engineering binaries.",
          homepage: "https://hex-rays.com/ida-pro/",
          tags: ["paid", "reverse-engineering", "industry-standard"]
        },
        {
          name: "x64dbg",
          description: "Open-source x64/x32 debugger for Windows with user-friendly interface.",
          homepage: "https://x64dbg.com/",
          github: "https://github.com/x64dbg/x64dbg",
          tags: ["open-source", "debugger", "windows"]
        },
        {
          name: "PEStudio",
          description: "Tool for static investigation of executables to identify visual anomalies and suspicious properties.",
          homepage: "https://www.winitor.com/",
          tags: ["free", "static-analysis", "windows"]
        },
        {
          name: "Cuckoo Sandbox",
          description: "Automated malware analysis system that observes behavior of files in an isolated environment.",
          homepage: "https://cuckoosandbox.org/",
          github: "https://github.com/cuckoosandbox/cuckoo",
          tags: ["open-source", "sandbox", "automation"]
        },
        {
          name: "CAPEv2",
          description: "Malware configuration and payload extraction sandbox based on Cuckoo with additional features.",
          github: "https://github.com/kevoreilly/CAPEv2",
          tags: ["open-source", "sandbox", "configuration-extraction"]
        },
        {
          name: "OllyDbg",
          description: "32-bit assembler level analyzing debugger for Windows executables.",
          homepage: "http://www.ollydbg.de/",
          tags: ["free", "debugger", "windows"]
        },
        {
          name: "radare2",
          description: "Unix-like reverse engineering framework and command-line toolset.",
          homepage: "https://rada.re/n/",
          github: "https://github.com/radareorg/radare2",
          tags: ["open-source", "reverse-engineering", "multi-platform"]
        },
        {
          name: "Binary Ninja",
          description: "Interactive binary analysis platform with a focus on a modern and intuitive UI.",
          homepage: "https://binary.ninja/",
          tags: ["paid", "reverse-engineering", "modern-UI"]
        },
        {
          name: "Hiew",
          description: "Professional hex editor and disassembler with built-in binary file analyzer.",
          homepage: "http://www.hiew.ru/",
          tags: ["paid", "hex-editor", "disassembler"]
        },
        {
          name: "CyberChef",
          description: "Web app for encryption, encoding, compression and data analysis by GCHQ.",
          homepage: "https://gchq.github.io/CyberChef/",
          github: "https://github.com/gchq/CyberChef",
          tags: ["open-source", "data-analysis", "encryption"]
        }
      ]
    },
    {
      name: "SIEM Solutions",
      description: "Security Information and Event Management tools for log collection, analysis, and alerting",
      tools: [
        {
          name: "Splunk",
          description: "Platform for machine data analysis that provides real-time visibility, alerting, and reporting for security threats.",
          homepage: "https://www.splunk.com/",
          tags: ["paid", "SIEM", "log-management", "popular"]
        },
        {
          name: "ELK Stack",
          description: "Open-source stack consisting of Elasticsearch, Logstash, and Kibana for log ingestion, storage, and visualization.",
          homepage: "https://www.elastic.co/elastic-stack/",
          github: "https://github.com/elastic",
          tags: ["open-source", "log-management", "visualization"]
        },
        {
          name: "Graylog",
          description: "Open-source log management platform designed for centralized log collection and analysis.",
          homepage: "https://www.graylog.org/",
          github: "https://github.com/Graylog2/graylog2-server",
          tags: ["open-source", "log-management", "analysis"]
        },
        {
          name: "IBM QRadar",
          description: "Commercial SIEM solution offering log management, analytics, and threat intelligence.",
          homepage: "https://www.ibm.com/products/qradar-siem",
          tags: ["paid", "SIEM", "enterprise"]
        },
        {
          name: "ArcSight",
          description: "Enterprise SIEM solution that provides real-time threat detection and security analytics.",
          homepage: "https://www.microfocus.com/en-us/products/siem-security-information-event-management/overview",
          tags: ["paid", "SIEM", "enterprise"]
        },
        {
          name: "Wazuh",
          description: "Open-source security monitoring solution for threat detection, incident response, and compliance.",
          homepage: "https://wazuh.com/",
          github: "https://github.com/wazuh/wazuh",
          tags: ["open-source", "HIDS", "log-analysis"]
        },
        {
          name: "LogRhythm",
          description: "Security intelligence platform that unifies SIEM, log management, network monitoring, and endpoint monitoring.",
          homepage: "https://logrhythm.com/",
          tags: ["paid", "SIEM", "unified-security"]
        },
        {
          name: "AlienVault OSSIM",
          description: "Open-source security information and event management system.",
          homepage: "https://cybersecurity.att.com/products/ossim",
          tags: ["open-source", "SIEM", "all-in-one"]
        },
        {
          name: "Microsoft Sentinel",
          description: "Cloud-native SIEM and SOAR solution for intelligent security analytics across the enterprise.",
          homepage: "https://azure.microsoft.com/en-us/services/microsoft-sentinel/",
          tags: ["paid", "cloud", "SIEM", "SOAR"]
        },
        {
          name: "Humio",
          description: "Log management platform designed for the scale of cloud architectures with real-time search capabilities.",
          homepage: "https://www.humio.com/",
          tags: ["paid", "log-management", "real-time"]
        }
      ]
    },
    {
      name: "Threat Intelligence",
      description: "Tools for gathering, analyzing, and using threat intelligence data",
      tools: [
        {
          name: "MISP",
          description: "Open-source threat intelligence platform for gathering, sharing, and correlating IOCs and threat intelligence.",
          homepage: "https://www.misp-project.org/",
          github: "https://github.com/MISP/MISP",
          tags: ["open-source", "threat-intel", "IOC-sharing"]
        },
        {
          name: "OpenCTI",
          description: "Open-source platform for managing and sharing cyber threat intelligence knowledge.",
          homepage: "https://www.opencti.io/",
          github: "https://github.com/OpenCTI-Platform/opencti",
          tags: ["open-source", "threat-intel", "STIX"]
        },
        {
          name: "TheHive",
          description: "Scalable, open-source security incident response platform designed to make life easier for SOCs, CSIRTs, and CERTs.",
          homepage: "https://thehive-project.org/",
          github: "https://github.com/TheHive-Project/TheHive",
          tags: ["open-source", "incident-response", "case-management"]
        },
        {
          name: "VirusTotal",
          description: "Online service that analyzes files and URLs for viruses, worms, trojans and other malware.",
          homepage: "https://www.virustotal.com/",
          tags: ["freemium", "malware-analysis", "reputation"]
        },
        {
          name: "Hybrid Analysis",
          description: "Free malware analysis service for the community that detects and analyzes unknown threats.",
          homepage: "https://www.hybrid-analysis.com/",
          tags: ["free", "sandbox", "malware-analysis"]
        },
        {
          name: "Any.run",
          description: "Interactive online malware analysis service with a sandbox for dynamic analysis.",
          homepage: "https://any.run/",
          tags: ["freemium", "interactive", "sandbox"]
        },
        {
          name: "ThreatFox",
          description: "Platform that offers free access to a database of IOCs collected by abuse.ch.",
          homepage: "https://threatfox.abuse.ch/",
          tags: ["free", "IOC", "sharing-platform"]
        },
        {
          name: "MITRE ATT&CK Navigator",
          description: "Web-based tool for annotating and exploring the MITRE ATT&CK knowledge base.",
          homepage: "https://mitre-attack.github.io/attack-navigator/",
          github: "https://github.com/mitre-attack/attack-navigator",
          tags: ["open-source", "visualization", "tactics-techniques"]
        },
        {
          name: "Intezer",
          description: "Platform that detects and classifies cyber threats by identifying the code reuse.",
          homepage: "https://www.intezer.com/",
          tags: ["paid", "malware-analysis", "code-reuse"]
        },
        {
          name: "AlienVault OTX",
          description: "Open Threat Exchange - crowd-sourced threat intelligence sharing platform.",
          homepage: "https://otx.alienvault.com/",
          tags: ["free", "threat-intel", "community"]
        },
        {
          name: "AbuseIPDB",
          description: "Database of reported IP addresses used for abusive activity online.",
          homepage: "https://www.abuseipdb.com/",
          tags: ["freemium", "reputation", "IP-database"]
        },
        {
          name: "URLScan.io",
          description: "Free service to scan and analyze websites for malicious content and behavior.",
          homepage: "https://urlscan.io/",
          tags: ["free", "URL-analysis", "scanning"]
        }
      ]
    },
    {
      name: "Endpoint Protection",
      description: "Tools for protecting endpoints from threats and monitoring suspicious activities",
      tools: [
        {
          name: "Sysmon",
          description: "Windows system service and device driver that monitors and logs system activity to the Windows event log.",
          homepage: "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon",
          tags: ["free", "windows", "monitoring"]
        },
        {
          name: "OSSEC",
          description: "Open-source host-based intrusion detection system that performs log analysis, integrity checking, and more.",
          homepage: "https://www.ossec.net/",
          github: "https://github.com/ossec/ossec-hids",
          tags: ["open-source", "HIDS", "cross-platform"]
        },
        {
          name: "Velociraptor",
          description: "Advanced digital forensics and incident response tool that provides endpoint visibility and monitoring.",
          homepage: "https://docs.velociraptor.app/",
          github: "https://github.com/Velocidex/velociraptor",
          tags: ["open-source", "DFIR", "endpoint-monitoring"]
        },
        {
          name: "Sigma",
          description: "Generic signature format for SIEM systems to standardize detection rules.",
          github: "https://github.com/SigmaHQ/sigma",
          tags: ["open-source", "detection-rules", "standard"]
        },
        {
          name: "YARA",
          description: "Tool aimed at helping malware researchers to identify and classify malware samples.",
          github: "https://github.com/VirusTotal/yara",
          tags: ["open-source", "malware-classification", "detection"]
        },
        {
          name: "Osquery",
          description: "SQL powered operating system instrumentation, monitoring, and analytics framework.",
          homepage: "https://osquery.io/",
          github: "https://github.com/osquery/osquery",
          tags: ["open-source", "monitoring", "SQL-based"]
        },
        {
          name: "CrowdStrike Falcon",
          description: "Cloud-delivered endpoint protection platform combining next-gen antivirus with EDR.",
          homepage: "https://www.crowdstrike.com/",
          tags: ["paid", "EDR", "cloud-based"]
        },
        {
          name: "Suricata",
          description: "Open-source network threat detection engine capable of real-time intrusion detection.",
          homepage: "https://suricata.io/",
          github: "https://github.com/OISF/suricata",
          tags: ["open-source", "IDS", "IPS"]
        },
        {
          name: "Zeek (Bro)",
          description: "Powerful network analysis framework focused on security monitoring.",
          homepage: "https://zeek.org/",
          github: "https://github.com/zeek/zeek",
          tags: ["open-source", "network-monitoring", "security"]
        },
        {
          name: "Security Onion",
          description: "Free and open Linux distribution for threat hunting, security monitoring, and log management.",
          homepage: "https://securityonion.net/",
          github: "https://github.com/Security-Onion-Solutions/securityonion",
          tags: ["open-source", "distribution", "all-in-one"]
        }
      ]
    }
  ]
};
