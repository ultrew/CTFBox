
import { ProfessionData } from "@/types/tool";

export const secureDevsData: ProfessionData = {
  profession: "secure-devs",
  title: "Secure Development Tools",
  description: "Tools for developers to create secure applications, detect vulnerabilities, and implement security best practices in their code.",
  icon: "code",
  categories: [
    {
      name: "Static Code Analysis",
      description: "Tools for identifying security issues in source code",
      tools: [
        {
          name: "SonarQube",
          description: "Continuous inspection of code quality to perform automatic reviews with static analysis to detect bugs, code smells, and security vulnerabilities.",
          homepage: "https://www.sonarqube.org/",
          github: "https://github.com/SonarSource/sonarqube",
          tags: ["open-source", "code-quality", "multi-language"]
        },
        {
          name: "Checkmarx",
          description: "Static application security testing (SAST) tool for identifying, tracking, and fixing vulnerabilities in source code.",
          homepage: "https://www.checkmarx.com/",
          tags: ["paid", "SAST", "enterprise"]
        },
        {
          name: "Snyk",
          description: "Security platform to find, fix and monitor known vulnerabilities in open source dependencies and containers.",
          homepage: "https://snyk.io/",
          tags: ["freemium", "dependency-scanning", "container-security"]
        },
        {
          name: "Semgrep",
          description: "Static analysis tool for finding bugs, detecting vulnerabilities, and enforcing code standards.",
          homepage: "https://semgrep.dev/",
          github: "https://github.com/returntocorp/semgrep",
          tags: ["open-source", "static-analysis", "pattern-matching"]
        },
        {
          name: "Brakeman",
          description: "Static analysis security vulnerability scanner for Ruby on Rails applications.",
          homepage: "https://brakemanscanner.org/",
          github: "https://github.com/presidentbeef/brakeman",
          tags: ["open-source", "ruby-on-rails", "SAST"]
        }
      ]
    },
    {
      name: "Dynamic Analysis & Vulnerability Scanning",
      description: "Tools for finding vulnerabilities in running applications",
      tools: [
        {
          name: "OWASP ZAP",
          description: "World's most popular free web application security scanner, finding vulnerabilities in web applications while they're being developed and tested.",
          homepage: "https://www.zaproxy.org/",
          github: "https://github.com/zaproxy/zaproxy",
          tags: ["open-source", "web-security", "DAST"]
        },
        {
          name: "Burp Suite",
          description: "Integrated platform for performing security testing of web applications.",
          homepage: "https://portswigger.net/burp",
          tags: ["freemium", "web-security", "proxy"]
        },
        {
          name: "Acunetix",
          description: "Web vulnerability scanner that automatically finds and reports on over 7,000 web application vulnerabilities.",
          homepage: "https://www.acunetix.com/",
          tags: ["paid", "web-security", "DAST"]
        },
        {
          name: "SQLmap",
          description: "Automatic SQL injection and database takeover tool.",
          github: "https://github.com/sqlmapproject/sqlmap",
          tags: ["open-source", "sql-injection", "penetration-testing"]
        },
        {
          name: "Nikto",
          description: "Web server scanner which performs tests against web servers for multiple items.",
          github: "https://github.com/sullo/nikto",
          tags: ["open-source", "web-server", "scanner"]
        }
      ]
    },
    {
      name: "Dependency & Container Security",
      description: "Tools for securing dependencies and container images",
      tools: [
        {
          name: "Dependabot",
          description: "GitHub's automated security updates tool that scans dependencies for vulnerabilities and creates pull requests to fix them.",
          homepage: "https://github.com/features/security",
          tags: ["free", "dependency-scanning", "github"]
        },
        {
          name: "OWASP Dependency-Check",
          description: "Software composition analysis utility that identifies project dependencies and checks if there are any known vulnerabilities.",
          github: "https://github.com/jeremylong/DependencyCheck",
          tags: ["open-source", "dependency-scanning", "OWASP"]
        },
        {
          name: "Trivy",
          description: "Simple and comprehensive vulnerability scanner for containers and other artifacts.",
          github: "https://github.com/aquasecurity/trivy",
          tags: ["open-source", "container-security", "vulnerability-scanner"]
        },
        {
          name: "Clair",
          description: "Open source project for static analysis of vulnerabilities in application containers.",
          github: "https://github.com/quay/clair",
          tags: ["open-source", "container-security", "static-analysis"]
        },
        {
          name: "Docker Bench for Security",
          description: "Script that checks for dozens of common best-practices around deploying Docker containers in production.",
          github: "https://github.com/docker/docker-bench-security",
          tags: ["open-source", "docker", "best-practices"]
        }
      ]
    },
    {
      name: "Security Testing & CI/CD",
      description: "Tools for integrating security into development workflows",
      tools: [
        {
          name: "OWASP DefectDojo",
          description: "Open source vulnerability management tool that streamlines the testing process by offering templating, report generation, metrics, and baseline self-service tools.",
          homepage: "https://www.defectdojo.org/",
          github: "https://github.com/DefectDojo/django-DefectDojo",
          tags: ["open-source", "vulnerability-management", "integration"]
        },
        {
          name: "GitLab Security",
          description: "Built-in security features in GitLab that enable security testing as part of the CI/CD pipeline.",
          homepage: "https://about.gitlab.com/stages-devops-lifecycle/secure/",
          tags: ["freemium", "devsecops", "ci-cd"]
        },
        {
          name: "GitHub Advanced Security",
          description: "Security features in GitHub that help developers secure their code.",
          homepage: "https://github.com/features/security",
          tags: ["paid", "devsecops", "github"]
        },
        {
          name: "Jenkins Security Plugins",
          description: "Collection of security plugins for Jenkins to integrate security testing into CI/CD pipelines.",
          homepage: "https://plugins.jenkins.io/ui/search/?categories=Security",
          tags: ["open-source", "ci-cd", "jenkins"]
        },
        {
          name: "ThreadFix",
          description: "Software vulnerability management platform that helps organizations aggregate and manage their application vulnerabilities.",
          homepage: "https://threadfix.it/",
          tags: ["paid", "vulnerability-management", "integration"]
        }
      ]
    }
  ]
};
