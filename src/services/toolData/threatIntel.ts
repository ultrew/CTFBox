
import { ProfessionData } from "@/types/tool";

export const threatIntelData: ProfessionData = {
  profession: "threat-intel",
  title: "Threat Intelligence Tools",
  description: "Tools used by threat intelligence analysts to gather, analyze, and respond to cyber threat information.",
  icon: "shield-alert",
  categories: [
    {
      name: "Threat Intelligence Platforms",
      description: "Platforms for collecting, analyzing, and sharing threat intelligence",
      tools: [
        {
          name: "MISP",
          description: "Open source threat intelligence platform for gathering, sharing, storing and correlating Indicators of Compromise, threat intelligence, financial fraud, vulnerability information and more.",
          homepage: "https://www.misp-project.org/",
          github: "https://github.com/MISP/MISP",
          tags: ["open-source", "threat-intel", "sharing"]
        },
        {
          name: "OpenCTI",
          description: "Open source platform allowing organizations to manage their cyber threat intelligence knowledge and observables.",
          homepage: "https://www.opencti.io/",
          github: "https://github.com/OpenCTI-Platform/opencti",
          tags: ["open-source", "threat-intel", "knowledge-management"]
        },
        {
          name: "TheHive",
          description: "Scalable, open source security incident response platform designed for SOCs and CERTs.",
          homepage: "https://thehive-project.org/",
          github: "https://github.com/TheHive-Project/TheHive",
          tags: ["open-source", "case-management", "incident-response"]
        },
        {
          name: "YETI",
          description: "Your Everyday Threat Intelligence platform - collection of tools to store, organize, and analyze threat intelligence.",
          github: "https://github.com/yeti-platform/yeti",
          tags: ["open-source", "threat-intel", "analysis"]
        },
        {
          name: "ThreatConnect",
          description: "Commercial threat intelligence platform that aggregates, analyzes, and acts on threat intelligence data.",
          homepage: "https://threatconnect.com/",
          tags: ["paid", "threat-intel", "orchestration"]
        }
      ]
    },
    {
      name: "IOC & Malware Analysis",
      description: "Tools for analyzing indicators of compromise and malware",
      tools: [
        {
          name: "VirusTotal",
          description: "Service that analyzes suspicious files and URLs to detect types of malware and automatically shares them with the security community.",
          homepage: "https://www.virustotal.com/",
          tags: ["freemium", "malware-analysis", "reputation"]
        },
        {
          name: "Cuckoo Sandbox",
          description: "Automated malware analysis system that observes behavior of suspicious files under an isolated environment.",
          homepage: "https://cuckoosandbox.org/",
          github: "https://github.com/cuckoosandbox/cuckoo",
          tags: ["open-source", "sandbox", "automation"]
        },
        {
          name: "CAPE Sandbox",
          description: "Malware sandbox designed for extracting payloads and config from malware, based on Cuckoo Sandbox.",
          github: "https://github.com/kevoreilly/CAPEv2",
          tags: ["open-source", "sandbox", "config-extraction"]
        },
        {
          name: "Hybrid Analysis",
          description: "Free malware analysis service powered by Falcon Sandbox that detects and analyzes unknown threats.",
          homepage: "https://www.hybrid-analysis.com/",
          tags: ["freemium", "sandbox", "malware-analysis"]
        },
        {
          name: "ANY.RUN",
          description: "Interactive online sandbox service for dynamic and static malware analysis.",
          homepage: "https://any.run/",
          tags: ["freemium", "sandbox", "interactive"]
        }
      ]
    },
    {
      name: "Threat Hunting",
      description: "Tools for proactively searching for threats within an environment",
      tools: [
        {
          name: "Sigma",
          description: "Generic signature format for SIEM systems to describe relevant log events.",
          github: "https://github.com/SigmaHQ/sigma",
          tags: ["open-source", "detection-rules", "SIEM"]
        },
        {
          name: "ELK Stack",
          description: "Collection of Elasticsearch, Logstash, and Kibana for searching, analyzing, and visualizing log data in real time.",
          homepage: "https://www.elastic.co/elastic-stack/",
          tags: ["open-source", "log-analysis", "visualization"]
        },
        {
          name: "Grafana",
          description: "Multi-platform open source analytics and interactive visualization web application, often used with Prometheus.",
          homepage: "https://grafana.com/",
          github: "https://github.com/grafana/grafana",
          tags: ["open-source", "visualization", "monitoring"]
        },
        {
          name: "Velociraptor",
          description: "Advanced endpoint monitoring tool that provides endpoint visibility and digital forensic investigations.",
          homepage: "https://docs.velociraptor.app/",
          github: "https://github.com/Velocidex/velociraptor",
          tags: ["open-source", "endpoint-monitoring", "forensics"]
        },
        {
          name: "GRR Rapid Response",
          description: "Incident response framework focused on remote live forensics.",
          github: "https://github.com/google/grr",
          tags: ["open-source", "incident-response", "remote-forensics"]
        }
      ]
    },
    {
      name: "Threat Intelligence Feeds",
      description: "Sources of threat intelligence data and feeds",
      tools: [
        {
          name: "AlienVault OTX",
          description: "Open Threat Exchange - world's first truly open threat intelligence community for sharing the latest information about attacks, threats, and malicious IoCs.",
          homepage: "https://otx.alienvault.com/",
          tags: ["free", "threat-feed", "community"]
        },
        {
          name: "MITRE ATT&CK",
          description: "Globally-accessible knowledge base of adversary tactics and techniques based on real-world observations.",
          homepage: "https://attack.mitre.org/",
          tags: ["free", "framework", "knowledge-base"]
        },
        {
          name: "PhishTank",
          description: "Community-based phishing website verification service that provides a database of known phishing sites.",
          homepage: "https://phishtank.org/",
          tags: ["free", "phishing", "community"]
        },
        {
          name: "URLhaus",
          description: "Project operated by abuse.ch to collect, track and share malware URLs.",
          homepage: "https://urlhaus.abuse.ch/",
          tags: ["free", "malicious-urls", "sharing"]
        },
        {
          name: "ThreatFox",
          description: "Platform providing access to a database of IOCs collected by abuse.ch for the benefit of the community.",
          homepage: "https://threatfox.abuse.ch/",
          tags: ["free", "ioc-sharing", "community"]
        }
      ]
    }
  ]
};
