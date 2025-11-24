## Explanation
Elevator pitch (1–2 lines)
- Insurance Claim Management web app built with React + Vite. Supports three roles (Admin, Customer, Surveyor) with role-based pages for policy application, claim submission, assessment and approval workflow backed by a json-server mock API.

High-level architecture (say this quickly)
- Frontend: React (Vite) single-page app with route-based pages (Admin / Customer / Surveyor).
- API: axios wrapper + json-server mock DB for REST endpoints.
- Auth: Context-based auth with protected routes and a custom useAuth hook.
- UI: componentized pages (Header/Footer, dashboards, forms, lists), client-side validators, and global CSS.

How data flows (short)
- UI components call services (axios wrapper) → REST endpoints on json-server → update UI state. State is mostly component-local or provided via AuthContext; pages fetch data on mount (useEffect) and re-render on updates.

Key components to mention
- AuthContext + useAuth: manages login state and exposes role/user.
- ProtectedRoute: guards routes and enforces authentication (can be extended for role checks).
- Admin ClaimList & Dashboard: approve/reject claims via API.
- Customer pages: register, apply policy, and submit claims (forms with validators).
- Surveyor pages: view assigned claims and submit assessment reports.
- api.js: central axios instance (baseURL via env var recommended).

React features to highlight (with one-line context)
- Functional components: project uses modern functional components throughout.
- Hooks:
  - useState: local component state for forms, loading, errors.
  - useEffect: data fetching on mount and side-effect handling.
  - useContext: AuthContext to share auth state across the app.
  - Custom hooks: useAuth encapsulates auth logic and consumption.
- Routing: react-router for SPA routing and ProtectedRoute for guarded pages.
- Controlled forms & validation: form inputs implemented as controlled components with validators (email/phone).
- Component composition: reuse UI (Header/Footer, ClaimList, SurveyReport).
- Environment variables: baseURL via VITE_API_URL (recommended) for different environments.
- Error handling patterns: try/catch around API calls and loading/error UI states.
- (Optional) Code-splitting / lazy loading: mention if you add React.lazy + Suspense for large pages.

Security, UX and engineering talking points
- Role-based access enforcement (explain how to extend ProtectedRoute to check roles).
- Mockable backend using json-server for fast dev & demos.
- Client-side validation to reduce server errors; graceful error messages and loading states.
- Improvements you considered: move sensitive tokens to httpOnly cookies, add unit/integration tests, add pagination & optimistic updates, add request cancellation (AbortController) for cleanup.

Sample concise answers (use these verbatim if asked)
- “What problem does it solve?” — Lets customers apply policies and file claims; surveyors assess claims; admins approve/reject — all in one workflow to streamline claims processing.
- “Your role/contribution?” — Implemented React front-end, routing, auth context, APIs integration with json-server, form validations and dashboards for each role.
- “Biggest challenge?” — Designing secure role-based routing and consistent state across pages; solved with a central AuthContext and ProtectedRoute pattern.
- “How would you scale it?” — Introduce backend auth (JWT + refresh tokens), migrate json-server to real API, add pagination + server-side filtering, lazy-load large pages and memoize heavy lists.

Things you can demo quickly in interview
- Login as each role, navigate to role-specific dashboard.
- Show claim submission flow (customer -> surveyor -> admin).
- Show how switching VITE_API_URL points the app to another API (demonstrates env setup).
- Briefly open AuthContext and ProtectedRoute to explain how access is enforced.

----------------------------------------------------------

## Features

- "This is an Insurance Claim Management single‑page app built with React and Vite. It supports three roles — Customer, Surveyor, and Admin — and models the full claim workflow: customers register, apply for policies and file claims; surveyors assess assigned claims and submit reports; admins review and approve or reject claims. The frontend uses an axios wrapper to talk to a json‑server mock API during development. Authentication and role state are handled with an AuthContext and a custom useAuth hook; routes are guarded with a ProtectedRoute pattern. Components are modular: dashboards, reusable lists, and controlled forms with client‑side validators. Important engineering decisions: role‑based routing, centralized API config via env var, and lightweight mock backend for rapid demos. Next steps for production would be a real backend with secure tokens (httpOnly cookies), unit tests, and lazy loading for large pages. I can demo logging in as each role and the end‑to‑end claim flow."

One‑slide summary (bullet points)
- Project: Insurance Claim Management SPA (React + Vite)
- Roles: Customer, Surveyor, Admin — each with dedicated pages
- Key flows: policy application, claim submission, survey assessment, admin approval
- Architecture:
  - React functional components + hooks (useState, useEffect, useContext)
  - Custom hook: useAuth; AuthContext for global auth/role state
  - Routing: react‑router + ProtectedRoute for guarded pages
  - API: centralized axios instance + json‑server mock DB
- UX & quality:
  - Controlled forms with client‑side validators
  - Loading/error states recommended improvements
- Engineering talking points:
  - Role‑based access control pattern, env config for API URL, mockable backend for demos
  - Production improvements: secure auth (httpOnly cookies), tests, code‑splitting, request cancellation
- Demo suggestions: log in as each role, submit a claim, show survey report and admin approval status changes.
