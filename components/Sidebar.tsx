import React from 'react';
import { NavItem } from '../types';
import { BookOpen, Menu, X } from 'lucide-react';

interface SidebarProps {
  navItems: NavItem[];
  activeSection: string;
  onNavigate: (id: string) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ navItems, activeSection, onNavigate, isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={toggleSidebar} 
        className="fixed top-4 left-4 z-50 p-2 bg-gray-850 rounded-md border border-gray-700 lg:hidden text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Content */}
      <aside 
        className={`
          fixed top-0 left-0 h-full w-72 bg-gray-900 border-r border-gray-800 z-40 transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col
        `}
      >
        <div className="p-6 border-b border-gray-800 flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-lg">
            <BookOpen className="text-white h-6 w-6" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg leading-tight">Blackbook</h1>
            <p className="text-xs text-gray-400">2026-2035 Edition</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.sectionId);
                if (window.innerWidth < 1024) toggleSidebar();
              }}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                ${activeSection === item.sectionId 
                  ? 'bg-gray-800 text-neon-blue border-l-2 border-neon-blue' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'}
              `}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <div className="bg-gray-950 p-4 rounded-lg border border-gray-800">
            <p className="text-xs text-gray-500 text-center uppercase tracking-widest font-semibold mb-1">Status</p>
            <p className="text-center text-green-500 text-sm font-mono flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              ONLINE
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
