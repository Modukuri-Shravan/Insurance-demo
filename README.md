# Insurance Claim Management System

This project is an Insurance Claim Management System built with React. It provides a platform for managing insurance claims with three main user roles: Admin, Customer, and Surveyor.

## Features

- **Admin Module**: 
  - Dashboard for managing claims and users.
  - View and manage all claims submitted by customers.
  
- **Customer Module**: 
  - Dashboard for customers to submit and track their claims.
  - Claim submission form for new claims.
  
- **Surveyor Module**: 
  - Dashboard for surveyors to review and report on claims.
  - Survey report generation for claims.

## Project Structure

```
insurance-claim-management
├── public
│   └── index.html
├── src
│   ├── index.js
│   ├── App.js
│   ├── routes
│   │   └── AppRouter.js
│   ├── components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ProtectedRoute.js
│   ├── modules
│   │   ├── admin
│   │   │   ├── pages
│   │   │   │   └── Dashboard.js
│   │   │   ├── components
│   │   │   │   └── ClaimList.js
│   │   │   └── services
│   │   │       └── adminApi.js
│   │   ├── customer
│   │   │   ├── pages
│   │   │   │   └── Dashboard.js
│   │   │   ├── components
│   │   │   │   └── ClaimForm.js
│   │   │   └── services
│   │   │       └── customerApi.js
│   │   └── surveyor
│   │       ├── pages
│   │       │   └── Dashboard.js
│   │       ├── components
│   │       │   └── SurveyReport.js
│   │       └── services
│   │           └── surveyorApi.js
│   ├── services
│   │   └── api.js
│   ├── hooks
│   │   └── useAuth.js
│   ├── contexts
│   │   └── AuthContext.js
│   ├── styles
│   │   └── main.css
│   └── utils
│       └── validators.js
├── package.json
├── .gitignore
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd insurance-claim-management
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.

## Project

- This is a small React app for an Insurance Claim Management System with three roles: Admin, Customer, Surveyor.
- Entry point: index.html → index.js → `App` → router `AppRouter`.
- Data & API: local mock JSON (db) + an axios wrapper `api`. The project can run a json-server mock API (see scripts in package.json).
- Auth: context `AuthContext` and hook `useAuth` protect routes via `ProtectedRoute`.
- Modules:
  - Admin: page `AdminDashboard`, list component `ClaimList`, API helpers `fetchClaims`, `approveClaim`, `rejectClaim`.
  - Customer: pages/components `Dashboard`, `Register`, `ApplyPolicy`, `ClaimForm`, API file `customerApi`.
  - Surveyor: pages/components `Dashboard`, `SurveyReport`, assessor page `AssessClaim.jsx`, API file `surveyorApi`.
- Utilities: validators `validateEmail`, `validatePhoneNumber`, ... and mock DB at db.json (note: script expects db.json at repo root — see note).
- UI: header/footer components `Header`, `Footer` and global styles main.css.

Key symbols (open files)
- `App`
- `AppRouter`
- `AuthContext`, `AuthProvider`
- `useAuth`
- `ProtectedRoute`
- `api`
- `validateEmail`
- `fetchClaims`
- `ClaimList`
- `AdminDashboard`
- `Customer Dashboard`
- `Register`
- `ApplyPolicy`
- `ClaimForm`
- `customerApi`
- `Surveyor Dashboard`
- `AssessClaim`
- `surveyorApi`

All workspace files (quick links)
- package.json
- README.md
- index.html
- PoliciesPage.jsx
- index.js
- App.js
- AppRouter.js
- Header.js
- Footer.js
- ProtectedRoute.js
- AuthContext.js
- useAuth.js
- api.js
- main.css
- validators.js
- db.json
- Dashboard.js
- ClaimList.js
- adminApi.js
- Dashboard.js
- Register.jsx
- Applyolicy.jsx
- ClaimForm.js
- customerApi.js
- Dashboard.js
- AssessClaim.jsx
- SurveyReport.js
- surveyorApi.js

How data flows (concise)
- Components call the axios wrapper `api` for REST calls.
- The mock server (json-server) serves data from a JSON file (intended db.json).
- Admin approves/rejects applications which create/modify claims via the API endpoints used in the admin page.
- Surveyor views assigned claims (see `AssessClaim.jsx`) and patches claim status/approvedAmount.
- Customer can register, apply for policies and submit claims via customer pages/components.

Run the project (dev + mock API)
- Start both the dev server and the mock API:
```sh
npm run start:all
```
- Or start them separately:
```sh
npm run mock-server
npm run dev
```
(See package.json scripts.)

Important note / small fix
- package.json's mock-server expects a db.json at repository root but your mock DB is at src/utils/db.json. Either move the file to project root or update the script. Example: update package.json mock-server script to point to src/utils/db.json.

Suggested package.json change:
```json
// ...existing code...
{
  "scripts": {
    "mock-server": "json-server --watch src/utils/db.json --port 4000",
    "dev": "vite",
    "start:all": "concurrently \"npm run mock-server\" \"npm run dev\""
  }
}
// ...existing code...
```

If you want, I can:
- update the package.json script for you, or
- move db.json to project root and update imports/paths.