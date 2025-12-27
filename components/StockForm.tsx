
import React, { useState } from 'react';
import { StockInputs } from '../types';

interface Props {
  onAnalyze: (inputs: StockInputs) => void;
  isLoading: boolean;
}

const StockForm: React.FC<Props> = ({ onAnalyze, isLoading }) => {
  const [inputs, setInputs] = useState<StockInputs>({
    symbol: '',
    name: '',
    currentPrice: 0,
    peRatio: 0,
    marketCap: '',
    high52w: 0,
    low52w: 0,
    revenueGrowth: '',
    debtToEquity: '',
    sentiment: 'Neutral'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnalyze(inputs);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) : value
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <i className="fa-solid fa-database text-indigo-500"></i>
        Enter Stock Data
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Stock Symbol / Ticker</label>
            <input
              required
              name="symbol"
              placeholder="e.g. AAPL"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Company Name</label>
            <input
              required
              name="name"
              placeholder="e.g. Apple Inc."
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Current Price ($)</label>
            <input
              required
              type="number"
              step="0.01"
              name="currentPrice"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">P/E Ratio</label>
            <input
              required
              type="number"
              step="0.01"
              name="peRatio"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Market Cap</label>
            <input
              required
              name="marketCap"
              placeholder="e.g. $2.8T"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">52w High</label>
              <input
                required
                type="number"
                step="0.01"
                name="high52w"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">52w Low</label>
              <input
                required
                type="number"
                step="0.01"
                name="low52w"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Rev. Growth (Optional)</label>
            <input
              name="revenueGrowth"
              placeholder="e.g. 15%"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Debt/Equity (Optional)</label>
            <input
              name="debtToEquity"
              placeholder="e.g. 0.45"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-slate-700">Market Sentiment</label>
            <select
              name="sentiment"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white"
              onChange={handleChange}
            >
              <option value="Bullish">Bullish</option>
              <option value="Neutral">Neutral</option>
              <option value="Bearish">Bearish</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isLoading ? (
            <i className="fa-solid fa-spinner fa-spin"></i>
          ) : (
            <i className="fa-solid fa-brain"></i>
          )}
          {isLoading ? 'Processing Analysis...' : 'Run AI Recommendation Engine'}
        </button>
      </form>
    </div>
  );
};

export default StockForm;
