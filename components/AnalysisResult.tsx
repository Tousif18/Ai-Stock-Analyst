
import React from 'react';
import { AnalysisResult as AnalysisResultType } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface Props {
  data: AnalysisResultType;
  stockName: string;
}

const AnalysisResult: React.FC<Props> = ({ data, stockName }) => {
  const chartData = [
    { value: data.buyRecommendationPercentage },
    { value: 100 - data.buyRecommendationPercentage }
  ];

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case 'Buy': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'Hold': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'Avoid': return 'text-rose-600 bg-rose-50 border-rose-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  const COLORS = ['#4f46e5', '#e2e8f0'];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Recommendation Score Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-10">
            <i className="fa-solid fa-award text-5xl"></i>
          </div>
          <h3 className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-4">AI Buy Score</h3>
          <div className="w-40 h-40 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={75}
                  startAngle={90}
                  endAngle={450}
                  dataKey="value"
                  stroke="none"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold text-slate-900">{data.buyRecommendationPercentage}%</span>
            </div>
          </div>
          <div className={`mt-6 px-4 py-1.5 rounded-full border text-sm font-bold uppercase tracking-wider ${getVerdictColor(data.finalVerdict)}`}>
            {data.finalVerdict}
          </div>
        </div>

        {/* Overview & Justification Card */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <i className="fa-solid fa-magnifying-glass-chart text-indigo-500"></i>
            {stockName} Analysis Overview
          </h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            {data.companyOverview}
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Analyst Verdict Justification</h4>
            <p className="text-slate-600 italic">
              "{data.justification}"
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Strengths */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <h4 className="text-emerald-700 font-bold mb-4 flex items-center gap-2">
            <i className="fa-solid fa-circle-check"></i> Key Strengths
          </h4>
          <ul className="space-y-3">
            {data.keyStrengths.map((item, idx) => (
              <li key={idx} className="flex gap-3 text-slate-600 text-sm leading-snug">
                <span className="text-emerald-500 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Weaknesses */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <h4 className="text-rose-700 font-bold mb-4 flex items-center gap-2">
            <i className="fa-solid fa-circle-xmark"></i> Key Weaknesses
          </h4>
          <ul className="space-y-3">
            {data.keyWeaknesses.map((item, idx) => (
              <li key={idx} className="flex gap-3 text-slate-600 text-sm leading-snug">
                <span className="text-rose-500 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Risks */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <h4 className="text-amber-700 font-bold mb-4 flex items-center gap-2">
            <i className="fa-solid fa-triangle-exclamation"></i> Critical Risks
          </h4>
          <ul className="space-y-3">
            {data.potentialRisks.map((item, idx) => (
              <li key={idx} className="flex gap-3 text-slate-600 text-sm leading-snug">
                <span className="text-amber-500 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResult;
