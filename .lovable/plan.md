

## Problem

The sidebar lacks a visible right border/separator line. When you scroll, there's no visual distinction between the sidebar and the main content area, making the sidebar "disappear" visually.

## Fix

Add a `border-r border-sidebar-border` (or `border-border`) class to the sidebar container in `Sidebar.tsx` so there's always a visible vertical line separating the sidebar from the main content.

**File**: `src/components/dashboard/Sidebar.tsx` (line 41)

Change:
```
<div className="w-64 premium-sidebar-bg h-screen flex flex-col sticky top-0">
```
To:
```
<div className="w-64 premium-sidebar-bg h-screen flex flex-col sticky top-0 border-r border-sidebar-border">
```

This single class addition ensures a persistent separator line between the sidebar and content area at all scroll positions.

