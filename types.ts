import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface Section {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  icon?: LucideIcon;
}

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  sectionId: string;
}

export interface CareerPath {
  title: string;
  rampUp: number;
  competition: string;
  aiAmplification: number;
  clientBudget: string;
  difficulty: string;
  description: string;
  whyMispriced: string;
}

export interface RoiData {
  role: string;
  ramp: number;
  ceiling: number;
  competition: number;
  aiRisk: number;
  scalability: number;
  difficulty: number; // Inverted for score (Higher is easier in score, but here we store raw difficulty)
  totalScore: number;
}

export enum DecisionStepType {
  QUESTION = 'QUESTION',
  RESULT = 'RESULT',
}

export interface DecisionNode {
  id: string;
  type: DecisionStepType;
  text: string;
  options?: { label: string; nextId: string }[];
  resultTitle?: string;
  resultDescription?: string;
}