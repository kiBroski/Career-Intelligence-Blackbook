import React from 'react';
import { CareerPath } from '../types';
import { Star, Clock, Users, DollarSign } from 'lucide-react';

interface Props {
  path: CareerPath;
}

const CareerCard: React.FC<Props> = ({ path }) => {
  return (
    <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:border-indigo-500 transition-colors duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
          {path.title}
        </h3>
        <span className="px-3 py-1 bg-indigo-900/30 text-indigo-300 text-xs rounded-full border border-indigo-500/30">
          Rank: {path.difficulty === "Low" ? "Easy Start" : path.difficulty}
        </span>
      </div>
      
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        {path.description}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-950 p-3 rounded-lg">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
            <Clock size={12} /> Ramp Up
          </div>
          <div className="text-white font-mono">{path.rampUp}/10 Months</div>
        </div>
        <div className="bg-gray-950 p-3 rounded-lg">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
            <Users size={12} /> Competition
          </div>
          <div className="text-white font-mono">{path.competition}</div>
        </div>
        <div className="bg-gray-950 p-3 rounded-lg">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
            <Star size={12} /> AI Amp
          </div>
          <div className="flex text-yellow-500 text-xs">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill={i < path.aiAmplification ? "currentColor" : "none"} />
            ))}
          </div>
        </div>
        <div className="bg-gray-950 p-3 rounded-lg">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
            <DollarSign size={12} /> Budget
          </div>
          <div className="text-green-400 font-mono">{path.clientBudget}</div>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-800">
        <p className="text-xs text-gray-500 font-bold uppercase mb-1">Why Mispriced?</p>
        <p className="text-sm text-gray-300 italic">
          "{path.whyMispriced}"
        </p>
      </div>
    </div>
  );
};

export default CareerCard;
