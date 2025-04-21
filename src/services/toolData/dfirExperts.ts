
import { ProfessionData } from "@/types/tool";

export const dfirExpertsData: ProfessionData = {
  profession: "dfir",
  title: "Digital Forensics & Incident Response Tools",
  description: "Tools used by DFIR professionals to investigate security incidents, collect digital evidence, and perform forensic analysis.",
  icon: "folder-open",
  categories: [
    {
      name: "Disk Forensics",
      description: "Tools for analyzing disk images and recovering evidence",
      tools: [
        {
          name: "Autopsy",
          description: "Digital forensics platform and graphical interface to The Sleuth Kit and other digital forensics tools.",
          homepage: "https://www.autopsy.com/",
          github: "https://github.com/sleuthkit/autopsy",
          tags: ["open-source", "forensics", "gui"]
        },
        {
          name: "The Sleuth Kit",
          description: "Collection of command line tools that allow you to investigate volume and file system data.",
          homepage: "https://www.sleuthkit.org/",
          github: "https://github.com/sleuthkit/sleuthkit",
          tags: ["open-source", "forensics", "cli"]
        },
        {
          name: "FTK Imager",
          description: "Data preview and imaging tool for acquiring evidence in a forensically sound manner.",
          homepage: "https://www.exterro.com/forensic-toolkit",
          tags: ["free", "forensics", "imaging"]
        },
        {
          name: "X-Ways Forensics",
          description: "Advanced work environment for computer forensic examiners.",
          homepage: "https://www.x-ways.net/forensics/",
          tags: ["paid", "forensics", "advanced"]
        },
        {
          name: "Arsenal Image Mounter",
          description: "Forensic tool for mounting disk images in Windows.",
          homepage: "https://arsenalrecon.com/downloads/",
          tags: ["freemium", "forensics", "disk-mounting"]
        }
      ]
    },
    {
      name: "Memory Analysis",
      description: "Tools for analyzing memory dumps and capturing volatile data",
      tools: [
        {
          name: "Volatility",
          description: "Advanced memory forensics framework for extracting digital artifacts from volatile memory samples.",
          homepage: "https://www.volatilityfoundation.org/",
          github: "https://github.com/volatilityfoundation/volatility",
          tags: ["open-source", "memory-forensics", "essential"]
        },
        {
          name: "Rekall",
          description: "Memory forensic framework for extracting and analyzing digital artifacts from volatile memory.",
          github: "https://github.com/google/rekall",
          tags: ["open-source", "memory-forensics", "google"]
        },
        {
          name: "DumpIt",
          description: "Memory acquisition tool that generates a physical memory dump of Windows machines.",
          homepage: "https://www.comae.com/",
          tags: ["free", "memory-acquisition", "windows"]
        },
        {
          name: "Redline",
          description: "Free tool for memory and file analysis from FireEye.",
          homepage: "https://fireeye.market/apps/211364",
          tags: ["free", "memory-analysis", "fireeye"]
        },
        {
          name: "LiME",
          description: "Linux Memory Extractor for acquiring volatile memory from Linux systems.",
          github: "https://github.com/504ensicsLabs/LiME",
          tags: ["open-source", "memory-acquisition", "linux"]
        }
      ]
    },
    {
      name: "Network Forensics",
      description: "Tools for analyzing network traffic and identifying malicious activity",
      tools: [
        {
          name: "Wireshark",
          description: "Network protocol analyzer that lets you capture and interactively browse the traffic running on a computer network.",
          homepage: "https://www.wireshark.org/",
          github: "https://github.com/wireshark/wireshark",
          tags: ["open-source", "packet-analyzer", "essential"]
        },
        {
          name: "NetworkMiner",
          description: "Network forensic analysis tool for Windows that can detect OS, sessions, hostnames, and open ports from PCAP files.",
          homepage: "https://www.netresec.com/?page=NetworkMiner",
          tags: ["freemium", "network-forensics", "windows"]
        },
        {
          name: "Zeek (formerly Bro)",
          description: "Powerful network analysis framework focused on security monitoring.",
          homepage: "https://zeek.org/",
          github: "https://github.com/zeek/zeek",
          tags: ["open-source", "network-monitoring", "ids"]
        },
        {
          name: "Tcpdump",
          description: "Command-line packet analyzer that allows you to intercept and display TCP/IP and other packets.",
          homepage: "https://www.tcpdump.org/",
          github: "https://github.com/the-tcpdump-group/tcpdump",
          tags: ["open-source", "packet-analyzer", "cli"]
        },
        {
          name: "Argus",
          description: "Network flow monitor designed to track and report on the status and performance of all network transactions.",
          homepage: "https://openargus.org/",
          github: "https://github.com/openargus/argus",
          tags: ["open-source", "network-monitoring", "flow-analysis"]
        }
      ]
    },
    {
      name: "Incident Response",
      description: "Tools for responding to and managing security incidents",
      tools: [
        {
          name: "SANS SIFT Workstation",
          description: "Forensic toolkit containing tools for digital forensics and incident response.",
          homepage: "https://digital-forensics.sans.org/community/downloads",
          tags: ["free", "forensics", "distribution"]
        },
        {
          name: "TheHive",
          description: "Scalable, open source security incident response platform designed for SOCs and CERTs.",
          homepage: "https://thehive-project.org/",
          github: "https://github.com/TheHive-Project/TheHive",
          tags: ["open-source", "incident-management", "collaboration"]
        },
        {
          name: "Velociraptor",
          description: "Endpoint monitoring and digital forensic response platform.",
          homepage: "https://docs.velociraptor.app/",
          github: "https://github.com/Velocidex/velociraptor",
          tags: ["open-source", "endpoint-monitoring", "incident-response"]
        },
        {
          name: "GRR Rapid Response",
          description: "Incident response framework focused on remote live forensics.",
          github: "https://github.com/google/grr",
          tags: ["open-source", "incident-response", "remote-forensics"]
        },
        {
          name: "OSQuery",
          description: "SQL-powered operating system instrumentation, monitoring, and analytics framework.",
          homepage: "https://osquery.io/",
          github: "https://github.com/osquery/osquery",
          tags: ["open-source", "endpoint-visibility", "sql"]
        }
      ]
    }
  ]
};
