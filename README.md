# 👋 Welcome to Hack for Infinity – Infinity 2K26!

Hey team! 🎉 Welcome to your dedicated repository for the **Infinity 2K26 Hackathon** organized by the **IEEE Computer Society OUCE Student Chapter**.

This is your team's space to build, commit, and submit your project. Organizers have access to this repo and will review your **commit history** to verify the project was built during hackathon hours — so make sure you're committing regularly throughout the day!

> ⏰ **The repository will be locked at 5:30 PM. No pushes will be accepted after that.**

---

## 📅 Quick Schedule

| Time | Activity |
|------|----------|
| 8:30 – 9:00 AM | Reporting & registration |
| 9:00 – 10:00 AM | Opening briefing & kickoff |
| 10:00 AM – 1:00 PM | Development session |
| 1:00 – 2:00 PM | Lunch break & **Round 1 evaluation** |
| 2:00 – 5:30 PM | Development session & final prep |
| 5:30 – 6:00 PM | **Final judging & presentations** |

---

## ✅ Things to Remember

- Commit your code **frequently** throughout the day
- AI tools (ChatGPT, Copilot, etc.) are allowed — but be ready to **explain your code** to the judges
- Pre-built or plagiarised projects will be **disqualified**
- Bring your laptops, chargers, and any hardware you need
- Include a **project document** in this repo (see required sections below)

---

## 📋 Judging Criteria

Projects will be evaluated on:
- 💡 Innovation and originality
- 🛠️ Technical implementation
- 🌍 Practical impact and usefulness
- 🎨 User experience and design
- 🗣️ Clarity of presentation and explanation

---

---

# 📁 Fill This In — Your Project README

> ✏️ *Replace everything below this line with your own project details*

---

## 🏷️ Project Title

AccessScholar-Building an Inlusive Web

## 👥 Team Members

| Name | GitHub Username |
|------|----------------|
| Nikitha Jadhav  | NikithaJadhav |
| Lekhana Hansi  |  lekhana-hansi       |

## ❓ Problem Statement

BUILD THE ACCESSIBLE WEB 


## 🏗️ System Architecture / Design

*Describe or diagram how your system is structured. What are the main components and how do they interact?*
AccessScholar consists of three main components:
Accessible Web Platform (Frontend)
A WCAG-inspired accessible website that lists scholarships and provides built-in accessibility tools such as high contrast mode, dyslexia-friendly fonts, keyboard navigation, and text-to-speech.
Backend API (Node.js)
A lightweight backend server that provides scholarship data through REST APIs. This allows the frontend to dynamically load scholarship listings.
Chrome Accessibility Extension
A browser extension that injects accessibility tools into existing scholarship websites. This allows users to enable features like high contrast and text-to-speech even on websites that are not originally accessible.


Architecture Flow------
User → AccessScholar Website
Website → Requests scholarship data from Backend API
Backend → Sends scholarship data (JSON)
User → Chrome Extension → Injects accessibility tools into other websites


## 🛠️ Technologies Used

*List the languages, frameworks, libraries, APIs, tools, etc. you used.*
Frontend
HTML5 (Semantic HTML)
CSS3
JavaScript
Web Speech API (Text-to-Speech)
Backend
Node.js
Express.js
Browser Extension
Chrome Extension Manifest v3
JavaScript
Chrome Scripting API
Tools
VS Code
Git & GitHub
GitHub Pages
Google Lighthouse (Accessibility testing)

## ⭐ Key Features

*What are the main features of your project?*
We Have added  Some of the Accessibility Key Features like
1.High Constrast Mode
2.Dyslexia Mode
3.Font Size slider
4.Keyboard Only navigation
5.Voice navigation 
6.Highlight Links
7.Text-to-speech reading
8.Accessible Layout with Semantic HTML



## ⚙️ How It Works

*Explain how your solution works, end to end. Walk through the main flow.*
The user opens the AccessScholar website.
The platform displays scholarships fetched from the backend API.
The user can enable accessibility features using the Accessibility Panel, including:
High contrast mode
Dyslexia-friendly fonts
Text-to-speech
Font size adjustment
The Chrome extension allows users to apply accessibility improvements to external scholarship websites, ensuring accessibility across the web.
This approach ensures that students with disabilities can comfortably browse scholarship opportunities.


## 🚀 How to Run

*Step-by-step instructions for running your project locally.*


```bash
# example
git clone <repo-url>
cd <project-folder>
# add your setup/run commands here
```

1️⃣ Open the Project
Open VS Code
Click File → Open Folder
Select your accessscholar folder
2️⃣ Open Terminal
At the top menu click:
Terminal → New Terminal
A terminal window will open at the bottom.
3️⃣ Start Backend Server
Step 1 — Go to backend folder

cd backend
Step 2 — Create node project (only first time)

npm init -y
Step 3 — Install Express

npm install express
Step 4 — Start server

node server.js
You should see:
Copy code

Server running on port 3000
Test in browser:


http://localhost:3000/api/scholarships
4️⃣ Run Frontend Website
Step 1 — Go to frontend folder in VS Code


frontend
Step 2 — Right click index.html
Step 3 — Click Open with Live Server
Your site will open in browser.
5️⃣ Run Chrome Extension
Step 1 — Open Chrome
Type in address bar:


chrome://extensions
Step 2 — Turn on Developer Mode
Step 3 — Click Load Unpacked
Step 4 — Select this folder:


accessscholar/extension
Extension will appear in Chrome toolbar.
6️⃣ After Running — Commit
Run these commands in terminal:

git add .
git commit -m "Working prototype running"
git push
7️⃣ When Your Friend Adds Code
Before coding always run:

git pull
Then you will see their changes
