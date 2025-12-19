import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import ComplaintForm from './Pages/ComplaintForm';
import ComplaintDetails from './Pages/ComplaintDetails';
import Solution from './Pages/Solution';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import AdminDashboard from './Pages/AdminDashboard';
import AdminComplaints from './Pages/AdminComplaints';
import AdminComplaintDetails from './Pages/AdminComplaintDetails';
import AdminUsers from './Pages/AdminUsers';
import ProtectedRoute from './Pages/ProtectedRoute';
import UserProtectedRoute from './Pages/userProtectedRoute';

const routeVariables=createBrowserRouter([{
  path:"/",
  element:<App></App>,
  children:[
    {
      path:"/",
      element:<Home></Home>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/complaintForm",
      element:<UserProtectedRoute><ComplaintForm></ComplaintForm></UserProtectedRoute>
    },
    {
      path:"/complaintDetails/:complaintId",
      element:<ComplaintDetails></ComplaintDetails>
    },
    {
      path:"/solution/:complaintId",
      element:<Solution></Solution>
    },
    {
      path:"/profile",
      element:<Profile></Profile>
    },
    {
      path:"/aboutUs",
      element:<AboutUs></AboutUs>
    },
    {
      path:"/contactUs",
      element:<ContactUs></ContactUs>
    },
    {
      path:"/admin",
      element:<ProtectedRoute><AdminDashboard/></ProtectedRoute>
    },
    {
      path:"/admin/complaints",
      element:<AdminComplaints></AdminComplaints>
    },
    {
      path:"/admin/complaints/:id",
      element:<AdminComplaintDetails></AdminComplaintDetails>
    },
    {
      path:"/admin/users",
      element:<AdminUsers></AdminUsers>
    },
    {
      path:"*",
      element:<h1>Page not found</h1>
    }
  ]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routeVariables}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
