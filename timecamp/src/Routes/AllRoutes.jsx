import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Pricing from "./Pricing";
import Automatic from "../Pages/Features/Automatic"
import Feature from "../Pages/Features/Features";
import Invoicing from "../Pages/Features/Invoicing";
import Productivity from "../Pages/Features/Productivity";
import Reporting from "../Pages/Features/Reporting";
import Timesheet from "../Pages/Features/Timesheet";
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"
import TimeSheet from "../Pages/User_Dashboard/TimeSheet";
import Projects from "../Pages/User_Dashboard/Projects";
import PrivateRouter from "./PrivateRouter";
import Users from "../Pages/User_Dashboard/Users";
import GoogleCalender from "../Pages/Integrations/GoogleCalender/GoogleCalender";
import AllIntegrations from "../Pages/Integrations/AllIntegrations/AllIntegrations";
import TrelloTimeTracking from "../Pages/Integrations/TrelloTimeTracking/TrelloTimeTracking";
import Billing from "../Pages/Features/Billing";
import Timeoff from "../Pages/Features/Timeoff";
import Blog from "../Pages/Blog/Blog";
import BlogPage from "../Pages/Blog/BlogPage";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Automatic" element={<Automatic />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/invoicing" element={<Invoicing />} />
        <Route path="/productivity" element={<Productivity />} />
        <Route path="/reporting" element={<Reporting />} />
        <Route path="/timesheet" element={<Timesheet />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/timeoff" element={<Timeoff />} />
        <Route path="/auth/login" element={<Login/>} />
        <Route path="/auth/signup" element={<Signup/>} />
        <Route path="/dashboard/timesheet" element={<PrivateRouter> <TimeSheet/></PrivateRouter>} />
        <Route path="/dashboard/projects" element={<PrivateRouter> <Projects/></PrivateRouter>} />
        <Route path="/dashboard/users" element={<PrivateRouter> <Users/></PrivateRouter>} />
        <Route path="/trello" element={<TrelloTimeTracking/>} />
        <Route path="/googleCalender" element={<GoogleCalender />} />
        <Route path="/allIntegrations" element={<AllIntegrations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
