// React Query hooks for dashboard data fetching

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type {
  OptimizationContent,
  NotificationSettings,
  AuthCredentials,
  SEOTask,
} from '@/types/dashboard';
import {
  fetchKeywords,
  fetchOptimizations,
  fetchUpdates,
  fetchWebsiteSuggestions,
  fetchDashboardMetrics,
  fetchSEOTasks,
  fetchNotifications,
  fetchUserProfile,
  updateSEOTaskStatus,
  markNotificationAsRead,
  fetchOptimizationContent,
  updateOptimizationContent,
  updateUserProfile,
  updateNotificationSettings,
  loginUser,
  signupUser,
  logoutUser,
  getCurrentUser,
  fetchVisitorsChartData,
  fetchWeeklySummary,
  fetchActionAlerts,
  fetchSuccessInsights,
  fetchSEOOptimizations,
  fetchSEOPlanCategories,
  fetchContentIdeas,
} from '@/services/api';

// Query keys for React Query
export const QUERY_KEYS = {
  KEYWORDS: ['keywords'],
  OPTIMIZATIONS: ['optimizations'],
  UPDATES: ['updates'],
  SUGGESTIONS: ['suggestions'],
  METRICS: ['metrics'],
  SEO_TASKS: ['seoTasks'],
  NOTIFICATIONS: ['notifications'],
  USER_PROFILE: ['userProfile'],
  VISITORS_CHART: ['visitorsChart'],
  WEEKLY_SUMMARY: ['weeklySummary'],
  ACTION_ALERTS: ['actionAlerts'],
  SUCCESS_INSIGHTS: ['successInsights'],
  OPTIMIZATION_CONTENT: ['optimizationContent'],
};

/**
 * Hook to fetch keywords data
 */
export const useKeywords = () => {
  return useQuery({
    queryKey: QUERY_KEYS.KEYWORDS,
    queryFn: fetchKeywords,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

/**
 * Hook to fetch optimizations data
 */
export const useOptimizations = () => {
  return useQuery({
    queryKey: QUERY_KEYS.OPTIMIZATIONS,
    queryFn: fetchOptimizations,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Hook to fetch updates feed
 */
export const useUpdates = () => {
  return useQuery({
    queryKey: QUERY_KEYS.UPDATES,
    queryFn: fetchUpdates,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Hook to fetch website suggestions
 */
export const useWebsiteSuggestions = () => {
  return useQuery({
    queryKey: QUERY_KEYS.SUGGESTIONS,
    queryFn: fetchWebsiteSuggestions,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Hook to fetch dashboard metrics (hero + KPIs)
 */
export const useDashboardMetrics = () => {
  return useQuery({
    queryKey: QUERY_KEYS.METRICS,
    queryFn: fetchDashboardMetrics,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Hook to fetch SEO tasks
 */
export const useSEOTasks = () => {
  return useQuery({
    queryKey: QUERY_KEYS.SEO_TASKS,
    queryFn: fetchSEOTasks,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Hook to fetch notifications
 */
export const useNotifications = () => {
  return useQuery({
    queryKey: QUERY_KEYS.NOTIFICATIONS,
    queryFn: fetchNotifications,
    staleTime: 1 * 60 * 1000, // 1 minute
  });
};

/**
 * Hook to fetch user profile
 */
export const useUserProfile = () => {
  return useQuery({
    queryKey: QUERY_KEYS.USER_PROFILE,
    queryFn: fetchUserProfile,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

/**
 * Mutation hook to update SEO task status
 */
export const useUpdateSEOTaskStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ taskId, status }: { taskId: number; status: string }) =>
      updateSEOTaskStatus(taskId, status as any),
    onSuccess: () => {
      // Invalidate and refetch SEO tasks
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.SEO_TASKS });
    },
  });
};

/**
 * Mutation hook to mark notification as read
 */
export const useMarkNotificationAsRead = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (notificationId: number) => markNotificationAsRead(notificationId),
    onSuccess: () => {
      // Invalidate and refetch notifications
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.NOTIFICATIONS });
    },
  });
};

/**
 * Hook to fetch optimization content
 */
export const useOptimizationContent = () => {
  return useQuery({
    queryKey: ['optimizationContent'],
    queryFn: fetchOptimizationContent,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Mutation hook to update optimization content
 */
export const useUpdateOptimizationContent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<OptimizationContent> }) =>
      updateOptimizationContent(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['optimizationContent'] });
    },
  });
};

/**
 * Mutation hook to update user profile
 */
export const useUpdateUserProfile = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ userId, updates }: { userId: string; updates: Partial<any> }) =>
      updateUserProfile(userId, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.USER_PROFILE });
    },
  });
};

/**
 * Mutation hook to update notification settings
 */
export const useUpdateNotificationSettings = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ userId, settings }: { userId: string; settings: NotificationSettings }) =>
      updateNotificationSettings(userId, settings),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.USER_PROFILE });
    },
  });
};

/**
 * Mutation hook for user login
 */
export const useLogin = () => {
  return useMutation({
    mutationFn: (credentials: AuthCredentials) => loginUser(credentials),
  });
};

/**
 * Mutation hook for user signup
 */
export const useSignup = () => {
  return useMutation({
    mutationFn: (credentials: AuthCredentials) => signupUser(credentials),
  });
};

/**
 * Mutation hook for user logout
 */
export const useLogout = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: () => logoutUser(),
    onSuccess: () => {
      queryClient.clear();
    },
  });
};

/**
 * Hook to get current authenticated user
 */
export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUser,
    staleTime: 10 * 60 * 1000,
  });
};

/**
 * Hook to fetch visitors chart data
 */
export const useVisitorsChart = () => {
  return useQuery({
    queryKey: QUERY_KEYS.VISITORS_CHART,
    queryFn: fetchVisitorsChartData,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Hook to fetch weekly summary
 */
export const useWeeklySummary = () => {
  return useQuery({
    queryKey: QUERY_KEYS.WEEKLY_SUMMARY,
    queryFn: fetchWeeklySummary,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Hook to fetch action alerts
 */
export const useActionAlerts = () => {
  return useQuery({
    queryKey: QUERY_KEYS.ACTION_ALERTS,
    queryFn: fetchActionAlerts,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Hook to fetch success insights
 */
export const useSuccessInsights = () => {
  return useQuery({
    queryKey: QUERY_KEYS.SUCCESS_INSIGHTS,
    queryFn: fetchSuccessInsights,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Hook to fetch SEO optimizations for Aanpassingen page
 */
export const useSEOOptimizations = () => {
  return useQuery({
    queryKey: ['seoOptimizations'],
    queryFn: fetchSEOOptimizations,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Hook to fetch SEO plan categories
 */
export const useSEOPlanCategories = () => {
  return useQuery({
    queryKey: ['seoPlanCategories'],
    queryFn: fetchSEOPlanCategories,
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Hook to fetch content ideas
 */
export const useContentIdeas = () => {
  return useQuery({
    queryKey: ['contentIdeas'],
    queryFn: fetchContentIdeas,
    staleTime: 5 * 60 * 1000,
  });
};
