import { Navigate } from "react-router-dom";
const UserProtectedRoute = ({ children }) => {
  const auth = localStorage.getItem("auth");
  const role = localStorage.getItem("role");
  if (auth !== "true" || role !== "user") {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default UserProtectedRoute;