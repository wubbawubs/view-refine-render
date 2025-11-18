// Dashboard Data Types

export interface Keyword {
  term: string;
  position: number;
  delta: number;
  deltaType: "up" | "down" | "neutral";
  ctr: number;
  visits: number;
}

export interface Optimization {
  name: string;
  page: string;
  reason: string;
  impact: string;
  date: string;
  status: "bezig" | "voltooid";
}

export interface Update {
  type: string;
  title: string;
  impact: string;
  timestamp: string;
  badge: string;
  details: string;
}

export interface WebsiteSuggestion {
  id: number;
  icon: string;
  title: string;
  category: string;
  priority: "Hoog" | "Gemiddeld" | "Laag";
  description: string;
  keywords: string[];
  estimatedImpact: string;
}

export interface KPIMetric {
  label: string;
  value: string;
  delta: string;
  deltaType: "up" | "down" | "neutral";
  helpText: string;
  icon: string;
}

export interface HeroMetricData {
  title: string;
  percentage: string;
  improvement: string;
  trending: string;
}

export interface SEOTask {
  id: number;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  status: "not-started" | "in-progress" | "completed";
  dueDate: string;
  estimatedImpact: string;
  category: string;
}

export interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: string;
}

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  plan: string;
  createdAt: string;
  notifications?: NotificationSettings;
}

export interface NotificationSettings {
  emailNotifications: boolean;
  weeklyReports: boolean;
  seoAlerts: boolean;
  performanceUpdates: boolean;
}

export interface DashboardMetrics {
  heroMetric: HeroMetricData;
  kpiMetrics: KPIMetric[];
}

export interface OptimizationContent {
  id: string;
  type: 'h1' | 'meta' | 'h2' | 'alt' | 'content' | 'schema';
  page: string;
  originalValue: string;
  optimizedValue: string;
  status: 'active' | 'pending' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  error?: string;
  user?: UserProfile;
}
