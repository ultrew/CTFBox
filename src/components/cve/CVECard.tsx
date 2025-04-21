
import React from 'react';
import { FileJson, FileText, BookmarkPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CVE } from '@/types/cve';

interface CVECardProps {
  cve: CVE;
  onViewDetails: (cve: CVE) => void;
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

const CVECard: React.FC<CVECardProps> = ({ cve, onViewDetails }) => {
  const published = new Date(cve.published).toLocaleDateString();
  const cveId = cve.id;
  const description = cve.description.slice(0, 150) + (cve.description.length > 150 ? '...' : '');
  const cvssScore = cve.cvssScore || 0;

  return (
    <Card className="bg-cyber-card border-gray-800 hover:border-gray-700 transition-all duration-200">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="truncate">
            <h3 className="text-lg font-medium text-white truncate">{cveId}</h3>
            <p className="text-xs text-gray-400">{published}</p>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge className={`${getSeverityColor(cvssScore)} whitespace-nowrap ml-2`}>
                  {cvssScore.toFixed(1)} - {getSeverityLabel(cvssScore)}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>CVSS Score: {cvssScore.toFixed(1)}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-300 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {cve.cweId && (
            <Badge variant="outline" className="border-gray-700 text-gray-300 truncate max-w-full">
              {cve.cweId}
            </Badge>
          )}
          {cve.tags && cve.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-800 text-gray-300 truncate max-w-[120px]">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 border-t border-gray-800">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-gray-300 hover:text-white hover:bg-gray-800"
          onClick={() => onViewDetails(cve)}
        >
          View Details
        </Button>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
            <BookmarkPlus className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
            <FileJson className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
            <FileText className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CVECard;
