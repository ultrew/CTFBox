
import React from 'react';
import ToolCard from './ToolCard';
import { ToolCategory } from '@/types/tool';

interface ToolCategorySectionProps {
  category: ToolCategory;
}

const ToolCategorySection: React.FC<ToolCategorySectionProps> = ({ category }) => {
  console.log("Rendering category:", category.name, "with tools:", category.tools.length);
  
  if (category.tools.length === 0) {
    return null;
  }
  
  return (
    <div className="mb-10">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-white">{category.name}</h2>
        {category.description && (
          <p className="text-sm text-gray-400 mt-1">{category.description}</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.tools.map((tool, index) => (
          <ToolCard key={`${tool.name}-${index}`} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default ToolCategorySection;
