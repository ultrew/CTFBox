
import { ProfessionData } from "@/types/tool";

export const networkSecurityData: ProfessionData = {
  profession: "network-security",
  title: "Network Security Tools",
  description: "Tools for securing, analyzing, and monitoring network infrastructure and traffic.",
  icon: "database-zap",
  categories: [
    {
      name: "Network Analysis",
      description: "Tools for analyzing and visualizing network traffic",
      tools: [
        {
          name: "Wireshark",
          description: "Network protocol analyzer that lets you capture and interactively browse the traffic running on a computer network.",
          homepage: "https://www.wireshark.org/",
          github: "https://github.com/wireshark/wireshark",
          tags: ["open-source", "packet-analysis", "essential"]
        },
        {
          name: "tcpdump",
          description: "Command-line packet analyzer that allows you to intercept and display TCP/IP and other packets.",
          homepage: "https://www.tcpdump.org/",
          github: "https://github.com/the-tcpdump-group/tcpdump",
          tags: ["open-source", "packet-capture", "cli"]
        },
        {
          name: "Zeek",
          description: "Powerful network analysis framework focused on security monitoring.",
          homepage: "https://zeek.org/",
          github: "https://github.com/zeek/zeek",
          tags: ["open-source", "network-monitoring", "security"]
        },
        {
          name: "Netflow Analyzer",
          description: "Network traffic analytics tool that monitors bandwidth usage and provides detailed visibility.",
          homepage: "https://www.manageengine.com/products/netflow/",
          tags: ["paid", "traffic-analysis", "bandwidth-monitoring"]
        },
        {
          name: "NetworkMiner",
          description: "Network forensic analysis tool for Windows that can detect OS, sessions, hostnames, and open ports from PCAP files.",
          homepage: "https://www.netresec.com/?page=NetworkMiner",
          tags: ["freemium", "network-forensics", "windows"]
        }
      ]
    },
    {
      name: "Intrusion Detection/Prevention",
      description: "Tools for detecting and preventing network intrusions",
      tools: [
        {
          name: "Snort",
          description: "Network intrusion prevention and detection system with real-time traffic analysis and packet logging capabilities.",
          homepage: "https://www.snort.org/",
          github: "https://github.com/snort3/snort3",
          tags: ["open-source", "IDS", "IPS"]
        },
        {
          name: "Suricata",
          description: "High performance Network IDS, IPS and Network Security Monitoring engine.",
          homepage: "https://suricata.io/",
          github: "https://github.com/OISF/suricata",
          tags: ["open-source", "IDS", "IPS"]
        },
        {
          name: "Security Onion",
          description: "Free and open Linux distribution for threat hunting, security monitoring, and log management.",
          homepage: "https://securityonion.net/",
          github: "https://github.com/Security-Onion-Solutions/securityonion",
          tags: ["open-source", "monitoring", "distribution"]
        },
        {
          name: "Wazuh",
          description: "Free, open source and enterprise-ready security monitoring solution for threat detection and incident response.",
          homepage: "https://wazuh.com/",
          github: "https://github.com/wazuh/wazuh",
          tags: ["open-source", "HIDS", "monitoring"]
        },
        {
          name: "OSSEC",
          description: "Open source host-based intrusion detection system that performs log analysis, integrity checking, and rootkit detection.",
          homepage: "https://www.ossec.net/",
          github: "https://github.com/ossec/ossec-hids",
          tags: ["open-source", "HIDS", "integrity-checking"]
        }
      ]
    },
    {
      name: "Vulnerability Scanning",
      description: "Tools for identifying vulnerabilities in network devices and services",
      tools: [
        {
          name: "Nessus",
          description: "Vulnerability scanner that identifies vulnerabilities, configuration issues, and malware in various systems.",
          homepage: "https://www.tenable.com/products/nessus",
          tags: ["paid", "vulnerability-scanner", "popular"]
        },
        {
          name: "OpenVAS",
          description: "Open source vulnerability scanner and vulnerability management solution.",
          homepage: "https://www.openvas.org/",
          github: "https://github.com/greenbone/openvas-scanner",
          tags: ["open-source", "vulnerability-scanner", "free"]
        },
        {
          name: "Nmap",
          description: "Network discovery and security auditing tool that uses raw IP packets to determine hosts and services.",
          homepage: "https://nmap.org/",
          github: "https://github.com/nmap/nmap",
          tags: ["open-source", "network-scanner", "essential"]
        },
        {
          name: "Nikto",
          description: "Web server scanner which performs comprehensive tests against web servers for multiple items.",
          github: "https://github.com/sullo/nikto",
          tags: ["open-source", "web-vulnerability", "scanner"]
        },
        {
          name: "Nexpose",
          description: "Vulnerability scanner from Rapid7 for discovering, assessing, and prioritizing vulnerabilities.",
          homepage: "https://www.rapid7.com/products/nexpose/",
          tags: ["paid", "vulnerability-management", "compliance"]
        }
      ]
    },
    {
      name: "Firewalls & Network Defense",
      description: "Tools for controlling and securing network traffic",
      tools: [
        {
          name: "pfSense",
          description: "Open source firewall and router that also features unified threat management, load balancing, and VPN capabilities.",
          homepage: "https://www.pfsense.org/",
          github: "https://github.com/pfsense/pfsense",
          tags: ["open-source", "firewall", "router"]
        },
        {
          name: "OPNsense",
          description: "Open source, easy-to-use and easy-to-build firewall and routing platform.",
          homepage: "https://opnsense.org/",
          github: "https://github.com/opnsense/core",
          tags: ["open-source", "firewall", "router"]
        },
        {
          name: "IPFire",
          description: "Open source firewall distribution focusing on security and ease of use.",
          homepage: "https://www.ipfire.org/",
          github: "https://github.com/ipfire/ipfire-2.x",
          tags: ["open-source", "firewall", "linux"]
        },
        {
          name: "Fail2Ban",
          description: "Intrusion prevention software that protects servers against brute-force attacks.",
          homepage: "https://www.fail2ban.org/",
          github: "https://github.com/fail2ban/fail2ban",
          tags: ["open-source", "intrusion-prevention", "brute-force"]
        },
        {
          name: "CrowdSec",
          description: "Behavior detection engine and collaborative IP reputation system.",
          homepage: "https://crowdsec.net/",
          github: "https://github.com/crowdsecurity/crowdsec",
          tags: ["open-source", "threat-intelligence", "modern"]
        }
      ]
    }
  ]
};
