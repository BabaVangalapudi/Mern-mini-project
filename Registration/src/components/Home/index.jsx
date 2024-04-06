import React from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import "../Register/index.css";

const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get("username");
  const token = localStorage.getItem("username");
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>
        Welcome{" "}
        <span style={{ color: "skyblue", textTransform: "capitalize" }}>
          {token}
        </span>
      </h1>
      <button
        onClick={() => {
          localStorage.removeItem("username");
          navigate("/login");
        }}
      >
        Logout{" "}
      </button>
    </div>
  );
};

export default Home;
