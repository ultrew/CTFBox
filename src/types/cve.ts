
export interface CVE {
  id: string;
  description: string;
  published: string;
  lastModified: string;
  cvssScore?: number;
  cweId?: string;
  attackVector?: string;
  affectedProducts?: string[];
  references?: string[];
  tags?: string[];
}
