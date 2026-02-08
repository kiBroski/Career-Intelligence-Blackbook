import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SectionHeader from './components/SectionHeader';
import CareerCard from './components/CareerCard';
import RoiChart from './components/RoiChart';
import DecisionTree from './components/DecisionTree';
import { CAREER_PATHS, ASYMMETRIC_BETS } from './constants';
import { 
  Globe, 
  TrendingUp, 
  Zap, 
  ShieldAlert, 
  Brain, 
  Target, 
  AlertTriangle, 
  Rocket, 
  Layers, 
  Terminal, 
  Lock, 
  Cpu, 
  UserCheck 
} from 'lucide-react';
import { NavItem } from './types';

const NAV_ITEMS: NavItem[] = [
  { id: '1', label: 'Economic Map', icon: Globe, sectionId: 'intro' },
  { id: '2', label: 'The $10K/Mo Paths', icon: TrendingUp, sectionId: 'fast-paths' },
  { id: '3', label: 'AI Leverage', icon: Zap, sectionId: 'ai-leverage' },
  { id: '4', label: 'Low Competition', icon: Target, sectionId: 'goldmines' },
  { id: '5', label: 'Emerging Markets', icon: Layers, sectionId: 'emerging' },
  { id: '6', label: 'AI Safety Filter', icon: ShieldAlert, sectionId: 'safety' },
  { id: '7', label: 'Career ROI', icon: Brain, sectionId: 'roi' },
  { id: '8', label: 'Skill Stacking', icon: Layers, sectionId: 'stacking' },
  { id: '9', label: 'Empire Paths', icon: Rocket, sectionId: 'empire' },
  { id: '10', label: 'Decision Weapon', icon: Terminal, sectionId: 'decision' },
  { id: '11', label: 'Market Truths', icon: AlertTriangle, sectionId: 'truths' },
  { id: '12', label: 'Asymmetric Bets', icon: Rocket, sectionId: 'bets' },
];

function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch(activeSection) {
      case 'intro':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 lg:p-12 text-center">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                Career Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Blackbook</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                The Economic Map of Opportunity (2026–2035). 
                Navigating the digital labor market's skill shortages, AI amplification, and global geo-arbitrage.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                 <button onClick={() => setActiveSection('fast-paths')} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold transition-all">
                   Explore $10K/Mo Paths
                 </button>
                 <button onClick={() => setActiveSection('decision')} className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-bold border border-gray-700 transition-all">
                   Start Decision Engine
                 </button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <Globe className="text-neon-blue mb-4 h-8 w-8" />
                <h3 className="text-white font-bold mb-2">Geo-Arbitrage</h3>
                <p className="text-gray-400 text-sm">Earn Silicon Valley wages while living in low-cost regions. The remote-first economy has decoupled income from location.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <Brain className="text-neon-purple mb-4 h-8 w-8" />
                <h3 className="text-white font-bold mb-2">Skill Shortages</h3>
                <p className="text-gray-400 text-sm">Demand for AI, Cybersec, and Data Science massively exceeds supply, creating huge wage premiums for experts.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <Zap className="text-neon-green mb-4 h-8 w-8" />
                <h3 className="text-white font-bold mb-2">AI Amplification</h3>
                <p className="text-gray-400 text-sm">Generative AI boosts output by 5-25%. A single AI-augmented worker can now rival an entire team of novices.</p>
              </div>
            </div>
          </div>
        );

      case 'fast-paths':
        return (
          <div className="animate-in slide-in-from-right-8 duration-300">
            <SectionHeader 
              title="The $10K/Month Fastest Paths" 
              subtitle="High-yield digital careers capable of hitting $10K/month in 6–24 months."
              icon={TrendingUp}
            />
            <div className="grid md:grid-cols-2 gap-6">
              {CAREER_PATHS.map((path, idx) => (
                <CareerCard key={idx} path={path} />
              ))}
            </div>
          </div>
        );

      case 'ai-leverage':
        return (
          <div className="animate-in slide-in-from-right-8 duration-300">
             <SectionHeader 
              title="AI-Leverage Careers" 
              subtitle="Skill-Compression Paths where motivated operators match expert output."
              icon={Zap}
            />
            <div className="space-y-6">
              {[
                { title: "Prompt Eng / Gen Content", auto: "50-70%", tool: "ChatGPT, Midjourney", save: "Massive" },
                { title: "Workflow Automation", auto: "80-90%", tool: "Zapier, Make, n8n", save: "90% on manual tasks" },
                { title: "AI-Augmented Data Analyst", auto: "30-50%", tool: "Tableau GPT, Copilot", save: "25% faster analysis" },
                { title: "No-Code App Builder", auto: "70-90%", tool: "Bubble, FlutterFlow", save: "90% shorter dev time" },
                { title: "Synthetic Media Creator", auto: "70-90%", tool: "RunwayML, ElevenLabs", save: "3-10x faster production" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                  <div className="bg-gray-950 p-6 md:w-1/3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-800">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <div className="mt-2 inline-flex items-center px-2 py-1 rounded bg-indigo-900/50 text-indigo-300 text-xs font-mono">
                      Automated: {item.auto}
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col justify-center">
                    <p className="text-gray-400 text-sm mb-2"><span className="text-gray-500 uppercase font-bold text-xs">Stack:</span> {item.tool}</p>
                    <p className="text-gray-300"><span className="text-gray-500 uppercase font-bold text-xs">Impact:</span> {item.save}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'goldmines':
        return (
          <div className="animate-in slide-in-from-right-8 duration-300">
             <SectionHeader 
              title="Low-Competition Goldmines" 
              subtitle="Technically intimidating, boring, or hidden fields overlooked by the masses."
              icon={Target}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "AI Risk & Governance", "Industrial Cybersecurity (OT)", "RegTech (Legal Tech)", 
                "Quant Finance (Low-Freq)", "Climate Data Scientist", "Bioinformatics Eng", "SpaceTech Developer"
              ].map((mine, i) => (
                <div key={i} className="bg-gray-900 hover:bg-gray-800 p-6 rounded-xl border border-gray-700 transition-all cursor-default">
                  <div className="flex items-center justify-between mb-2">
                    <Lock size={20} className="text-amber-500" />
                    <span className="text-xs text-gray-500">Niche</span>
                  </div>
                  <h3 className="text-white font-bold">{mine}</h3>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <p className="text-gray-400 italic">"Most people skip these because they’re either overly technical, unglamorous, or require blending fields. The first movers can dominate supply before the crowd arrives."</p>
            </div>
          </div>
        );

      case 'emerging':
        return (
          <div className="animate-in slide-in-from-right-8 duration-300">
             <SectionHeader 
              title="Emerging Economy Optimization" 
              subtitle="Capital-light, output-focused paths for global talent."
              icon={Globe}
            />
            <div className="grid gap-6">
              <div className="bg-gray-900 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-white mb-2">Zero-Capital Freelancing</h3>
                <p className="text-gray-400">Offer skills on global platforms. A remote AI prompt writer needs no inventory, just connectivity.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-white mb-2">Laptop-Only Businesses</h3>
                <p className="text-gray-400">Scalable models like paid newsletters, affiliate marketing, or niche virtual assistance. Start costs under $200.</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-white mb-2">Output-focused Services</h3>
                <p className="text-gray-400">Don't sell hours; sell results (e.g., "10% more sales"). Clients care about impact, not your location.</p>
              </div>
            </div>
          </div>
        );

      case 'safety':
        return (
          <div className="animate-in slide-in-from-right-8 duration-300">
             <SectionHeader 
              title="AI Safety Filter" 
              subtitle="Classifying careers by their resistance or vulnerability to AI."
              icon={ShieldAlert}
            />
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-xl border-t-4 border-green-500">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><UserCheck size={20}/> AI-Resistant</h3>
                <p className="text-sm text-gray-400 mb-4">Human-centric, empathy-driven, physical dexterity.</p>
                <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
                  <li>Therapists</li>
                  <li>Strategic Leadership</li>
                  <li>Bespoke Craftsmanship</li>
                  <li>Nursing/Care</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border-t-4 border-blue-500">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><Rocket size={20}/> AI-Amplified</h3>
                <p className="text-sm text-gray-400 mb-4">Productivity enhanced by AI tools.</p>
                <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
                  <li>Software Developers</li>
                  <li>Data Analysts</li>
                  <li>Legal Researchers</li>
                  <li>Creative Directors</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-xl border-t-4 border-red-500">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2"><Cpu size={20}/> AI-Fragile</h3>
                <p className="text-sm text-gray-400 mb-4">Routine processing, predictable tasks.</p>
                <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
                  <li>Data Entry</li>
                  <li>Basic Translation</li>
                  <li>Level 1 Support</li>
                  <li>Repetitive Coding</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'roi':
        return (
          <div className="animate-in slide-in-from-right-8 duration-300">
            <SectionHeader 
              title="Career ROI Engine" 
              subtitle="Ranking paths by time-to-income, ceiling, and risk."
              icon={TrendingUp}
            />
            <RoiChart />
            <div className="mt-8 text-gray-400 text-sm p-4 border border-gray-800 rounded-lg">
              <strong className="text-white">Methodology:</strong> We weighted Ramp Speed (+20), Income Ceiling (+20), Low Competition (+15), AI Resistance (+15), Scalability (+15), and Ease of Entry (+15).
            </div>
          </div>
        );

      case 'stacking':
        return (
          <div className="animate-in slide-in-from-right-8 duration-300">
            <SectionHeader 
              title="Skill Stacking" 
              subtitle="Combining complementary skills to multiply value."
              icon={Layers}
            />
            <div className="space-y-4">
              {[
                { s1: "Finance", s2: "AI", res: "Automated Forecasting", mult: "30% less work, higher strategic value" },
                { s1: "Sales", s2: "Automation", res: "Deal Velocity", mult: "2x faster closing via CRM agents" },
                { s1: "Data", s2: "Domain Exp", res: "Actionable Insights", mult: "3x fees vs generic analysis" },
                { s1: "Cybersec", s2: "Cloud", res: "Secure Deployment", mult: "Premium for bundled expertise" },
                { s1: "UX Design", s2: "Psychology", res: "Conversion Lift", mult: "Justifies 2x fees via proven ROI" },
              ].map((stack, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-900 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center gap-2 text-white font-mono text-sm md:text-base">
                    <span className="bg-gray-800 px-3 py-1 rounded text-indigo-300">{stack.s1}</span>
                    <span className="text-gray-500">+</span>
                    <span className="bg-gray-800 px-3 py-1 rounded text-pink-300">{stack.s2}</span>
                  </div>
                  <div className="hidden md:block text-gray-600">
                    <TrendingUp size={16} />
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold">{stack.res}</div>
                    <div className="text-green-500 text-xs">{stack.mult}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'empire':
        return (
          <div className="animate-in slide-in-from-right-8 duration-300">
            <SectionHeader 
              title="One-Person Empire Paths" 
              subtitle="Escaping hourly trading by productizing expertise."
              icon={Rocket}
            />
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Micro-SaaS Founder", desc: "Build niche software (e.g. crypto API). Revenue scales without proportional effort." },
                { title: "Productized Agency", desc: "Turn service into a fixed product (e.g. $1.5k/mo ad package). Systematize deliverables." },
                { title: "Digital Content Assets", desc: "Courses, eBooks, Paid Communities. Build once, sell perpetually." },
                { title: "IP Licensing", desc: "Create algorithms, designs, or photos and license them. Pure profit, no labor hours." },
              ].map((path, i) => (
                <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-colors">
                  <h3 className="text-white font-bold text-xl mb-3">{path.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{path.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'decision':
        return (
          <div className="animate-in slide-in-from-right-8 duration-300">
            <SectionHeader 
              title="Decision Weapon" 
              subtitle="A strategic decision tree to determine your optimal path."
              icon={Terminal}
            />
            <DecisionTree />
          </div>
        );

      case 'truths':
        return (
          <div className="animate-in slide-in-from-right-8 duration-300">
            <SectionHeader 
              title="Brutal Market Truths" 
              subtitle="Careers that look good on hype but fail economically."
              icon={AlertTriangle}
            />
            <div className="bg-red-900/10 border border-red-900/30 rounded-xl p-6 space-y-4">
              {[
                { t: "Influencers", d: "Top 1% take all. High platform risk." },
                { t: "Generic Dropshipping", d: "Saturated. Margins eaten by ads." },
                { t: "Basic $5 Gigs", d: "Wage trap. 96% earn <$500/mo." },
                { t: "Get-Rich-Quick", d: "MLM/Crypto schemes. 99% lose money." },
                { t: "Commoditized SEO", d: "Supply ballooned. Automation crushing rates." },
              ].map((truth, i) => (
                <div key={i} className="flex items-start gap-3">
                  <AlertTriangle className="text-red-500 shrink-0 mt-1" size={16} />
                  <div>
                    <span className="text-white font-bold block">{truth.t}</span>
                    <span className="text-gray-400 text-sm">{truth.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'bets':
        return (
          <div className="animate-in slide-in-from-right-8 duration-300">
            <SectionHeader 
              title="Top 10 Asymmetric Bets" 
              subtitle="Who has the least to lose and the most to gain?"
              icon={Rocket}
            />
            <div className="grid md:grid-cols-2 gap-6">
              {ASYMMETRIC_BETS.map((bet, i) => (
                <div key={i} className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex flex-col justify-between">
                  <div>
                    <h4 className="text-neon-blue font-bold mb-1">{bet.title}</h4>
                    <p className="text-gray-400 text-sm">{bet.desc}</p>
                  </div>
                  <div className="mt-3 text-xs text-gray-600 uppercase tracking-widest font-semibold">
                    Bet #{i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-indigo-500/30">
      <Sidebar 
        navItems={NAV_ITEMS} 
        activeSection={activeSection} 
        onNavigate={setActiveSection}
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <main className="lg:pl-72 min-h-screen transition-all duration-300">
        <div className="max-w-5xl mx-auto p-6 lg:p-12 pb-24">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;