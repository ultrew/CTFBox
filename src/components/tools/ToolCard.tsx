
import React from 'react';
import { Link2, FileCode } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tool } from '@/types/tool';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <Card className="bg-cyber-card border-gray-800 hover:border-gray-700 transition-all duration-200 h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-medium text-white truncate">{tool.name}</h3>
        </div>
        <p className="text-sm text-gray-300 mb-4 line-clamp-3">{tool.description}</p>
        <div className="flex flex-wrap gap-2">
          {tool.professionTitle && (
            <Badge variant="outline" className="bg-gray-900 text-gray-300 truncate max-w-[120px]">
              {tool.professionTitle}
            </Badge>
          )}
          {tool.tags.slice(0, 3).map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-gray-800 text-gray-300 hover:bg-gray-700 truncate max-w-[120px]"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end border-t border-gray-800 pt-4">
        {tool.homepage && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-400 hover:text-white hover:bg-gray-800"
            asChild
          >
            <a href={tool.homepage} target="_blank" rel="noopener noreferrer">
              <Link2 className="h-4 w-4 mr-2" />
              Website
            </a>
          </Button>
        )}
        {tool.github && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-400 hover:text-white hover:bg-gray-800 ml-2"
            asChild
          >
            <a href={tool.github} target="_blank" rel="noopener noreferrer">
              <FileCode className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ToolCard;
