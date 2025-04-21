
import { ProfessionData } from "@/types/tool";

export const redTeamersData: ProfessionData = {
  profession: "red-teamers",
  title: "Red Team Tools",
  description: "Tools used by red teams to simulate real-world attacks and test an organization's detection and response capabilities.",
  icon: "shield",
  categories: [
    {
      name: "C2 Frameworks",
      description: "Command and Control frameworks for post-exploitation and lateral movement",
      tools: [
        {
          name: "Cobalt Strike",
          description: "Commercial adversary simulation platform that executes targeted attacks and emulates advanced threat actors.",
          homepage: "https://www.cobaltstrike.com/",
          tags: ["paid", "post-exploitation", "C2", "popular"]
        },
        {
          name: "Mythic",
          description: "A cross-platform, post-exploitation, red teaming framework built with Python3, docker, and a web browser UI.",
          github: "https://github.com/its-a-feature/Mythic",
          tags: ["open-source", "C2", "cross-platform"]
        },
        {
          name: "Sliver",
          description: "Cross-platform implant framework that supports C2 over multiple protocols, with multiple implant sessions.",
          homepage: "https://github.com/BishopFox/sliver",
          github: "https://github.com/BishopFox/sliver",
          tags: ["open-source", "C2", "Go"]
        },
        {
          name: "Brute Ratel",
          description: "A customizable C2 framework for red team operations with evasion techniques.",
          homepage: "https://bruteratel.com/",
          tags: ["paid", "C2", "evasion"]
        },
        {
          name: "Havoc",
          description: "Modern and malleable post-exploitation command and control framework.",
          github: "https://github.com/HavocFramework/Havoc",
          tags: ["open-source", "C2", "post-exploitation"]
        },
        {
          name: "Covenant",
          description: "Open-source .NET C2 framework designed for security professionals to perform all aspects of red team operations.",
          homepage: "https://github.com/cobbr/Covenant",
          github: "https://github.com/cobbr/Covenant",
          tags: ["open-source", "C2", ".NET"]
        },
        {
          name: "Merlin",
          description: "Cross-platform post-exploitation HTTP/2 Command & Control server and agent written in Go.",
          github: "https://github.com/Ne0nd0g/merlin",
          tags: ["open-source", "C2", "HTTP/2"]
        },
        {
          name: "Koadic",
          description: "COM Command & Control framework similar to Powershell Empire, but written in JavaScript/VBScript.",
          github: "https://github.com/zerosum0x0/koadic",
          tags: ["open-source", "C2", "COM"]
        },
        {
          name: "QuasarRAT",
          description: "Remote Administration Tool for Windows with extensive features.",
          github: "https://github.com/quasar/QuasarRAT",
          tags: ["open-source", "RAT", "Windows"]
        },
        {
          name: "Faction C2",
          description: "Modern, flexible C2 framework designed to be extensible and support various transport channels.",
          github: "https://github.com/FactionC2/",
          tags: ["open-source", "C2", "extensible"]
        },
        {
          name: "Manjusaka",
          description: "Modern C2 framework with multi-platform implants written in Rust.",
          github: "https://github.com/YDHCUI/manjusaka",
          tags: ["open-source", "C2", "Rust"]
        }
      ]
    },
    {
      name: "Evasion Tools",
      description: "Tools for evading detection and bypassing security controls",
      tools: [
        {
          name: "Veil",
          description: "Tool for generating metasploit payloads that bypass antivirus solutions.",
          github: "https://github.com/Veil-Framework/Veil",
          tags: ["open-source", "AV-evasion", "payload-generation"]
        },
        {
          name: "Shellter",
          description: "Dynamic shellcode injection tool that can be used to transform benign executables into trojans.",
          homepage: "https://www.shellterproject.com/",
          tags: ["free", "AV-evasion", "shellcode-injection"]
        },
        {
          name: "PEASS-ng",
          description: "Privilege Escalation Awesome Scripts Suite - multi-platform tools for local privilege escalation.",
          github: "https://github.com/carlospolop/PEASS-ng",
          tags: ["open-source", "privilege-escalation", "multi-platform"]
        },
        {
          name: "SharpHound",
          description: "C# BloodHound ingestor for collecting Active Directory data for security analysis.",
          github: "https://github.com/BloodHoundAD/SharpHound",
          tags: ["open-source", "active-directory", "data-collection"]
        },
        {
          name: "ScareCrow",
          description: "Payload creation framework designed around EDR bypass using known EDR weaknesses.",
          github: "https://github.com/optiv/ScareCrow",
          tags: ["open-source", "EDR-bypass", "payload-creation"]
        },
        {
          name: "Invoke-Obfuscation",
          description: "PowerShell obfuscation tool designed to help penetration testers bypass security controls.",
          github: "https://github.com/danielbohannon/Invoke-Obfuscation",
          tags: ["open-source", "PowerShell", "obfuscation"]
        },
        {
          name: "NimPackt",
          description: "Nim-based packer for PE binaries designed to bypass EDRs.",
          github: "https://github.com/chvancooten/NimPackt",
          tags: ["open-source", "packer", "Nim"]
        },
        {
          name: "Donut",
          description: "Generates x86, x64, or AMD64+x86 position-independent shellcode for in-memory execution.",
          github: "https://github.com/TheWover/donut",
          tags: ["open-source", "shellcode", "in-memory"]
        },
        {
          name: "PurpleSharp",
          description: "C# adversary simulation tool that executes adversary techniques against Windows environments.",
          github: "https://github.com/mvelazc0/PurpleSharp",
          tags: ["open-source", "adversary-simulation", "C#"]
        },
        {
          name: "Unicorn",
          description: "Tool for using PowerShell downgrade attack and inject shellcode into memory.",
          github: "https://github.com/trustedsec/unicorn",
          tags: ["open-source", "PowerShell", "shellcode"]
        },
        {
          name: "SharpHide",
          description: "Tool for hiding process memory through various methods in Windows.",
          github: "https://github.com/outflanknl/SharpHide",
          tags: ["open-source", "process-memory", "hiding"]
        }
      ]
    },
    {
      name: "Social Engineering",
      description: "Tools for creating and executing social engineering campaigns",
      tools: [
        {
          name: "GoPhish",
          description: "Open-source phishing toolkit designed for businesses and penetration testers to create and track phishing campaigns.",
          homepage: "https://getgophish.com/",
          github: "https://github.com/gophish/gophish",
          tags: ["open-source", "phishing", "free"]
        },
        {
          name: "Social-Engineer Toolkit (SET)",
          description: "Open-source penetration testing framework for social engineering attacks, including spear phishing attacks and credential harvesting.",
          homepage: "https://www.trustedsec.com/tools/the-social-engineer-toolkit-set/",
          github: "https://github.com/trustedsec/social-engineer-toolkit",
          tags: ["open-source", "social-engineering", "free"]
        },
        {
          name: "Evilginx2",
          description: "Man-in-the-middle attack framework for phishing login credentials and session cookies, bypassing 2FA.",
          homepage: "https://github.com/kgretzky/evilginx2",
          github: "https://github.com/kgretzky/evilginx2",
          tags: ["open-source", "phishing", "2FA-bypass"]
        }
      ]
    }
  ]
};
