import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Advocacies from './Advocacies.jsx';
import Homepage from './Homepage.jsx';
import img1 from './assets/1.jpeg';
import img2 from './assets/2.jpeg';
import img3 from './assets/3.jpeg';
// import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [transition, setTransition] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setTransition(true);
      setTimeout(() => {
        setLoggedIn(true);
        setTransition(false);
        setError('');
      }, 600);
    } else {
      setError('Please enter both username and password.');
    }
  };

  return (
    <Router>
      {/* Navbar always visible */}
      <header className="w-full bg-white shadow fixed top-0 left-0 z-10 px-3 flex items-center justify-center h-16">
        <div className="flex w-full max-w-6xl items-center justify-between px-6">
          <div className="text-purple-700 font-black text-2xl tracking-widest">Sarilaya</div>
          <nav className="flex gap-6 pr-4">
            <Link to="/homepage" className="text-purple-700 font-semibold hover:text-purple-800 transition">Home</Link>
            <Link to="/about" className="text-purple-700 font-semibold hover:text-purple-800 transition">About</Link>
            <Link to="/contact" className="text-purple-700 font-semibold hover:text-purple-800 transition">Contact</Link>
            <Link to="/advocacies" className="text-purple-700 font-semibold hover:text-purple-800 transition">Advocacies & Events</Link>
          </nav>
        </div>
      </header>
      <div className="h-16" /> {/* Spacer for navbar */}
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              username={username}
              setUsername={setUsername}
              setPassword={setPassword}
              password={password}
              error={error}
              handleLogin={handleLogin}
              transition={transition}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        <Route
          path="/homepage"
          element={
            <Homepage
              username={username}
              setUsername={setUsername}
              setPassword={setPassword}
              password={password}
              error={error}
              handleLogin={handleLogin}
              transition={transition}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        <Route
          path="/advocacies"
          element={
            <Advocacies
              loggedIn={loggedIn}
              username={username}
              setLoggedIn={setLoggedIn}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
