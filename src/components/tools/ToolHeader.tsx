
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ToolHeaderProps {
  title: string;
  description: string;
  icon?: string;
}

const ToolHeader: React.FC<ToolHeaderProps> = ({ title, description, icon }) => {
  const isToolsPage = title === "Cybersecurity Tools";

  return (
    <div className="mb-8">
      <div className="flex items-center text-sm text-gray-400 mb-2">
        <Link to="/" className="hover:text-white">Home</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        {isToolsPage ? (
          <span className="text-gray-300">Tools</span>
        ) : (
          <>
            <Link to="/tools" className="hover:text-white">Tools</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-gray-300">{title}</span>
          </>
        )}
      </div>
      
      <h1 className="text-3xl font-bold mb-2 text-white">{title}</h1>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ToolHeader;
