import React from 'react';
import { 
  TrendingUp, 
  Zap, 
  ShieldAlert, 
  Brain, 
  Globe, 
  Target, 
  Layers, 
  Users, 
  AlertTriangle, 
  Rocket 
} from 'lucide-react';
import { CareerPath, DecisionNode, DecisionStepType, RoiData } from './types';

export const CAREER_PATHS: CareerPath[] = [
  {
    title: "AI/Prompt Engineering Consultant",
    rampUp: 7,
    competition: "Moderate",
    aiAmplification: 5,
    clientBudget: "High",
    difficulty: "Medium",
    description: "Expertise in LLM tools and optimizing AI outputs for enterprise.",
    whyMispriced: "Demand is nascent; early adopters capture outsized consulting fees."
  },
  {
    title: "No-Code/Workflow Automator",
    rampUp: 8,
    competition: "Low",
    aiAmplification: 4,
    clientBudget: "Medium",
    difficulty: "Low",
    description: "Building apps and automations using visual tools like Zapier/Bubble.",
    whyMispriced: "Drastically undercuts traditional dev shops while delivering faster value."
  },
  {
    title: "Freelance Cybersecurity Consultant",
    rampUp: 5,
    competition: "Mod-High",
    aiAmplification: 3,
    clientBudget: "High",
    difficulty: "High",
    description: "Focusing on underserved niches like SMB cloud security.",
    whyMispriced: "High stakes + boring nature = fewer rivals and premium billing."
  },
  {
    title: "Machine Learning Engineer (Freelance)",
    rampUp: 4,
    competition: "Moderate",
    aiAmplification: 4,
    clientBudget: "High",
    difficulty: "High",
    description: "Bridging the gap between ML models and business implementation.",
    whyMispriced: "Market assumes PhD requirement; self-taught generalists can bridge gap."
  },
  {
    title: "Blockchain/Smart-Contract Dev",
    rampUp: 5,
    competition: "Low",
    aiAmplification: 3,
    clientBudget: "Med-High",
    difficulty: "Medium",
    description: "Developing decentralized apps and tokenomics.",
    whyMispriced: "Crypto winter scared newbies; niche demand persists for real utility."
  }
];

export const ROI_DATA: RoiData[] = [
  { role: 'AI/Prompt Eng', ramp: 9, ceiling: 8, competition: 7, aiRisk: 9, scalability: 8, difficulty: 6, totalScore: 85 },
  { role: 'No-Code Dev', ramp: 10, ceiling: 7, competition: 8, aiRisk: 8, scalability: 9, difficulty: 8, totalScore: 88 },
  { role: 'Cybersecurity', ramp: 5, ceiling: 9, competition: 6, aiRisk: 7, scalability: 7, difficulty: 3, totalScore: 70 },
  { role: 'Generic Web Dev', ramp: 6, ceiling: 5, competition: 2, aiRisk: 3, scalability: 5, difficulty: 6, totalScore: 45 },
  { role: 'Data Entry', ramp: 10, ceiling: 2, competition: 1, aiRisk: 1, scalability: 2, difficulty: 9, totalScore: 30 },
];

export const DECISION_TREE: Record<string, DecisionNode> = {
  'start': {
    id: 'start',
    type: DecisionStepType.QUESTION,
    text: "How quickly do you need to generate income?",
    options: [
      { label: "Immediately (< 6 months)", nextId: 'immediate' },
      { label: "Patiently (1-2 years)", nextId: 'patient' },
    ]
  },
  'immediate': {
    id: 'immediate',
    type: DecisionStepType.QUESTION,
    text: "Are you comfortable with technical complexity (coding, math)?",
    options: [
      { label: "Yes, I'm tech-savvy", nextId: 'tech_fast' },
      { label: "No, I prefer low-code/creative", nextId: 'non_tech_fast' },
    ]
  },
  'patient': {
    id: 'patient',
    type: DecisionStepType.QUESTION,
    text: "What is your risk tolerance?",
    options: [
      { label: "High (Entrepreneurship)", nextId: 'high_risk_patient' },
      { label: "Low (Steady Career)", nextId: 'low_risk_patient' },
    ]
  },
  'tech_fast': {
    id: 'tech_fast',
    type: DecisionStepType.RESULT,
    text: "Recommended Path",
    resultTitle: "Cybersecurity or Cloud Freelancing",
    resultDescription: "High demand, defined path, immediate freelance opportunities on platforms like Upwork."
  },
  'non_tech_fast': {
    id: 'non_tech_fast',
    type: DecisionStepType.RESULT,
    text: "Recommended Path",
    resultTitle: "Prompt Engineering or No-Code Builder",
    resultDescription: "Fast ramp-up. Leverage tools like Zapier or ChatGPT to sell output, not hours."
  },
  'high_risk_patient': {
    id: 'high_risk_patient',
    type: DecisionStepType.RESULT,
    text: "Recommended Path",
    resultTitle: "Micro-SaaS or Content Empire",
    resultDescription: "Build an asset (software, course, community) that scales. High initial effort, infinite leverage."
  },
  'low_risk_patient': {
    id: 'low_risk_patient',
    type: DecisionStepType.RESULT,
    text: "Recommended Path",
    resultTitle: "Specialized Deep Tech (Quantum, BioInfo)",
    resultDescription: "Learn a hard, rare skill like Quantum Computing or Bioinformatics. Guaranteed high rates due to scarcity."
  },
};

export const ASYMMETRIC_BETS = [
  { title: "SpaceTech Services", desc: "Satellite analytics & logistics. Market tripling to $1.8T." },
  { title: "Quantum Software", desc: "Nascent field. Shortage of qualified candidates." },
  { title: "Bioinformatics & AI", desc: "Genomics pipelines. 11% annual growth." },
  { title: "Cybersecurity & AI Ops", desc: "Automated threat hunting for SMBs." },
  { title: "Climate Data Science", desc: "Carbon markets and renewable optimization." },
  { title: "Generative Media Biz", desc: "Deepfakes, AI avatars, synthetic voice services." },
  { title: "6G Connectivity", desc: "Terahertz comms R&D. Next big infra wave." },
  { title: "Regenerative Med Soft", desc: "Protein folding and organ modeling tools." },
  { title: "Industrial Robotics", desc: "AI vision for factories and infrastructure." },
  { title: "Niche Blockchain", desc: "Real estate tokenization, supply chain records." },
];
