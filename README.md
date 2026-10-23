# Third Space

**Find your people: discover local groups and events built around shared interests**

[![Live Demo](https://img.shields.io/badge/Live-third--space--six.vercel.app-111827?style=for-the-badge)](https://third-space-six.vercel.app)
![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

## About

A "third space" is somewhere that isn't home or work, where people build community: a run club, a chess meetup, a knitting circle, a concert. **Third Space** is a social web app for finding and creating those groups and events, so it's easier to meet people offline.

##  Features

- **Accounts:** sign up and log in with Firebase Authentication
- **Event feed:** browse community events loaded from Cloud Firestore, with search in the header
- **Create events:** post a new group or event
- **Group pages:** each group has its own page, plus a savings goal tracker with a progress bar for group outings (saving contributions to Firestore is on the roadmap)
- **Profiles:** a profile page showing the groups and activities you're into

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Auth | Firebase Authentication |
| Database | Cloud Firestore |
| Hosting | Vercel |

##  Project Structure

```text
src/app/
├── Home/            # Event feed
├── Groups/[id]/     # Individual group page + savings goal
├── createGroup/     # Create a new event or group
├── Profile/         # User profile
├── Login/ Signup/   # Authentication screens
└── useAuth.ts       # Auth state hook
Firebase.config.ts   # Firebase app, Auth, and Firestore setup
firestore.tsx        # Firestore data helpers
```


##  Running Locally

```bash
git clone https://github.com/Sa1vad0r/third-space.git
cd third-space
npm install
npm run dev        # http://localhost:3000
```

##  Team

- [Sa1vad0r](https://github.com/Sa1vad0r)
- [sebasn20](https://github.com/sebasn20)
- [Fatboy-2300](https://github.com/Fatboy-2300)
