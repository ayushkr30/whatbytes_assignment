# 🧠 WhatBytes Assignment

A responsive, interactive **Dashboard** built with **Next.js**, **TypeScript**, and **Tailwind CSS** for tracking and updating user test scores, percentiles, and insights visually.

Deployed Link
[https://whatbytes-assignment-delta.vercel.app/]

---

## 📸 Preview

> A modern dashboard interface for administrators to view, analyze, and update skill test results using dynamic graphs and visuals.

---

## 🚀 Features

### 📊 Dashboard Includes:

- **QuickStats** – View live stats including rank, percentile, and score.
- **TestCard** – Provides test overview and option to update stats.
- **UpdateForm Modal** – Popup form to update rank, percentile, and score with inline validation and toast confirmation.
- **QuestionAnalysis** – Dynamically updating score tracker with Pie Chart using `recharts`.
- **ComparisonGraph** – Line graph using `TinyLineChart` from `recharts` to show percentile vs average comparison.
- **SyllabusAnalysis** – Displays syllabus breakdown (placeholder for further development).
- **Left MenuBar** – Fixed sidebar with responsive icons and section navigation.
- **Navbar** – Simple top navigation bar.

---

## 🧱 Tech Stack

- **Next.js 14 (App Router)**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Recharts** (Charts and Graphs)
- **React-Hot-Toast** (Notifications)
- **Responsive Layouts** (using `flex`, `media queries`)

---


## 🛠 Functionality Breakdown

### ✅ Update Form
- Opens in modal popup.
- Has inline field validation.
- Updates state and reflects immediately in all connected components (QuickStats, PieChart, Line Graph).
- Shows toast confirmation on successful update.

### 📈 Dynamic Charts
- **Pie Chart** in `QuestionAnalysis` reflects updated score.
- **Line Chart** in `ComparisonGraph` reflects updated percentile vs average comparison.
- Both charts animate on data change.

### 🧭 Menubar
- Contains Dashboard, Skill Test, and Internship.
- Responsive: only icons shown on small screens.
- Fixed to the left side across all pages.
- Hover effects for interactivity.

---

## 🧪 Run Locally

```bash
git clone https://github.com/your-username/your-repo-name.git
cd dashboard
npm install
npm run dev


