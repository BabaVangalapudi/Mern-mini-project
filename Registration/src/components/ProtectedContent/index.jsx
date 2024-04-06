import React, { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedContent = () => {
  const token = localStorage.getItem("username");

  if (token) {
    return (
      <div>
        <h1>Baba</h1>
        <Outlet />
      </div>
    );
  }
  return <Navigate to="/login" />;
};

export default ProtectedContent;
