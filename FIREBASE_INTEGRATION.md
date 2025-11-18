# Firebase Integration Guide

This guide explains how to integrate Firebase/Firestore with your KlikKlaar dashboard frontend.

## Overview

The frontend is now structured to easily connect to Firebase. All data fetching logic is centralized in the service layer, and components receive data through React Query hooks.

## Architecture

```
┌─────────────────┐
│   Components    │  ← Receives data as props
└────────┬────────┘
         │
┌────────▼────────┐
│  React Query    │  ← Manages caching, loading, errors
│     Hooks       │
└────────┬────────┘
         │
┌────────▼────────┐
│  Service Layer  │  ← Makes API/Firebase calls
│   (api.ts)      │
└────────┬────────┘
         │
┌────────▼────────┐
│ Firebase/Firestore │ ← Your backend
└─────────────────┘
```

## Step 1: Install Firebase

```bash
npm install firebase
```

## Step 2: Set Up Environment Variables

Create a `.env` file in your project root:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Step 3: Firestore Collection Structure

Create the following collections in your Firestore database:

### Collection: `keywords`
```json
{
  "term": "kapper hoorn",
  "position": 3,
  "delta": 2,
  "deltaType": "up",
  "ctr": 8.4,
  "visits": 234,
  "userId": "user_id_here",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Collection: `optimizations`
```json
{
  "name": "Meta beschrijving geoptimaliseerd",
  "page": "Homepage",
  "reason": "Betere CTR in zoekresultaten",
  "impact": "+12% meer clicks",
  "date": "2024-03-15",
  "status": "voltooid",
  "userId": "user_id_here"
}
```

### Collection: `updates`
```json
{
  "type": "content",
  "title": "Nieuwe blog post gepubliceerd",
  "impact": "+23 organische bezoekers verwacht",
  "timestamp": "2 uur geleden",
  "badge": "Content",
  "details": "De nieuwe blog post over 'SEO trends 2024' is gepubliceerd...",
  "userId": "user_id_here"
}
```

### Collection: `website_suggestions`
```json
{
  "id": 1,
  "icon": "FileText",
  "title": "Voeg een blog post toe over...",
  "category": "Content creatie",
  "priority": "Hoog",
  "description": "Schrijf een uitgebreide guide...",
  "keywords": ["SEO tips", "zoekmachine optimalisatie"],
  "estimatedImpact": "+150 bezoekers/maand",
  "userId": "user_id_here"
}
```

### Collection: `metrics`
```json
{
  "heroMetric": {
    "title": "KlikKlaar.io zichtbaarheid deze maand",
    "percentage": "+160%",
    "improvement": "Verbetering t.o.v. vorige maand",
    "trending": "Trending up"
  },
  "kpiMetrics": [
    {
      "label": "Totale bezoekers",
      "value": "2,847",
      "delta": "+12.5%",
      "deltaType": "up",
      "helpText": "Aantal bezoekers deze maand",
      "icon": "Users"
    }
  ],
  "userId": "user_id_here",
  "period": "2024-03"
}
```

### Collection: `seo_tasks`
```json
{
  "id": 1,
  "title": "Optimize homepage meta description",
  "description": "Update meta description for better CTR",
  "priority": "high",
  "status": "in-progress",
  "dueDate": "2024-03-20",
  "estimatedImpact": "+15% CTR",
  "category": "On-page SEO",
  "userId": "user_id_here"
}
```

### Collection: `notifications`
```json
{
  "id": 1,
  "title": "Nieuwe keyword ranking",
  "description": "Je staat nu #1 voor 'kapsalon hoorn centrum'",
  "time": "5 min geleden",
  "read": false,
  "type": "success",
  "userId": "user_id_here"
}
```

### Collection: `users`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "My Company",
  "website": "https://example.com",
  "plan": "Pro",
  "createdAt": "2024-01-01T00:00:00Z"
}
```

## Step 4: Firestore Security Rules

Add these security rules to your Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Helper function to check if user is authenticated
    function isAuthenticated() {
      return request.auth != null;
    }
    
    // Helper function to check if user owns the resource
    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }
    
    // Keywords collection
    match /keywords/{keywordId} {
      allow read: if isOwner(resource.data.userId);
      allow write: if isAuthenticated();
    }
    
    // Optimizations collection
    match /optimizations/{optimizationId} {
      allow read: if isOwner(resource.data.userId);
      allow write: if isAuthenticated();
    }
    
    // Updates collection
    match /updates/{updateId} {
      allow read: if isOwner(resource.data.userId);
      allow write: if isAuthenticated();
    }
    
    // Website suggestions collection
    match /website_suggestions/{suggestionId} {
      allow read: if isOwner(resource.data.userId);
      allow write: if isAuthenticated();
    }
    
    // Metrics collection
    match /metrics/{metricId} {
      allow read: if isOwner(resource.data.userId);
      allow write: if isAuthenticated();
    }
    
    // SEO tasks collection
    match /seo_tasks/{taskId} {
      allow read: if isOwner(resource.data.userId);
      allow write: if isAuthenticated();
    }
    
    // Notifications collection
    match /notifications/{notificationId} {
      allow read: if isOwner(resource.data.userId);
      allow write: if isAuthenticated();
    }
    
    // Users collection
    match /users/{userId} {
      allow read: if isOwner(userId);
      allow write: if isOwner(userId);
    }
  }
}
```

## Step 5: Initialize Firebase

Uncomment the code in `src/services/firebase-example.ts` and customize it for your needs.

## Step 6: Update Service Functions

Replace the placeholder functions in `src/services/api.ts` with actual Firebase calls. Example:

```typescript
import { fetchKeywordsFromFirebase } from './firebase-example';

export const fetchKeywords = async (): Promise<Keyword[]> => {
  // Replace with actual Firebase call
  return await fetchKeywordsFromFirebase();
};
```

## Step 7: Configure API Config

Update `src/config/api.ts`:

```typescript
export const API_CONFIG = {
  USE_MOCK_DATA: false, // Set to false to use real data
  // ... rest of config
};
```

## Step 8: Test Your Integration

1. Start your development server
2. Check the browser console for any Firebase errors
3. Verify data is loading in the dashboard
4. Test loading states and error handling

## Authentication (Optional)

If you want to add Firebase Authentication:

```typescript
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
```

## Useful Firebase Functions

### Query with filters
```typescript
const q = query(
  collection(db, 'keywords'),
  where('userId', '==', currentUserId),
  orderBy('visits', 'desc'),
  limit(10)
);
```

### Add document
```typescript
await addDoc(collection(db, 'keywords'), {
  term: 'new keyword',
  position: 1,
  // ...
});
```

### Update document
```typescript
await updateDoc(doc(db, 'keywords', keywordId), {
  position: 2,
});
```

### Delete document
```typescript
await deleteDoc(doc(db, 'keywords', keywordId));
```

## Troubleshooting

### Data not loading
- Check Firebase console for errors
- Verify environment variables are set correctly
- Check Firestore security rules
- Ensure user is authenticated if required

### Performance issues
- Use Firestore indexes for complex queries
- Implement pagination for large datasets
- Use `staleTime` in React Query to reduce unnecessary fetches

## Need Help?

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [React Query Documentation](https://tanstack.com/query/latest)
