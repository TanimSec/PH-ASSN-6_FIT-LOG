# 💪 B14-A6-Fit Log

FitLog is a dark, focused workout library and daily workout planning application built with Next.js.

Users can browse workouts from the FitLog API, open detailed workout pages, add workouts to today's plan, save workouts for later, and manage their daily workout list from the My Plan page.

---

## 🔗 Project Links

- **Live Link:** Add your deployed URL here
- **GitHub Repository:** Add your GitHub repository URL here

---

## ✨ Features

### 1. Workout Library

- Displays all workouts provided by the FitLog API.
- Responsive 3-column workout grid on large screens.
- Each workout card includes:
  - Workout image
  - Muscle-group/category tags
  - Workout name
  - Equipment
  - Duration
  - Calories
  - Rating

### 2. Workout Details

Each workout has a dedicated detail page containing:

- Large workout image
- Workout name
- Description
- Muscle-group tags
- Equipment
- Difficulty
- Sets
- Reps
- Duration
- Calories
- Rating
- Step-by-step instructions

### 3. Today's Workout Plan

Users can add workouts to their daily plan.

- Plan counter updates in the navbar.
- Maximum of five workouts can be added.
- Exercises, total minutes, and total calories update dynamically.
- Users can view workout details from the plan.
- Users can mark workouts as completed.
- Users can remove workouts from the plan.

### 4. Save Workouts for Later

Users can save workouts for later.

- Saved counter updates in the navbar.
- Saved workouts appear in the Saved tab.
- Saved workouts can be removed.
- Users receive feedback through toast notifications.

### 5. Toast Notifications

The application provides toast feedback for important actions, including:

- Workout added to today's plan
- Workout saved
- Workout already saved
- Workout already in today's plan
- Plan limit reached
- Workout marked as done
- Workout removed from today's plan
- Workout removed from saved

### 6. My Plan Dashboard

The `/my-plan` page provides:

- Today's Plan tab
- Saved tab
- Exercises metric
- Total minutes metric
- Total calories metric
- Workout sorting by:
  - Duration
  - Calories
  - Rating
- Empty state when no workouts are available

### 7. Responsive Design

The application is designed to work across:

- Mobile
- Tablet
- Desktop

The workout grid, hero section, navigation, workout details, and My Plan layout adapt to different screen sizes.

### 8. Custom 404 Page

A custom 404 page is included for unknown or invalid routes.

### 9. Loading State

The home page displays a loading state while workout data is being fetched from the API.

---

## 🛠️ Technologies Used

- **Next.js** — Application framework
- **Next.js App Router** — Page routing and layouts
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Styling and responsive design
- **Next Image** — Optimized image rendering
- **FitLog API** — Workout data source

---

## 🔌 API

### All Workouts

```text
https://api.abcz.workers.dev/api/fitlog