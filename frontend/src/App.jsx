import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Views/Login";
import Profile from "./Views/Profile";
import Admin from "./Views/Admin";
import ResponsiveAppBar from "./components/AppBar";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (isLogged) {
      fetch("http://localhost:8000/users")
        .then(res => res.json())
        .then(data => setUsers(data));
    }
  }, [isLogged]);

  const login = async ({ username, password }) => {
    const res = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.login === true) {
      setIsLogged(true);
      setCurrentUser(data.user);
    }
    return data;
  };

  const logout = () => {
    setIsLogged(false);
    setCurrentUser(null);
  };

  const addUser = async ({ name, username, password }) => {
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, username, password }),
    });
    const data = await res.json();
    setUsers([...users, data.user]);
  };

  const delUser = async (id) => {
    await fetch(`http://localhost:8000/users/${id}`, { method: "DELETE" });
    setUsers(users.filter(u => u._id !== id));
  };

  return (
    <Router>
      {isLogged && <ResponsiveAppBar logout={logout} />}
      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route path="/profile" element={<Profile user={currentUser} />} />
        <Route path="/Admin" element={<Admin users={users} delUser={delUser} addUser={addUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
