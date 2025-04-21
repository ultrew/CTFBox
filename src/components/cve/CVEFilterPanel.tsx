
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CVEFilterPanelProps {
  filters: {
    severity: string[];
    year: string;
    cweId: string;
    cvssScore: [number, number];
  };
  onFilterChange: (filter: string, value: any) => void;
}

const years = Array.from({ length: 2025 - 1999 }, (_, i) => (1999 + i).toString()).reverse();

const CVEFilterPanel: React.FC<CVEFilterPanelProps> = ({ filters, onFilterChange }) => {
  const severityOptions = [
    { id: 'CRITICAL', label: 'Critical' },
    { id: 'HIGH', label: 'High' },
    { id: 'MEDIUM', label: 'Medium' },
    { id: 'LOW', label: 'Low' },
  ];

  const handleSeverityChange = (severity: string, checked: boolean) => {
    if (checked) {
      onFilterChange('severity', [...filters.severity, severity]);
    } else {
      onFilterChange('severity', filters.severity.filter(s => s !== severity));
    }
  };

  return (
    <div className="bg-cyber-card p-4 rounded-lg mb-6 border border-gray-800">
      <h3 className="text-lg font-medium mb-4 text-white">Filter Results</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-300">Severity</h4>
          <div className="space-y-2">
            {severityOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`severity-${option.id}`}
                  checked={filters.severity.includes(option.id)}
                  onCheckedChange={(checked) => handleSeverityChange(option.id, checked as boolean)}
                />
                <Label
                  htmlFor={`severity-${option.id}`}
                  className="text-sm text-gray-300"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-300">Year</h4>
          <Select
            value={filters.year}
            onValueChange={(value) => onFilterChange('year', value)}
          >
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="All Years" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700 text-white">
              <SelectItem value="">All Years</SelectItem>
              {years.map(year => (
                <SelectItem key={year} value={year}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-300">CWE ID</h4>
          <Input
            type="text"
            placeholder="e.g., CWE-79"
            value={filters.cweId}
            onChange={(e) => onFilterChange('cweId', e.target.value)}
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-300">CVSS Score Range</h4>
          <div className="px-2">
            <Slider
              defaultValue={[0, 10]}
              min={0}
              max={10}
              step={0.1}
              value={filters.cvssScore}
              onValueChange={(value) => onFilterChange('cvssScore', value as [number, number])}
              className="mt-6"
            />
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>{filters.cvssScore[0].toFixed(1)}</span>
              <span>{filters.cvssScore[1].toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVEFilterPanel;
