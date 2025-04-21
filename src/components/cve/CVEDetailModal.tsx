
import React from 'react';
import { X, FileText, FileJson, BookmarkPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { CVE } from '@/types/cve';

interface CVEDetailModalProps {
  cve: CVE | null;
  open: boolean;
  onClose: () => void;
}

const getSeverityColor = (score: number): string => {
  if (score >= 9.0) return 'bg-cvss-critical text-white';
  if (score >= 7.0) return 'bg-cvss-high text-white';
  if (score >= 4.0) return 'bg-cvss-medium text-black';
  if (score > 0.0) return 'bg-cvss-low text-white';
  return 'bg-cvss-none text-white';
};

const getSeverityLabel = (score: number): string => {
  if (score >= 9.0) return 'CRITICAL';
  if (score >= 7.0) return 'HIGH';
  if (score >= 4.0) return 'MEDIUM';
  if (score > 0.0) return 'LOW';
  return 'NONE';
};

const CVEDetailModal: React.FC<CVEDetailModalProps> = ({ cve, open, onClose }) => {
  const [showEli5, setShowEli5] = React.useState(false);

  if (!cve) return null;

  const published = new Date(cve.published).toLocaleDateString();
  const lastModified = new Date(cve.lastModified).toLocaleDateString();

  // This would be replaced with real ELI5 content from an API in production
  const eli5Description = `This vulnerability is like leaving your front door unlocked. 
    An attacker can easily get in without needing special tools or knowledge.
    Once inside, they could access your personal information, install malicious software,
    or use your system to attack others.`;

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-cyber-card border-gray-800 text-white max-w-4xl">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-xl text-white">{cve.id}</DialogTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-4 text-gray-400 hover:text-white" 
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">Published: {published}</p>
              {lastModified !== published && (
                <p className="text-sm text-gray-400">Modified: {lastModified}</p>
              )}
            </div>
            <Badge className={`${getSeverityColor(cve.cvssScore || 0)} px-3 py-1`}>
              CVSS: {cve.cvssScore?.toFixed(1)} - {getSeverityLabel(cve.cvssScore || 0)}
            </Badge>
          </div>

          <Separator className="bg-gray-800" />

          <div>
            <h3 className="text-lg font-medium mb-2 text-white">Description</h3>
            {showEli5 ? (
              <div className="bg-gray-800 p-4 rounded-md mb-4 border-l-4 border-cyber-info">
                <h4 className="text-sm font-bold mb-2 text-cyber-info">Simplified Explanation</h4>
                <p className="text-sm text-gray-300">{eli5Description}</p>
              </div>
            ) : (
              <p className="text-sm text-gray-300 mb-4">{cve.description}</p>
            )}
            <Button 
              variant="outline" 
              size="sm"
              className="border-gray-700 text-gray-300 hover:bg-gray-800"
              onClick={() => setShowEli5(!showEli5)}
            >
              {showEli5 ? "Show Technical Description" : "Explain Like I'm 5"}
            </Button>
          </div>

          <Separator className="bg-gray-800" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-md font-medium mb-2 text-white">Vulnerability Details</h3>
              {cve.cweId && (
                <div className="mb-2">
                  <span className="text-sm text-gray-400">CWE ID: </span>
                  <Badge variant="outline" className="border-gray-700 text-gray-300 ml-2">
                    {cve.cweId}
                  </Badge>
                </div>
              )}
              {cve.attackVector && (
                <div className="mb-2">
                  <span className="text-sm text-gray-400">Attack Vector: </span>
                  <span className="text-sm text-gray-300">{cve.attackVector}</span>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-md font-medium mb-2 text-white">Affected Products</h3>
              {cve.affectedProducts && cve.affectedProducts.length > 0 ? (
                <ul className="list-disc list-inside text-sm text-gray-300">
                  {cve.affectedProducts.map((product, index) => (
                    <li key={index}>{product}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-400">No product information available</p>
              )}
            </div>
          </div>

          {cve.tags && cve.tags.length > 0 && (
            <>
              <Separator className="bg-gray-800" />
              <div>
                <h3 className="text-md font-medium mb-2 text-white">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {cve.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-800 text-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}

          {cve.references && cve.references.length > 0 && (
            <>
              <Separator className="bg-gray-800" />
              <div>
                <h3 className="text-md font-medium mb-2 text-white">References</h3>
                <ul className="list-disc list-inside text-sm text-gray-300">
                  {cve.references.map((ref, index) => (
                    <li key={index}>
                      <a
                        href={ref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyber-info hover:underline"
                      >
                        {ref.length > 60 ? ref.substring(0, 60) + '...' : ref}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

        <DialogFooter className="flex justify-between border-t border-gray-800 pt-4">
          <Button variant="default" className="bg-cyber-accent text-white">
            View in NVD Database
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              <BookmarkPlus className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              <FileJson className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="border-gray-700 text-gray-300 hover:bg-gray-800">
              <FileText className="h-4 w-4" />
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CVEDetailModal;
