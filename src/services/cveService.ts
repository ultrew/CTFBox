
import { CVE } from "@/types/cve";

// Real NVD API URL
const NVD_API_BASE_URL = "https://services.nvd.nist.gov/rest/json/cves/2.0";

// Fallback mock data in case the API is unavailable or rate-limited
const mockCVEData: CVE[] = [
  {
    id: "CVE-2023-38545",
    description: "The NGINX web server before 1.25.2 has an uninitialized pointer vulnerability in the HTTP/2 module. The affected function is ngx_http_v2_send_settings_handler.",
    published: "2023-10-10T20:15:11.507",
    lastModified: "2023-10-11T15:15:30.337",
    cvssScore: 9.8,
    cweId: "CWE-476",
    attackVector: "NETWORK",
    affectedProducts: ["NGINX 1.25.1 and below"],
    references: [
      "https://security.netapp.com/advisory/ntap-20240308-0009/",
      "https://www.nginx.com/blog/nginx-1-25-2-1-24-0-patch-release/"
    ],
    tags: ["RCE", "Memory Corruption", "Remote"]
  },
  {
    id: "CVE-2023-32315",
    description: "Apache Log4j2 includes a potential vulnerability in the AttackDetection logger configuration feature using a chain of lookups in certain configuration patterns. This vulnerability is only exposed when a custom configuration with a vulnerable pattern is used. This flaw allows attackers to bypass the protections against lookup recursion.",
    published: "2023-06-28T17:15:07.847",
    lastModified: "2023-07-01T02:38:50.947",
    cvssScore: 7.5,
    cweId: "CWE-400",
    attackVector: "NETWORK",
    affectedProducts: ["Apache Log4j 2.0-beta7 through 2.17.0 (excluding 2.3.2 and 2.12.4)"],
    references: [
      "https://lists.apache.org/thread/7o5772lg1twd3kgttoyp3hqzyrvy3nw7",
      "https://logging.apache.org/log4j/2.x/security.html"
    ],
    tags: ["DoS", "Resource Consumption"]
  },
  {
    id: "CVE-2022-22965",
    description: "A Spring MVC or Spring WebFlux application running on JDK 9+ may be vulnerable to remote code execution (RCE) via data binding. The specific exploit requires the application to run on Tomcat as a WAR deployment. If the application is deployed as a Spring Boot executable jar, i.e. the default, it is not vulnerable to the exploit.",
    published: "2022-04-01T21:15:10.287",
    lastModified: "2022-04-08T20:15:10.417",
    cvssScore: 9.8,
    cweId: "CWE-94",
    attackVector: "NETWORK",
    affectedProducts: ["Spring Framework 5.3.0 to 5.3.17, 5.2.0 to 5.2.19"],
    references: [
      "https://tanzu.vmware.com/security/cve-2022-22965",
      "https://spring.io/blog/2022/03/31/spring-framework-rce-early-announcement"
    ],
    tags: ["RCE", "Spring4Shell", "Data Binding"]
  },
  {
    id: "CVE-2021-44228",
    description: "Log4j 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers when message lookup substitution is enabled.",
    published: "2021-12-10T10:15:10.917",
    lastModified: "2021-12-10T18:15:35.877",
    cvssScore: 10.0,
    cweId: "CWE-917",
    attackVector: "NETWORK",
    affectedProducts: ["Apache Log4j 2.0-beta9 through 2.15.0"],
    references: [
      "https://logging.apache.org/log4j/2.x/security.html",
      "https://github.com/apache/logging-log4j2/pull/608"
    ],
    tags: ["RCE", "Log4Shell", "JNDI Injection"]
  },
  {
    id: "CVE-2020-2555",
    description: "Vulnerability in the Oracle Coherence product of Oracle Fusion Middleware. Supported versions that are affected are 3.7.1.0, 12.1.3.0.0, 12.2.1.3.0 and 12.2.1.4.0. Easily exploitable vulnerability allows unauthenticated attacker with network access via T3 to compromise Oracle Coherence. Successful attacks of this vulnerability can result in takeover of Oracle Coherence.",
    published: "2020-01-15T00:15:00.000",
    lastModified: "2020-03-15T00:15:00.000",
    cvssScore: 9.8,
    cweId: "CWE-502",
    attackVector: "NETWORK",
    affectedProducts: ["Oracle Coherence 3.7.1.0, 12.1.3.0.0, 12.2.1.3.0, 12.2.1.4.0"],
    references: [
      "https://www.oracle.com/security-alerts/cpuapr2020.html",
      "https://www.zerodayinitiative.com/advisories/ZDI-20-139/"
    ],
    tags: ["RCE", "Deserialization"]
  },
  {
    id: "CVE-2019-0708",
    description: "A remote code execution vulnerability exists in Remote Desktop Services formerly known as Terminal Services when an unauthenticated attacker connects to the target system using RDP and sends specially crafted requests. This vulnerability is pre-authentication and requires no user interaction. An attacker who successfully exploited this vulnerability could execute arbitrary code on the target system. An attacker could then install programs; view, change, or delete data; or create new accounts with full user rights.",
    published: "2019-05-14T22:29:00.000",
    lastModified: "2020-08-20T14:15:00.000",
    cvssScore: 9.8,
    cweId: "CWE-119",
    attackVector: "NETWORK",
    affectedProducts: ["Windows 7, Windows Server 2008 R2, Windows Server 2008, Windows 2003, Windows XP"],
    references: [
      "https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2019-0708",
      "https://support.microsoft.com/en-us/help/4500705"
    ],
    tags: ["RCE", "BlueKeep", "Pre-auth"]
  },
  {
    id: "CVE-2018-7600",
    description: "Drupal before 7.58, 8.x before 8.3.9, 8.4.x before 8.4.6, and 8.5.x before 8.5.1 allows remote attackers to execute arbitrary code because of an issue affecting multiple subsystems with default or common module configurations.",
    published: "2018-03-28T21:29:00.000",
    lastModified: "2018-04-25T20:29:00.000",
    cvssScore: 9.8,
    cweId: "CWE-94",
    attackVector: "NETWORK",
    affectedProducts: ["Drupal before 7.58, 8.x before 8.3.9, 8.4.x before 8.4.6, and 8.5.x before 8.5.1"],
    references: [
      "https://www.drupal.org/sa-core-2018-002",
      "https://www.drupal.org/project/drupal/issues/2955617"
    ],
    tags: ["RCE", "Drupalgeddon2"]
  },
  {
    id: "CVE-2017-5638",
    description: "The Jakarta Multipart parser in Apache Struts 2 2.3.x before 2.3.32 and 2.5.x before 2.5.10.1 mishandles file upload Content-Type headers, which allows remote attackers to execute arbitrary commands via crafted Content-Type, Content-Disposition, or Content-Length values, as exploited in the wild in March 2017.",
    published: "2017-03-10T00:29:00.000",
    lastModified: "2019-10-09T23:17:00.000",
    cvssScore: 10.0,
    cweId: "CWE-20",
    attackVector: "NETWORK",
    affectedProducts: ["Apache Struts 2.3.x before 2.3.32, Apache Struts 2.5.x before 2.5.10.1"],
    references: [
      "https://cwiki.apache.org/confluence/display/WW/S2-045",
      "https://www.exploit-db.com/exploits/41570/"
    ],
    tags: ["RCE", "Equifax", "Content-Type"]
  }
];

export const searchCVEs = async (
  searchTerm: string,
  filters: {
    severity: string[];
    year: string;
    cweId: string;
    cvssScore: [number, number];
  }
): Promise<CVE[]> => {
  try {
    // Construct API URL with parameters
    let apiUrl = NVD_API_BASE_URL + "?";
    
    // Add search term if provided
    if (searchTerm) {
      apiUrl += `keywordSearch=${encodeURIComponent(searchTerm)}&`;
    }
    
    // Add year filter if provided
    if (filters.year) {
      const startDate = `${filters.year}-01-01T00:00:00.000`;
      const endDate = `${filters.year}-12-31T23:59:59.999`;
      apiUrl += `pubStartDate=${encodeURIComponent(startDate)}&pubEndDate=${encodeURIComponent(endDate)}&`;
    }
    
    // Add CVSS score range if different from default
    if (filters.cvssScore[0] > 0 || filters.cvssScore[1] < 10) {
      apiUrl += `cvssV3Metrics.baseScoreMin=${filters.cvssScore[0]}&cvssV3Metrics.baseScoreMax=${filters.cvssScore[1]}&`;
    }
    
    // Add CWE filter if provided
    if (filters.cweId) {
      apiUrl += `cweId=${encodeURIComponent(filters.cweId.replace('CWE-', ''))}&`;
    }
    
    // Limit results to a reasonable number
    apiUrl += "resultsPerPage=20";
    
    console.log("Fetching CVEs from NVD API:", apiUrl);
    
    // Fetch data from NVD API
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`NVD API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Transform NVD API response to our CVE format
    const transformedData: CVE[] = data.vulnerabilities.map((item: any) => {
      const cve = item.cve;
      const metrics = cve.metrics?.cvssMetricV31?.[0] || cve.metrics?.cvssMetricV30?.[0];
      
      return {
        id: cve.id,
        description: cve.descriptions.find((d: any) => d.lang === "en")?.value || "No description available",
        published: cve.published,
        lastModified: cve.lastModified,
        cvssScore: metrics?.cvssData?.baseScore,
        cweId: cve.weaknesses?.[0]?.description?.[0]?.value,
        attackVector: metrics?.cvssData?.attackVector,
        affectedProducts: cve.configurations?.map((config: any) => 
          config.nodes.map((node: any) => 
            node.cpeMatch.map((cpe: any) => cpe.criteria).join(", ")
          )
        ).flat() || [],
        references: cve.references?.map((ref: any) => ref.url) || [],
        tags: [
          metrics?.cvssData?.attackComplexity,
          metrics?.cvssData?.privilegesRequired,
          metrics?.cvssData?.userInteraction === "REQUIRED" ? "User Interaction" : "No User Interaction"
        ].filter(Boolean)
      };
    });
    
    console.log(`Retrieved ${transformedData.length} CVEs from NVD API`);
    return transformedData;
    
  } catch (error) {
    console.error("Error fetching from NVD API, using mock data instead:", error);
    
    // Fall back to mock data filtering
    let results = [...mockCVEData];
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        cve => 
          cve.id.toLowerCase().includes(term) || 
          cve.description.toLowerCase().includes(term)
      );
    }
    
    // Apply severity filter
    if (filters.severity.length > 0) {
      results = results.filter(cve => {
        const severityLabel = getSeverityLabel(cve.cvssScore || 0);
        return filters.severity.includes(severityLabel);
      });
    }
    
    // Apply year filter
    if (filters.year) {
      results = results.filter(cve => {
        const year = new Date(cve.published).getFullYear().toString();
        return year === filters.year;
      });
    }
    
    // Apply CWE filter
    if (filters.cweId) {
      const cweFilter = filters.cweId.toLowerCase();
      results = results.filter(
        cve => cve.cweId && cve.cweId.toLowerCase().includes(cweFilter)
      );
    }
    
    // Apply CVSS score range filter
    if (filters.cvssScore) {
      const [min, max] = filters.cvssScore;
      results = results.filter(
        cve => (cve.cvssScore || 0) >= min && (cve.cvssScore || 0) <= max
      );
    }
    
    console.log(`Returning ${results.length} mock CVEs`);
    return results;
  }
};

function getSeverityLabel(score: number): string {
  if (score >= 9.0) return 'CRITICAL';
  if (score >= 7.0) return 'HIGH';
  if (score >= 4.0) return 'MEDIUM';
  if (score > 0.0) return 'LOW';
  return 'NONE';
}
