
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import ToolHeader from '@/components/tools/ToolHeader';
import ToolCategorySection from '@/components/tools/ToolCategorySection';
import { getProfessionData } from '@/services/toolService';
import { ProfessionData, Tool, ToolCategory } from '@/types/tool';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const ProfessionTools: React.FC = () => {
  const location = useLocation();
  const professionSlug = location.pathname.substring(1); // Remove leading slash
  
  const [professionData, setProfessionData] = useState<ProfessionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState<ToolCategory[]>([]);
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const fetchProfessionData = async () => {
      if (!professionSlug) {
        setIsLoading(false);
        return;
      }
      
      setIsLoading(true);
      console.log("Fetching data for profession:", professionSlug);
      
      try {
        const data = await getProfessionData(professionSlug);
        console.log("Received data:", data);
        
        if (!data) {
          console.error("No data found for profession:", professionSlug);
          toast({
            title: "Not found",
            description: "Could not find tools for this profession",
            variant: "destructive",
          });
          navigate("/");
          return;
        }
        
        setProfessionData(data);
        setFilteredCategories(data.categories);
        console.log("Categories set:", data.categories.length);
      } catch (error) {
        console.error('Error fetching profession data:', error);
        toast({
          title: "Error",
          description: "Failed to load tools. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfessionData();
  }, [professionSlug, navigate, toast]);

  useEffect(() => {
    if (!professionData || !searchQuery.trim()) {
      setFilteredCategories(professionData?.categories || []);
      return;
    }

    const lowerCaseQuery = searchQuery.toLowerCase();
    
    const filtered = professionData.categories.map(category => {
      const filteredTools = category.tools.filter(tool => 
        tool.name.toLowerCase().includes(lowerCaseQuery) || 
        tool.description.toLowerCase().includes(lowerCaseQuery) ||
        tool.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
      );
      
      return {
        ...category,
        tools: filteredTools
      };
    }).filter(category => category.tools.length > 0);
    
    setFilteredCategories(filtered);
  }, [searchQuery, professionData]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value !== activeTab) {
      setSearchQuery('');
    }
  };

  if (isLoading) {
    return (
      <AppLayout>
        <div className="max-w-7xl mx-auto px-4">
          <Skeleton className="h-16 w-full mb-6" />
          <Skeleton className="h-10 w-full mb-4" />
          <Skeleton className="h-10 w-full mb-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <Skeleton key={index} className="h-64 w-full" />
            ))}
          </div>
        </div>
      </AppLayout>
    );
  }

  if (!professionData) {
    return (
      <AppLayout>
        <div className="text-center py-20 px-4">
          <h3 className="text-xl font-medium text-gray-300 mb-2">Profession not found</h3>
          <p className="text-gray-400">We couldn't find the tools for this profession</p>
          <pre className="mt-4 bg-gray-800 p-4 rounded text-left text-xs text-gray-300 overflow-auto">
            {JSON.stringify({ requestedProfession: professionSlug }, null, 2)}
          </pre>
        </div>
      </AppLayout>
    );
  }

  const totalTools = professionData.categories.reduce(
    (count, category) => count + category.tools.length, 
    0
  );

  console.log("Rendering profession data:", professionData.title);
  console.log("Categories available:", professionData.categories.length);
  console.log("Total tools:", totalTools);

  const getFilteredToolsForCategory = (categoryName: string) => {
    const category = filteredCategories.find(c => c.name === categoryName);
    return category ? category.tools : [];
  };

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-4">
        <ToolHeader
          title={professionData.title}
          description={professionData.description}
          icon={professionData.icon}
        />

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

          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="w-full bg-gray-800 border border-gray-700 overflow-x-auto flex-nowrap">
              <TabsTrigger value="all" className="flex-1 whitespace-nowrap">
                All Tools ({totalTools})
              </TabsTrigger>
              {professionData.categories.map((category, index) => (
                <TabsTrigger 
                  key={index} 
                  value={category.name} 
                  className="flex-1 whitespace-nowrap"
                >
                  {category.name} ({category.tools.length})
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="all">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category, index) => (
                  <ToolCategorySection key={`${category.name}-${index}`} category={category} />
                ))
              ) : (
                <div className="text-center py-10">
                  <h3 className="text-xl font-medium text-gray-300 mb-2">No tools found</h3>
                  <p className="text-gray-400">Try adjusting your search terms</p>
                </div>
              )}
            </TabsContent>
            
            {professionData.categories.map((category) => (
              <TabsContent key={category.name} value={category.name}>
                {(() => {
                  const tools = getFilteredToolsForCategory(category.name);
                  
                  if (tools.length === 0) {
                    return (
                      <div className="text-center py-10">
                        <h3 className="text-xl font-medium text-gray-300 mb-2">No tools found</h3>
                        <p className="text-gray-400">Try adjusting your search terms</p>
                      </div>
                    );
                  }
                  
                  const categoryWithFilteredTools = {
                    ...category,
                    tools
                  };
                  
                  return <ToolCategorySection category={categoryWithFilteredTools} />;
                })()}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfessionTools;
