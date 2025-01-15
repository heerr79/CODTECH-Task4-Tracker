# CODTECH-Task4-Tracker
**Name:** HEER RAJESH PANCHAL

**Intern ID:** CT08ENV

**Domain:** React.js Web Development

**Duration:** December 17th,2024 to January 17th,2025

## Overview of the Project

### Project: PRODUCTIVITY TRACKER APP

### Objective: The Productivity Tracker aims to help users efficiently monitor and manage their daily activities by tracking the time spent on various websites. With a user-friendly interface, the app promotes better time management by providing insights into usage patterns and supporting goal-setting functionalities.

### Features
- Website Time Tracking: Automatically track the time spent on different websites using Chrome Extension APIs.
- Goal Setting: Allow users to set daily productivity goals and track their progress.
- Data Visualization: Display detailed usage statistics through interactive graphs and charts using Recharts.
- Real-time Updates: Reflect time tracking and goal progress in real-time.
- Storage and Synchronization: Store data using Chrome's storage.sync for access across multiple devices.
- Responsive Design: Ensure compatibility with various devices for seamless usage.

### Technology Stack
- Frontend: React.js
- Backend: Chrome Extension APIs
- Database: Chrome Storage API (storage.sync)
- Styling: Tailwind CSS / Bootstrap / Custom CSS
- State Management: React State or Context API

### Project Implementation Steps
- Define Project Structure and Install Dependencies: Set up the Chrome Extension project structure, including manifest.json, background.js, popup.html, and popup.js. Install required dependencies such as react, recharts, and react-dom.
- API Integration: Use Chrome's tabs and idle APIs to track website usage in the background.
- Core Features Development: Implement a background script (background.js) to monitor tab changes and idle state for tracking website usage time. Develop the React components, such as Popup, GoalSetter, and UsageGraph, to display time tracking data and allow goal management.
- UI/UX Design: Design a sleek and responsive user interface using Tailwind CSS or Bootstrap. Ensure smooth navigation between setting goals, viewing progress, and usage statistics.

### Testing & Deployment

- Testing: Verify functionality for time tracking, goal setting, and real-time updates. Check responsiveness and compatibility across devices and browsers.
- Deployment: Package the extension and load it into Chrome via the Load Unpacked option in chrome://extensions/.
