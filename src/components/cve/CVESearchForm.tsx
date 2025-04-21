
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface CVESearchFormProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  onSearch: () => void;
  onToggleFilters: () => void;
}

const CVESearchForm: React.FC<CVESearchFormProps> = ({
  searchTerm,
  setSearchTerm,
  onSearch,
  onToggleFilters,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:flex-row">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="Search by keyword or CVE ID (e.g., CVE-2023-38545 or Apache)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 bg-gray-800 border-gray-700 text-white"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      </div>
      <div className="flex gap-2">
        <Button type="submit" className="bg-cyber-accent text-white">
          Search CVEs
        </Button>
        <Button 
          type="button" 
          variant="outline" 
          onClick={onToggleFilters}
          className="border-gray-700 text-gray-200"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>
    </form>
  );
};

export default CVESearchForm;
