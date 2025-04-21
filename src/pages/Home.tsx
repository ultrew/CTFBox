
import React from 'react';
import { Link } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Bug, 
  FileCode, 
  FolderOpen, 
  Search, 
  DatabaseZap, 
  ShieldAlert, 
  Code, 
  ChevronRight 
} from 'lucide-react';

const Home: React.FC = () => {
  const featureCards = [
    {
      title: "CVE Explorer",
      description: "Search, filter, and analyze Common Vulnerabilities and Exposures (CVEs) from the National Vulnerability Database.",
      icon: <ShieldAlert className="h-8 w-8 text-cyber-accent" />,
      link: "/cve-explorer"
    },
    {
      title: "Tool Library",
      description: "Access a comprehensive collection of 200+ cybersecurity tools organized by profession and category.",
      icon: <FileCode className="h-8 w-8 text-cyber-accent" />,
      link: "/tools"
    }
  ];

  const professionCards = [
    {
      title: "Penetration Testers",
      icon: <Bug className="h-6 w-6 text-cyber-accent" />,
      link: "/pen-testers"
    },
    {
      title: "Red Teamers",
      icon: <Shield className="h-6 w-6 text-cyber-accent" />,
      link: "/red-teamers"
    },
    {
      title: "Blue Teamers",
      icon: <ShieldAlert className="h-6 w-6 text-cyber-accent" />,
      link: "/blue-teamers"
    },
    {
      title: "Bug Bounty Hunters",
      icon: <Bug className="h-6 w-6 text-cyber-accent" />,
      link: "/bug-bounty-hunters"
    },
    {
      title: "DFIR Experts",
      icon: <FolderOpen className="h-6 w-6 text-cyber-accent" />,
      link: "/dfir"
    },
    {
      title: "Crypto & Privacy",
      icon: <FileCode className="h-6 w-6 text-cyber-accent" />,
      link: "/crypto-privacy"
    },
    {
      title: "Network Security",
      icon: <DatabaseZap className="h-6 w-6 text-cyber-accent" />,
      link: "/network-security"
    },
    {
      title: "OSINT Analysts",
      icon: <Search className="h-6 w-6 text-cyber-accent" />,
      link: "/osint"
    },
    {
      title: "Secure Devs",
      icon: <Code className="h-6 w-6 text-cyber-accent" />,
      link: "/secure-devs"
    },
    {
      title: "Threat Intel Analysts",
      icon: <ShieldAlert className="h-6 w-6 text-cyber-accent" />,
      link: "/threat-intel"
    }
  ];

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 py-8">
          <h1 className="text-4xl font-bold mb-4 text-white">CTFBox 2.0</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your comprehensive resource for cybersecurity intelligence and professional tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featureCards.map((card, index) => (
            <Card key={index} className="bg-cyber-card border-gray-800 hover:border-gray-700 transition-all duration-200">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {card.icon}
                  <CardTitle className="text-xl text-white">{card.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{card.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-cyber-accent hover:bg-blue-700 text-white">
                  <Link to={card.link}>
                    Explore {card.title}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-white">Tools by Profession</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {professionCards.map((card, index) => (
              <Link 
                to={card.link} 
                key={index}
                className="bg-cyber-card border border-gray-800 rounded-lg p-4 text-center hover:border-gray-700 hover:bg-gray-800 transition-all duration-200"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  {card.icon}
                  <span className="mt-2 text-sm font-medium text-gray-300">{card.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
