import React, { useState } from 'react';
import { DECISION_TREE } from '../constants';
import { DecisionStepType } from '../types';
import { ArrowRight, RefreshCw, CheckCircle } from 'lucide-react';

const DecisionTree: React.FC = () => {
  const [currentNodeId, setCurrentNodeId] = useState<string>('start');
  const [history, setHistory] = useState<string[]>([]);

  const currentNode = DECISION_TREE[currentNodeId];

  const handleOptionClick = (nextId: string) => {
    setHistory([...history, currentNodeId]);
    setCurrentNodeId(nextId);
  };

  const reset = () => {
    setHistory([]);
    setCurrentNodeId('start');
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-gray-900 rounded-xl border border-gray-700 overflow-hidden shadow-2xl">
      <div className="bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
          Career Decision Engine
        </h3>
        {history.length > 0 && (
          <button 
            onClick={reset}
            className="text-xs flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
          >
            <RefreshCw size={14} /> Reset
          </button>
        )}
      </div>

      <div className="p-8 min-h-[300px] flex flex-col justify-center items-center text-center">
        
        {/* Animated content container */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
          
          {currentNode.type === DecisionStepType.QUESTION && (
            <>
              <h4 className="text-2xl font-bold text-white mb-8 leading-relaxed">
                {currentNode.text}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentNode.options?.map((option) => (
                  <button
                    key={option.nextId}
                    onClick={() => handleOptionClick(option.nextId)}
                    className="group relative p-6 bg-gray-950 hover:bg-indigo-900/30 border border-gray-800 hover:border-indigo-500 rounded-lg transition-all text-left"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-medium group-hover:text-white">{option.label}</span>
                      <ArrowRight className="text-gray-600 group-hover:text-indigo-400 transform group-hover:translate-x-1 transition-all" size={20} />
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          {currentNode.type === DecisionStepType.RESULT && (
            <div className="bg-gradient-to-b from-indigo-900/20 to-gray-900 p-8 rounded-2xl border border-indigo-500/30">
              <div className="mb-6 flex justify-center">
                <CheckCircle className="text-green-400 w-16 h-16" />
              </div>
              <p className="text-sm uppercase tracking-widest text-indigo-400 font-bold mb-2">
                Optimal Strategy Found
              </p>
              <h2 className="text-3xl font-extrabold text-white mb-4">
                {currentNode.resultTitle}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto">
                {currentNode.resultDescription}
              </p>
              <div className="mt-8">
                <button 
                  onClick={reset}
                  className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full text-sm font-medium transition-colors"
                >
                  Start Over
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default DecisionTree;
