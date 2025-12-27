
export interface StockInputs {
  symbol: string;
  name: string;
  currentPrice: number;
  peRatio: number;
  marketCap: string;
  high52w: number;
  low52w: number;
  revenueGrowth?: string;
  debtToEquity?: string;
  sentiment?: string;
}

export interface AnalysisResult {
  companyOverview: string;
  keyStrengths: string[];
  keyWeaknesses: string[];
  potentialRisks: string[];
  buyRecommendationPercentage: number;
  finalVerdict: 'Buy' | 'Hold' | 'Avoid';
  justification: string;
}

export enum AnalysisStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
