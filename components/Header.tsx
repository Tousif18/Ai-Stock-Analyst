
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 text-white py-6 px-4 mb-8 shadow-xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
            <i className="fa-solid fa-chart-line text-xl"></i>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">AI Stock Analyst</h1>
            <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">Gemini Intelligence Layer</p>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <span className="text-indigo-400 flex items-center gap-2">
            <i className="fa-solid fa-graduation-cap"></i>
            Educational Purpose
          </span>
          <span className="text-slate-400">Ver 1.2</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
