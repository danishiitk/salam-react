import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Input from "../components/Forms/Input";
import Button from "../components/Forms/Button";
import { useAuth } from "../utils/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [newUserData, setNewUserData] = useState({ email: "", password: "" });
  const { login, addAllowedUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (login(username, password)) {
      const from = location.state?.from || "/";
      navigate(from, { replace: true });
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          Welcome Back!
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-center">{error}</p>}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
          <Button
            onClick={() => setShowAddUserForm(!showAddUserForm)}
            className="w-full bg-gray-500 hover:bg-gray-600"
          >
            {showAddUserForm ? 'Hide Add User Form' : 'Add New User'}
          </Button>
          
          {showAddUserForm && (
            <>
              <Input
                label="New User Email"
                type="email"
                id="newUserEmail"
                name="newUserEmail"
                placeholder="Enter email to allow"
                value={newUserData.email}
                onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
              />
              <Input
                label="Password"
                type="password"
                id="newUserPassword"
                name="newUserPassword"
                placeholder="Enter password"
                value={newUserData.password}
                onChange={(e) => setNewUserData({ ...newUserData, password: e.target.value })}
              />
              <Button
                onClick={() => {
                  if (newUserData.email && newUserData.password) {
                    if (addAllowedUser(newUserData.email, newUserData.password)) {
                      alert(`User ${newUserData.email} added successfully!`);
                      setNewUserData({ email: "", password: "" });
                      setShowAddUserForm(false);
                    } else {
                      alert(`User ${newUserData.email} already exists.`);
                    }
                  } else {
                    alert("Please enter both email and password.");
                  }
                }}
                className="w-full bg-green-500 hover:bg-green-600"
              >
                Add User
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
