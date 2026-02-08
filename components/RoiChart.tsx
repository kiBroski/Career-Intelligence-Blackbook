import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  Cell
} from 'recharts';
import { ROI_DATA } from '../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 border border-gray-700 p-4 rounded-lg shadow-xl">
        <p className="text-white font-bold mb-2">{label}</p>
        <p className="text-indigo-400 text-sm">Total ROI Score: {payload[0].value}</p>
        <p className="text-gray-400 text-xs mt-1">Based on Ramp, Ceiling, & AI Safety</p>
      </div>
    );
  }
  return null;
};

const RoiChart: React.FC = () => {
  return (
    <div className="w-full bg-gray-900 p-6 rounded-xl border border-gray-700">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white">Career ROI Engine</h3>
        <p className="text-sm text-gray-400">Comparing emerging paths vs. traditional roles</p>
      </div>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ROI_DATA}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis 
              dataKey="role" 
              stroke="#9ca3af" 
              tick={{ fill: '#9ca3af', fontSize: 12 }} 
              axisLine={{ stroke: '#4b5563' }}
            />
            <YAxis 
              stroke="#9ca3af" 
              tick={{ fill: '#9ca3af' }} 
              axisLine={{ stroke: '#4b5563' }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#374151', opacity: 0.4 }} />
            <Bar dataKey="totalScore" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={50}>
              {ROI_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.totalScore > 80 ? '#0aff0a' : entry.totalScore > 50 ? '#6366f1' : '#ef4444'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-gray-500">
        <div className="flex items-center justify-center gap-2">
          <span className="w-3 h-3 rounded-full bg-neon-green"></span> High ROI (&gt;80)
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="w-3 h-3 rounded-full bg-indigo-500"></span> Moderate (50-80)
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span> Low ROI (&lt;50)
        </div>
      </div>
    </div>
  );
};

export default RoiChart;