# 💼 React Job Finder App

A modern **Job Finder Application** built with **React, TypeScript, and Vite**.

This project provides a frontend interface for browsing remote job opportunities, searching and filtering job listings, saving jobs, viewing job details, and submitting simulated job applications. It was developed as a practical React project to apply modern frontend development concepts in a real-world application.

> 🚧 **Project Status:** Frontend development completed
> 🌐 **Job Data:** Remotive Public API
> 💾 **Saved Jobs:** React Context API + `localStorage`

---

## 📸 Project Preview

### Job Finder Home Screen

![Job Finder Home Screen](./src/Screenshots/job_finder_home.png)

### Job Finder Save Button

![Job Finder Save Button](./src/Screenshots/job_finder_save_button.png)

### Job Finder Pages

![Job Finder Pages](./src/Screenshots/job_finder_pages.png)

### Job Finder Apply Form

![Job Finder Apply Form](./src/Screenshots/job_finder_apply_form.png)

### Job Finder Responsive Layout & Skeletons

![Job Finder Res. & skeletons](./src/Screenshots/job_finder_res.%20&%20skeletons.png)

---

## ✨ Features

## 💼 Job Listings

- Fetch remote job opportunities using the Remotive REST API
- Display available job listings
- View job titles and company information
- Open individual job details
- Display job descriptions and related information

## 🔍 Search & Filtering

- Search jobs by keyword
- Search by company
- Filter jobs by location type
- Switch between Remote and On-site listings
- Sort jobs alphabetically
- Update results dynamically based on selected filters

## 🌙 Dark Mode

- Global dark mode support
- Theme management using React Context API
- Persist theme preference using `localStorage`
- Detect system theme preference automatically

## 💾 Saved Jobs

- Save jobs for later
- Remove saved jobs
- Check whether a job is already saved
- Prevent duplicate saved jobs
- Store saved jobs using `localStorage`
- Manage saved jobs through React Context API

## 📄 Client-Side Pagination

- Display jobs across multiple pages
- Limit the number of jobs shown per page
- Navigate between pages
- Slice job data on the client side
- Keep long job result lists organized

## 📝 Job Application

- Submit a simulated job application
- Enter applicant information
- Validate form fields
- Upload a file
- Handle application state on the client side
- Navigate and display application feedback

## ⏳ Loading & Error States

- Skeleton loading animations
- Loading state while fetching jobs
- Error handling for failed API requests
- User-friendly feedback during data loading

## 📱 Responsive Interface

- Responsive layout for different screen sizes
- Mobile navigation drawer
- Mobile-friendly filtering
- Responsive job cards and application pages

## 🔔 User Experience

- Toast notifications
- Skeleton loading effects
- Responsive filtering navigation
- Clear navigation between job listings, saved jobs, job details, and application pages

---

## 🛠️ Tech Stack

| Technology           | Usage                           |
| -------------------- | ------------------------------- |
| ⚛️ React             | Frontend application            |
| 📘 TypeScript        | Type-safe development           |
| ⚡ Vite              | Development and build tool      |
| 🔄 React Router      | Application routing             |
| 🧠 React Context API | Shared application state        |
| 🎨 CSS               | Styling and responsive UI       |
| 🌐 Remotive API      | Remote job data                 |
| 💾 LocalStorage      | Persistent saved jobs and theme |

---

## 🧠 React Concepts Practiced

This project is also designed as a practical learning project for React.

Concepts implemented include:

- Functional Components
- JSX / TSX
- Props
- State Management
- `useState`
- `useEffect`
- `useContext`
- Context API
- Custom Hooks
- Event Handling
- Conditional Rendering
- Forms and User Input
- Array Methods
- Component Reusability
- Parent-Child Communication
- Shared State
- React Router
- API Fetching
- Loading States
- Error States
- Client-Side Pagination
- `localStorage`
- Responsive UI

---

## 🏗️ Application Architecture

The application follows a component-based React architecture.

```text
                         React Job Finder
                                │
              ┌─────────────────┴─────────────────┐
              │                                   │
        React Context                         React Router
              │                                   │
       ┌──────┴──────┐                    Application Pages
       │             │                           │
   JobContext   ThemeContext              ┌──────┴────────┐
       │             │                    │               │
 Saved Jobs      Dark Mode              Home        Job Details
       │                                    │               │
 localStorage                          Job Listings    Apply Job
                                             │
                                      Search / Filters
                                             │
                                         Pagination
                                             │
                                         Saved Jobs
```

---

## 📁 Project Structure

The project is organized into reusable sections:

```text
job-finder/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   └── ...
│   │
│   ├── context/
│   │   ├── JobContext.tsx
│   │   └── ThemeContext.tsx
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── JobDetails.tsx
│   │   ├── SavedJobs.tsx
│   │   ├── ApplyJob.tsx
│   │   └── NotFound.tsx
│   │
│   ├── Screenshots
│   │
│   ├── services/
│   │   └── ...
│   │
│   ├── types/
│   │   └── ...
│   │
│   ├── App.tsx
│   └── index.css
│
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

> The structure may evolve as new functionality is added.

---

## 🔄 Current Data Flow

The application fetches job data from the Remotive Public API and manages application-level state through React.

```text
Remotive Public API
        │
        ▼
   Job API Service
        │
        ▼
   React Application
        │
        ▼
    Job Context
        │
        ├── Job Listings
        ├── Saved Jobs
        └── Theme
```

### Job Search Flow

```text
Enter Search Term
        ↓
Apply Search Filter
        ↓
Apply Location Filter
        ↓
Apply Sorting
        ↓
Paginate Results
        ↓
Display Job Cards
```

### Saved Job Flow

```text
Select Job
      ↓
Click Save
      ↓
JobContext
      ↓
Check for Duplicate
      ↓
Update Saved Jobs State
      ↓
Save to localStorage
      ↓
Saved Job Available After Refresh
```

---

## 🚀 Getting Started

## Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

## Installation

Clone the repository:

```bash
git clone https://github.com/abdullahsaeed5626-dot/react-job-finder.git
```

Move into the project directory:

```bash
cd react-job-finder
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

---

## 🧪 Development

During development, the application can be tested by:

1. Browsing available jobs.
2. Searching for jobs.
3. Filtering jobs by location type.
4. Sorting job listings.
5. Opening job details.
6. Saving a job.
7. Opening the Saved Jobs page.
8. Removing a saved job.
9. Refreshing the page to verify saved jobs remain available.
10. Switching between light and dark mode.
11. Navigating through paginated results.
12. Opening the application form.
13. Filling out and submitting a simulated application.
14. Testing loading and error states.
15. Testing the responsive mobile interface.

---

## 📄 Job Details

The application provides a dedicated job details page where users can view information about a selected job.

The job details flow is:

```text
Job Listing
     ↓
Select Job
     ↓
Job Details
     ↓
View Description
     ↓
Save Job / Apply
```

---

## 📝 Job Application

The application includes a simulated application workflow.

Example structure:

```text
╔══════════════════════════════════╗
║          JOB APPLICATION         ║
╠══════════════════════════════════╣
║ Name: Applicant Name             ║
║ Email: applicant@email.com       ║
║ Resume: Uploaded File             ║
║                                  ║
║        Submit Application        ║
╚══════════════════════════════════╝
```

The application handles the form on the frontend and provides routing feedback after submission.

---

## 💾 Saved Jobs

Saved jobs are managed through the `JobContext`.

When a user saves a job:

```text
Select Job
    ↓
Save Job
    ↓
Check Existing Jobs
    ↓
Add Job to savedJobs
    ↓
Update localStorage
```

When the application starts again, saved jobs are loaded from `localStorage`.

This allows saved jobs to remain available after refreshing the browser.

---

## 🎯 Project Objectives

The main objectives of this project are to:

- Build a practical real-world React application.
- Develop a reusable component structure.
- Practice React state management.
- Understand and implement Context API.
- Work with APIs and asynchronous data.
- Practice search and filtering.
- Implement client-side pagination.
- Manage persistent data using `localStorage`.
- Build a complete job browsing workflow.
- Create a simulated application workflow.
- Develop a responsive frontend interface.
- Build a portfolio-ready React project.

---

## 🔮 Future Roadmap

The current version focuses on frontend functionality. Future versions can introduce:

## Backend

- REST API
- Server-side job management
- Database integration
- Persistent application records
- User accounts

## Authentication

- User login
- User registration
- Profile management
- Saved jobs linked to user accounts

## Jobs

- More job APIs
- Advanced job filters
- Salary filtering
- Experience-level filtering
- Job category filtering
- Date-based job filtering

## Applications

- Persistent application records
- Application status tracking
- Application history
- Resume management

## Admin

- Job management dashboard
- Add and edit job listings
- Application management
- User management

## Deployment

- Production build
- Hosting
- Custom domain
- Backend deployment
- Database hosting

---

## 📈 Project Development Stages

Stage 1  
React Fundamentals  
↓  
Stage 2  
Job Finder UI  
↓  
Stage 3  
API Integration  
↓  
Stage 4  
Search & Filtering  
↓  
Stage 5  
Saved Jobs  
↓  
Stage 6  
Pagination  
↓  
Stage 7  
Job Application  
↓  
Stage 8  
Responsive UI & UX Refinement  
↓  
Stage 9  
Persistent Backend Storage  
↓  
Stage 10  
Authentication + Production Backend

---

## 💡 Why This Project?

Job searching involves several interconnected operations such as fetching job data, searching, filtering, saving jobs, viewing job details, and applying for positions.

Building this application provides practical experience in handling those relationships inside a React application instead of creating isolated demo components.

For example:

```text
Job API
   ↕
Job Listings
   ↕
Search & Filters
   ↕
Saved Jobs
   ↕
Job Details
   ↕
Application
```

This makes the project a practical demonstration of frontend application architecture, API handling, state management, routing, and responsive UI development.

---

## Live links & gitHub Repository

![Live Demo](https://react-job-finder-five.vercel.app/)

![GitHub Repo](https://github.com/abdullahsaeed5626-dot/react-job-finder.git)

---

## 👨‍💻 Author

## Abdullah Saeed

Frontend Developer / React Learner

This project is part of my practical journey toward building real-world React applications and developing a professional frontend portfolio.

---

## 📄 License

This project is created for **educational, learning, and portfolio purposes**.
