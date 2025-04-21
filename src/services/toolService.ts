
import { ProfessionData } from "@/types/tool";
import { penTestersData } from "./toolData/penTesters";
import { redTeamersData } from "./toolData/redTeamers";
import { blueTeamersData } from "./toolData/blueTeamers";
import { bugBountyHuntersData } from "./toolData/bugBountyHunters";
import { dfirExpertsData } from "./toolData/dfirExperts";
import { cryptoPrivacyData } from "./toolData/cryptoPrivacy";
import { networkSecurityData } from "./toolData/networkSecurity";
import { osintAnalystsData } from "./toolData/osintAnalysts";
import { secureDevsData } from "./toolData/secureDevs";
import { threatIntelData } from "./toolData/threatIntel";

// Map of all loaded profession data
const professionDataMap: Record<string, ProfessionData> = {
  "pen-testers": penTestersData,
  "red-teamers": redTeamersData,
  "blue-teamers": blueTeamersData,
  "bug-bounty-hunters": bugBountyHuntersData,
  "dfir": dfirExpertsData,
  "crypto-privacy": cryptoPrivacyData,
  "network-security": networkSecurityData,
  "osint": osintAnalystsData,
  "secure-devs": secureDevsData,
  "threat-intel": threatIntelData
};

export const getProfessionData = async (professionSlug: string): Promise<ProfessionData | null> => {
  // For debugging purposes
  console.log("Requested profession:", professionSlug);
  console.log("Available professions:", Object.keys(professionDataMap));
  console.log("Data available:", professionDataMap[professionSlug] ? "Yes" : "No");
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return professionDataMap[professionSlug] || null;
};

// Get a list of all available professions
export const getAllProfessions = async (): Promise<{slug: string, title: string, icon: string}[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  
  return [
    { slug: "pen-testers", title: "Penetration Testers", icon: "bug" },
    { slug: "red-teamers", title: "Red Teamers", icon: "shield" },
    { slug: "blue-teamers", title: "Blue Teamers", icon: "shield-alert" },
    { slug: "bug-bounty-hunters", title: "Bug Bounty Hunters", icon: "bug" },
    { slug: "dfir", title: "DFIR Experts", icon: "folder-open" },
    { slug: "crypto-privacy", title: "Crypto & Privacy", icon: "file-lock" },
    { slug: "network-security", title: "Network Security", icon: "database-zap" },
    { slug: "osint", title: "OSINT Analysts", icon: "search" },
    { slug: "secure-devs", title: "Secure Devs", icon: "code" },
    { slug: "threat-intel", title: "Threat Intel Analysts", icon: "shield-alert" }
  ];
};
