
import { ProfessionData } from "@/types/tool";

export const bugBountyHuntersData: ProfessionData = {
  profession: "bug-bounty-hunters",
  title: "Bug Bounty Hunter Tools",
  description: "Tools used by bug bounty hunters to discover and report security vulnerabilities in web applications and systems.",
  icon: "bug",
  categories: [
    {
      name: "Reconnaissance",
      description: "Tools for gathering information about target systems",
      tools: [
        {
          name: "Amass",
          description: "In-depth DNS enumeration and network mapping tool for discovering attack surfaces.",
          github: "https://github.com/OWASP/Amass",
          tags: ["open-source", "reconnaissance", "dns"]
        },
        {
          name: "Subfinder",
          description: "Subdomain discovery tool that discovers valid subdomains for websites using passive online sources.",
          github: "https://github.com/projectdiscovery/subfinder",
          tags: ["open-source", "reconnaissance", "subdomain"]
        },
        {
          name: "Nuclei",
          description: "Fast and customizable vulnerability scanner based on simple YAML-based DSL.",
          github: "https://github.com/projectdiscovery/nuclei",
          tags: ["open-source", "vulnerability-scanner", "yaml"]
        },
        {
          name: "Httpx",
          description: "Fast and multi-purpose HTTP toolkit that allows running multiple probes.",
          github: "https://github.com/projectdiscovery/httpx",
          tags: ["open-source", "http", "probe"]
        },
        {
          name: "Shodan",
          description: "Search engine for Internet-connected devices.",
          homepage: "https://www.shodan.io/",
          tags: ["freemium", "search-engine", "reconnaissance"]
        },
        {
          name: "Censys",
          description: "Search engine that enables researchers to discover, monitor, and analyze devices accessible from the Internet.",
          homepage: "https://censys.io/",
          tags: ["freemium", "search-engine", "reconnaissance"]
        }
      ]
    },
    {
      name: "Web Application Testing",
      description: "Tools for finding vulnerabilities in web applications",
      tools: [
        {
          name: "Burp Suite",
          description: "Integrated platform for performing security testing of web applications.",
          homepage: "https://portswigger.net/burp",
          tags: ["freemium", "web", "proxy", "essential"]
        },
        {
          name: "OWASP ZAP",
          description: "Free and open source web app scanner to find vulnerabilities in web applications.",
          homepage: "https://www.zaproxy.org/",
          github: "https://github.com/zaproxy/zaproxy",
          tags: ["open-source", "web", "scanner"]
        },
        {
          name: "Sqlmap",
          description: "Automatic SQL injection and database takeover tool.",
          github: "https://github.com/sqlmapproject/sqlmap",
          tags: ["open-source", "sql-injection", "database"]
        },
        {
          name: "XSStrike",
          description: "Advanced XSS scanner and payload generator.",
          github: "https://github.com/s0md3v/XSStrike",
          tags: ["open-source", "xss", "scanner"]
        },
        {
          name: "Nikto",
          description: "Web server scanner which performs tests against web servers for multiple items.",
          github: "https://github.com/sullo/nikto",
          tags: ["open-source", "web", "scanner"]
        },
        {
          name: "Wfuzz",
          description: "Web application fuzzer for discovering resources not linked and brute force parameters.",
          github: "https://github.com/xmendez/wfuzz",
          tags: ["open-source", "fuzzer", "brute-force"]
        }
      ]
    },
    {
      name: "Reporting & Documentation",
      description: "Tools for documenting and reporting vulnerabilities",
      tools: [
        {
          name: "Markdown",
          description: "Lightweight markup language for creating formatted text using a plain-text editor.",
          homepage: "https://www.markdownguide.org/",
          tags: ["free", "documentation", "essential"]
        },
        {
          name: "Notion",
          description: "All-in-one workspace for notes, wikis, and collaborative documentation.",
          homepage: "https://www.notion.so/",
          tags: ["freemium", "documentation", "collaboration"]
        },
        {
          name: "BugCrowd Templates",
          description: "Templates for formatting vulnerability reports on the BugCrowd platform.",
          homepage: "https://github.com/bugcrowd/templates",
          github: "https://github.com/bugcrowd/templates",
          tags: ["free", "templates", "reporting"]
        },
        {
          name: "HackerOne Templates",
          description: "Community-driven collection of templates for reporting vulnerabilities on HackerOne.",
          github: "https://github.com/honoki/bbrf-templates",
          tags: ["free", "templates", "reporting"]
        },
        {
          name: "Obsidian",
          description: "Powerful knowledge base that works on top of a local folder of markdown files.",
          homepage: "https://obsidian.md/",
          tags: ["free", "documentation", "knowledge-base"]
        }
      ]
    }
  ]
};
