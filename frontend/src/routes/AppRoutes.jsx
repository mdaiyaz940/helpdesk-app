import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";
import UserLayout from "../layouts/UserLayout";
import Dashboard from "../pages/user/Dashboard";
import CreateTicket from "../pages/user/CreateTicket";
import ViewTickets from "../pages/user/ViewTickets";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Database from "../pages/admin/Database";
import OpsLayout from "../layouts/OpsLayout";
import TechLayout from "../layouts/TechLayout";
import TicketApproval from "../pages/ops/TicketApproval";
import Performance from "../pages/tech/Performance";
import TechDashboard from "../pages/tech/TechDashboard";
import OpsDashboard from "../pages/ops/OpsDasboard";
import UserProfile from "../pages/user/UserProfile";


const AppRoutes = () => {
    return (
        <Routes>
            {/* Auth routes */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* User routes */}
            <Route path="/user" element={<UserLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="create-ticket" element={<CreateTicket />} />
                <Route path="view-tickets" element={<ViewTickets />} />
                <Route path="profile" element={<UserProfile />} />
            </Route>
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="database" element={<Database />} />
            </Route>
            {/* Operation team routes */}
            <Route path="/ops" element={<OpsLayout />}>
                <Route path="dashboard" element={<OpsDashboard />} />
                <Route path="ticket-approval" element={<TicketApproval />} />
            </Route>
            {/* Technical Team Routes */}
            <Route path="/techsupport" element={<TechLayout />}>
                <Route path="dashboard" element={<TechDashboard />} />
                <Route path="performance" element={<Performance />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
