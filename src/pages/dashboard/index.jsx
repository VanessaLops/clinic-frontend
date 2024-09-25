import React from "react";
import { logout } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div>
      <h1>Bem-vindo ao Dashboard!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
