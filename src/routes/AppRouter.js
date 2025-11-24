import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from '../modules/admin/pages/Dashboard';
import CustomerDashboard from '../modules/customer/pages/Dashboard';
import SurveyorDashboard from '../modules/surveyor/pages/Dashboard';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <ProtectedRoute path="/admin" component={AdminDashboard} />
                <ProtectedRoute path="/customer" component={CustomerDashboard} />
                <ProtectedRoute path="/surveyor" component={SurveyorDashboard} />
                <Route path="/" exact component={() => <div>Welcome to the Insurance Claim Management System</div>} />
            </Switch>
        </Router>
    );
};

export default AppRouter;

// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import PoliciesPage from '../modules/public/PoliciesPage';
// import Register from '../modules/customer/pages/Register';
// import ApplyPolicy from '../modules/customer/pages/ApplyPolicy';
// import AdminDashboard from '../modules/admin/pages/Dashboard';
// import SurveyorDashboard from '../modules/surveyor/pages/AssessClaim';

// export default function AppRouter() {
//   return (
//     <>
//       <nav style={{ marginBottom: 16 }}>
//         <Link to="/">Policies</Link> | <Link to="/register">Register</Link> | <Link to="/apply">Apply</Link> | <Link to="/admin">Admin</Link> | <Link to="/surveyor">Surveyor</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<PoliciesPage />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/apply" element={<ApplyPolicy />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/surveyor" element={<SurveyorDashboard />} />
//       </Routes>
//     </>
//   );
// }