// API Configuration

export const API_CONFIG = {
  // Set to true to use mock data during development
  USE_MOCK_DATA: true,
  
  // Firebase configuration (to be filled in)
  FIREBASE_CONFIG: {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  },
  
  // API endpoints (if using REST API instead of Firebase)
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  
  // Collection names for Firestore
  COLLECTIONS: {
    KEYWORDS: 'keywords',
    OPTIMIZATIONS: 'optimizations',
    UPDATES: 'updates',
    SUGGESTIONS: 'website_suggestions',
    METRICS: 'metrics',
    SEO_TASKS: 'seo_tasks',
    NOTIFICATIONS: 'notifications',
    USERS: 'users',
  },
};
