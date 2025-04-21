
import React, { useState, useEffect } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import CVESearchForm from '@/components/cve/CVESearchForm';
import CVEFilterPanel from '@/components/cve/CVEFilterPanel';
import CVECard from '@/components/cve/CVECard';
import CVEDetailModal from '@/components/cve/CVEDetailModal';
import { searchCVEs } from '@/services/cveService';
import { CVE } from '@/types/cve';
import { useToast } from '@/hooks/use-toast';

const CVEExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cveData, setCveData] = useState<CVE[]>([]);
  const [selectedCve, setSelectedCve] = useState<CVE | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    severity: [] as string[],
    year: '',
    cweId: '',
    cvssScore: [0, 10] as [number, number],
  });
  const { toast } = useToast();

  const fetchCVEs = async () => {
    setIsLoading(true);
    try {
      const results = await searchCVEs(searchTerm, filters);
      setCveData(results);
      
      if (results.length === 0) {
        toast({
          title: "No results found",
          description: "Try adjusting your search query or filters",
          variant: "destructive",
        });
      } else {
        toast({
          title: `Found ${results.length} results`,
          variant: "default",
        });
      }
    } catch (error) {
      console.error('Error fetching CVE data:', error);
      toast({
        title: "Error",
        description: "Failed to fetch CVE data. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initial data load
    fetchCVEs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
    fetchCVEs();
  };

  const handleFilterChange = (filterName: string, value: any) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const handleViewCveDetails = (cve: CVE) => {
    setSelectedCve(cve);
    setModalOpen(true);
  };

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-white">CVE & Threat Explorer</h1>
          <p className="text-gray-400">Search and explore Common Vulnerabilities and Exposures (CVEs) from the National Vulnerability Database</p>
        </div>

        <div className="mb-6">
          <CVESearchForm
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={handleSearch}
            onToggleFilters={() => setShowFilters(!showFilters)}
          />
        </div>

        {showFilters && (
          <CVEFilterPanel
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        )}

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyber-accent"></div>
          </div>
        ) : (
          <>
            {cveData.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cveData.map((cve) => (
                  <CVECard
                    key={cve.id}
                    cve={cve}
                    onViewDetails={handleViewCveDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl font-medium text-gray-300 mb-2">No CVEs found</h3>
                <p className="text-gray-400">Try adjusting your search terms or filters</p>
              </div>
            )}
          </>
        )}

        <CVEDetailModal
          cve={selectedCve}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </AppLayout>
  );
};

export default CVEExplorer;
