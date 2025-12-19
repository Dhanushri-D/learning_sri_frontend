import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../Styles/login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("auth", "true");
      localStorage.setItem("role", "admin");
      navigate("/admin");
      return;
    }
    if (email === "admin@gmail.com" && password !== "admin123") {
      alert("Invalid admin credentials");
      return;
    }
    if (email && password) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("role", "user");
      navigate("/complaintForm");
      return;
    }
  };
  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;