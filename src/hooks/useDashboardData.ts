// React Query hooks for dashboard data fetching

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
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
