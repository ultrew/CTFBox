
export interface Tool {
  name: string;
  description: string;
  homepage?: string;
  github?: string;
  tags: string[];
  logo?: string;
  profession?: string;
  professionTitle?: string;
  category?: string;
}

export interface ToolCategory {
  name: string;
  description: string;
  tools: Tool[];
}

export interface ProfessionData {
  profession: string;
  title: string;
  description: string;
  icon: string;
  categories: ToolCategory[];
}
