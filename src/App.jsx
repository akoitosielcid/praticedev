import { useState } from 'react'
import './App.css'

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
    <div style={{backgroundColor: "green"}} >
      {/* Only show navbar after login */}
      {loggedIn && (
        <header className="navbar">
          <div className="navbar-title">Sarilaya</div>
          <div className="navbar-welcome">Welcome, {username}!</div>
          <nav className="navbar-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
      )}
      <main>
        {!loggedIn && (
          <div className={`login-container${transition ? ' fade-out' : ''}`}>
            <h1 className="sarilaya-heading big">Sarilaya</h1>
            <h3>Welcome to the Login Page</h3>
            <p>Sign in to your account</p>
            <form onSubmit={handleLogin} className="login-form">
              <div className="form-row">
                <label htmlFor="username" className="login-label">Username:</label>
                <div className="input-group">
                  <span className="input-icon">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z"/></svg>
                  </span>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="username"
                    className="login-input wide-input"
                    placeholder="Enter your username"
                  />
                </div>
              </div>
              <div className="form-row">
                <label htmlFor="password" className="login-label">Password:</label>
                <div className="input-group">
                  <span className="input-icon">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a4 4 0 00-4 4v4H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zm-2 4a2 2 0 114 0v4H8V6zm8 6v6H4v-6h12z"/></svg>
                  </span>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    className="login-input wide-input"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              {error && <div className="error">{error}</div>}
              <button type="submit" className="login-button">Login</button>
            </form>
          </div>
        )}
        {loggedIn && (
          <div className={`login-success fade-in`}>
            <section className="minimal-section">
              <div className="minimal-content">
                <section id="home">
                  <h3>Home</h3>
                  <p>This is a minimal homepage section.</p>
                </section>
                <section id="about">
                  <h3>About</h3>
                  <p>About section content goes here.</p>
                </section>
                <section id="contact">
                  <h3>Contact</h3>
                  <p>Contact section content goes here.</p>
                </section>
              </div>
              <button className="login-button" onClick={() => setLoggedIn(false)}>Log out</button>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
