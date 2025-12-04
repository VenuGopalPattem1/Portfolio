import React from 'react';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  year: string;
  image?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: React.FC<any>;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}