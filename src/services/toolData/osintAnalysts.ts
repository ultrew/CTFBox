
import { ProfessionData } from "@/types/tool";

export const osintAnalystsData: ProfessionData = {
  profession: "osint",
  title: "OSINT Analyst Tools",
  description: "Tools used for open source intelligence gathering, research, and investigations using publicly available sources.",
  icon: "search",
  categories: [
    {
      name: "Search & Investigation",
      description: "Tools for advanced searching and investigation across multiple sources",
      tools: [
        {
          name: "Maltego",
          description: "Interactive data mining tool that renders directed graphs for link analysis to identify connections between pieces of information.",
          homepage: "https://www.maltego.com/",
          tags: ["freemium", "data-visualization", "link-analysis"]
        },
        {
          name: "SpiderFoot",
          description: "Reconnaissance tool that automatically queries over 100 public data sources to gather intelligence on targets.",
          homepage: "https://www.spiderfoot.net/",
          github: "https://github.com/smicallef/spiderfoot",
          tags: ["open-source", "reconnaissance", "automation"]
        },
        {
          name: "Shodan",
          description: "Search engine for Internet-connected devices and systems.",
          homepage: "https://www.shodan.io/",
          tags: ["freemium", "search-engine", "reconnaissance"]
        },
        {
          name: "recon-ng",
          description: "Full-featured web reconnaissance framework with various modules for OSINT gathering.",
          github: "https://github.com/lanmaster53/recon-ng",
          tags: ["open-source", "reconnaissance", "framework"]
        },
        {
          name: "OSINT Framework",
          description: "Collection of various OSINT tools categorized by their use case.",
          homepage: "https://osintframework.com/",
          tags: ["free", "reference", "collection"]
        }
      ]
    },
    {
      name: "Domain & Network Reconnaissance",
      description: "Tools for gathering information about domains, IPs, and networks",
      tools: [
        {
          name: "Amass",
          description: "In-depth DNS enumeration and network mapping tool.",
          github: "https://github.com/OWASP/Amass",
          tags: ["open-source", "dns", "enumeration"]
        },
        {
          name: "theHarvester",
          description: "Tool for gathering email addresses, subdomains, hosts, employee names, open ports and banners from different public sources.",
          github: "https://github.com/laramies/theHarvester",
          tags: ["open-source", "information-gathering", "reconnaissance"]
        },
        {
          name: "DNSdumpster",
          description: "Free domain research tool that can discover hosts related to a domain.",
          homepage: "https://dnsdumpster.com/",
          tags: ["free", "dns", "reconnaissance"]
        },
        {
          name: "Censys",
          description: "Search engine for finding specific computers and networks on the internet.",
          homepage: "https://censys.io/",
          tags: ["freemium", "search-engine", "scanning"]
        },
        {
          name: "Sublist3r",
          description: "Fast subdomains enumeration tool for penetration testers.",
          github: "https://github.com/aboul3la/Sublist3r",
          tags: ["open-source", "subdomain", "enumeration"]
        }
      ]
    },
    {
      name: "Social Media Analysis",
      description: "Tools for gathering and analyzing information from social media platforms",
      tools: [
        {
          name: "Social Analyzer",
          description: "API, CLI & Web App for analyzing and finding profiles across 1000+ social media websites.",
          github: "https://github.com/qeeqbox/social-analyzer",
          tags: ["open-source", "social-media", "profile-finder"]
        },
        {
          name: "Twint",
          description: "Advanced Twitter scraping tool written in Python that doesn't use Twitter's API.",
          github: "https://github.com/twintproject/twint",
          tags: ["open-source", "twitter", "scraping"]
        },
        {
          name: "Sherlock",
          description: "Hunt down social media accounts by username across social networks.",
          github: "https://github.com/sherlock-project/sherlock",
          tags: ["open-source", "username", "social-media"]
        },
        {
          name: "Instagram Scraper",
          description: "Scrapes and downloads Instagram user's photos, videos, and metadata.",
          github: "https://github.com/arc298/instagram-scraper",
          tags: ["open-source", "instagram", "scraping"]
        },
        {
          name: "Instaloader",
          description: "Tool to download pictures, videos and metadata from Instagram.",
          github: "https://github.com/instaloader/instaloader",
          tags: ["open-source", "instagram", "download"]
        }
      ]
    },
    {
      name: "Data Analysis & Visualization",
      description: "Tools for analyzing and visualizing OSINT data",
      tools: [
        {
          name: "Gephi",
          description: "Open source network analysis and visualization software for graph and network analysis.",
          homepage: "https://gephi.org/",
          github: "https://github.com/gephi/gephi",
          tags: ["open-source", "visualization", "network-analysis"]
        },
        {
          name: "yEd Graph Editor",
          description: "Application to quickly and effectively generate high-quality diagrams.",
          homepage: "https://www.yworks.com/products/yed",
          tags: ["free", "visualization", "diagram"]
        },
        {
          name: "Google Data Studio",
          description: "Free tool that turns data into informative dashboards and reports.",
          homepage: "https://datastudio.google.com/",
          tags: ["free", "visualization", "dashboard"]
        },
        {
          name: "IBM i2 Analyst's Notebook",
          description: "Visual intelligence analysis software that helps to discover insights in data.",
          homepage: "https://www.ibm.com/products/i2-analysts-notebook",
          tags: ["paid", "intelligence-analysis", "visualization"]
        },
        {
          name: "Palantir Gotham",
          description: "Platform for data integration, visualization, and analytics.",
          homepage: "https://www.palantir.com/platforms/gotham/",
          tags: ["paid", "data-integration", "analysis"]
        }
      ]
    }
  ]
};
