
import { GoogleGenAI, Type } from "@google/genai";
import { StockInputs, AnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const analyzeStock = async (inputs: StockInputs): Promise<AnalysisResult> => {
  const prompt = `
    Act as a professional senior financial analyst. Analyze the following stock data and provide a structured investment recommendation.
    
    STOCK DATA:
    - Symbol/Name: ${inputs.symbol} (${inputs.name})
    - Current Price: ${inputs.currentPrice}
    - P/E Ratio: ${inputs.peRatio}
    - Market Cap: ${inputs.marketCap}
    - 52-Week High: ${inputs.high52w}
    - 52-Week Low: ${inputs.low52w}
    - Revenue Growth: ${inputs.revenueGrowth || 'N/A'}
    - Debt-to-Equity: ${inputs.debtToEquity || 'N/A'}
    - News Sentiment: ${inputs.sentiment || 'Neutral'}

    Your analysis should focus on fundamental valuation, growth potential, and risk assessment. 
    Be objective and analytical. Do not provide direct financial advice; frame this as educational analysis.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          companyOverview: {
            type: Type.STRING,
            description: "A 2-3 line summary of the company."
          },
          keyStrengths: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "List of core company strengths."
          },
          keyWeaknesses: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "List of core company weaknesses."
          },
          potentialRisks: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Major risks associated with the stock."
          },
          buyRecommendationPercentage: {
            type: Type.NUMBER,
            description: "A score from 0 to 100."
          },
          finalVerdict: {
            type: Type.STRING,
            description: "Must be one of: Buy, Hold, or Avoid."
          },
          justification: {
            type: Type.STRING,
            description: "A short paragraph justifying the verdict."
          }
        },
        required: ["companyOverview", "keyStrengths", "keyWeaknesses", "potentialRisks", "buyRecommendationPercentage", "finalVerdict", "justification"]
      }
    }
  });

  return JSON.parse(response.text) as AnalysisResult;
};
