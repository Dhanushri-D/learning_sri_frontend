import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const auth = localStorage.getItem("auth");
  const role = localStorage.getItem("role");
  if (auth !== "true" || role !== "admin") {
    return <Navigate to="/login" replace />;
  }
  if (auth !== "true") {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default ProtectedRoute;