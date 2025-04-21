
import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import ToolCard from '@/components/tools/ToolCard';
import { getAllProfessions, getProfessionData } from '@/services/toolService';
import { Tool, ProfessionData } from '@/types/tool';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

const Tools: React.FC = () => {
  const [allTools, setAllTools] = useState<Tool[]>([]);
  const [filteredTools, setFilteredTools] = useState<Tool[]>([]);
  const [professions, setProfessions] = useState<{slug: string, title: string, icon: string}[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProfession, setSelectedProfession] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchAllTools = async () => {
      setIsLoading(true);
      try {
        // First get all profession slugs
        const professionsData = await getAllProfessions();
        setProfessions(professionsData);
        
        // Then fetch all tools from all professions
        const allToolsPromises = professionsData.map(prof => getProfessionData(prof.slug));
        const professionDataResults = await Promise.all(allToolsPromises);
        
        // Combine all tools from all professions
        const toolsList: Tool[] = [];
        professionDataResults.forEach((profData: ProfessionData | null) => {
          if (profData) {
            profData.categories.forEach(category => {
              // Add profession and category info to each tool for filtering
              const toolsWithMeta = category.tools.map(tool => ({
                ...tool,
                profession: profData.profession,
                professionTitle: profData.title,
                category: category.name
              }));
              toolsList.push(...toolsWithMeta);
            });
          }
        });
        
        setAllTools(toolsList);
        setFilteredTools(toolsList);
      } catch (error) {
        console.error('Error fetching tools:', error);
        toast({
          title: "Error",
          description: "Failed to load tools. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllTools();
  }, [toast]);

  useEffect(() => {
    let results = [...allTools];
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(tool => 
        tool.name.toLowerCase().includes(query) || 
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Filter by profession if selected
    if (selectedProfession) {
      results = results.filter(tool => 
        tool.profession === selectedProfession
      );
    }
    
    setFilteredTools(results);
  }, [searchQuery, selectedProfession, allTools]);

  const handleProfessionFilter = (slug: string) => {
    setSelectedProfession(prev => prev === slug ? null : slug);
  };

  if (isLoading) {
    return (
      <AppLayout>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-white">Cybersecurity Tools</h1>
          <div className="mb-6">
            <Skeleton className="h-10 w-full mb-4" />
            <Skeleton className="h-10 w-full mb-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, index) => (
              <Skeleton key={index} className="h-64 w-full" />
            ))}
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2 text-white">Cybersecurity Tools</h1>
        <p className="text-gray-400 mb-6">Discover over 200+ tools used by cybersecurity professionals</p>
        
        <div className="mb-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input 
              placeholder="Search tools by name, description or tag..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge 
              className={`cursor-pointer ${!selectedProfession ? 'bg-primary' : 'bg-gray-800'}`}
              onClick={() => setSelectedProfession(null)}
            >
              All
            </Badge>
            {professions.map(profession => (
              <Badge 
                key={profession.slug}
                className={`cursor-pointer ${selectedProfession === profession.slug ? 'bg-primary' : 'bg-gray-800'}`}
                onClick={() => handleProfessionFilter(profession.slug)}
              >
                {profession.title}
              </Badge>
            ))}
          </div>
        </div>
        
        {filteredTools.length > 0 ? (
          <>
            <p className="text-gray-400 mb-4">Showing {filteredTools.length} of {allTools.length} tools</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool, index) => (
                <ToolCard key={`${tool.name}-${index}`} tool={tool} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-gray-300 mb-2">No tools found</h3>
            <p className="text-gray-400">Try adjusting your search terms</p>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Tools;
