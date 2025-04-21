
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Shield,
  Bug,
  FileCode,
  FolderOpen,
  Search,
  DatabaseZap,
  ShieldAlert,
  Code,
} from "lucide-react";

export function AppSidebar() {
  const threatIntelItems = [
    {
      title: "CVE Explorer",
      url: "/cve-explorer",
      icon: ShieldAlert,
    },
  ];

  const professionItems = [
    {
      title: "Penetration Testers",
      url: "/pen-testers",
      icon: Bug,
    },
    {
      title: "Red Teamers",
      url: "/red-teamers",
      icon: Shield,
    },
    {
      title: "Blue Teamers",
      url: "/blue-teamers",
      icon: ShieldAlert,
    },
    {
      title: "Bug Bounty Hunters",
      url: "/bug-bounty-hunters",
      icon: Bug,
    },
    {
      title: "DFIR Experts",
      url: "/dfir",
      icon: FolderOpen,
    },
    {
      title: "Crypto & Privacy",
      url: "/crypto-privacy",
      icon: FileCode,
    },
    {
      title: "Network Security",
      url: "/network-security",
      icon: DatabaseZap,
    },
    {
      title: "OSINT Analysts",
      url: "/osint",
      icon: Search,
    },
    {
      title: "Secure Devs",
      url: "/secure-devs",
      icon: Code,
    },
    {
      title: "Threat Intel Analysts",
      url: "/threat-intel",
      icon: ShieldAlert,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <h2 className="text-xl font-bold text-white">Tool Box</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Threat Intel</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {threatIntelItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Professions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {professionItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <p className="text-xs text-gray-500">CTFBox v2.0</p>
      </SidebarFooter>
    </Sidebar>
  );
}
