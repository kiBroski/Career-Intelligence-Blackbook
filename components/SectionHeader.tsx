import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Props {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
}

const SectionHeader: React.FC<Props> = ({ title, subtitle, icon: Icon }) => {
  return (
    <div className="mb-10 relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700">
      <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
         {Icon && <Icon size={200} />}
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-2">
          {Icon && <Icon className="text-indigo-400 h-8 w-8" />}
          <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
        </div>
        {subtitle && <p className="text-gray-400 text-lg max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
};

export default SectionHeader;
