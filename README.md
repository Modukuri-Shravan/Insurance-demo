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