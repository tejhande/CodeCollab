import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import Login from './components/Login';
import Header from './components/Header';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/user', {credentials: "include"});
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Header user={user} />
      <Routes>
        <Route
          path="/"
          element={user ? <Home user={user} /> : <Login />}
        />
        <Route
          path="/documents/:id"
          element={user ? <EditorPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;