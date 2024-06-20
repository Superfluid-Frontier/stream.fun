export interface Project {
  id: string;
  name: string;
  symbol: string;
  createdAtTimestamp: string;
  logoURI: string;
  createdBy: string;
  replies: number;
  marketCap: string;
  ticker: string;
  description?: string;
}
