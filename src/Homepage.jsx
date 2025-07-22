import React from 'react';
import { Link } from 'react-router-dom';

function Homepage({ username, handleLogin, setUsername, setPassword, error, transition, loggedIn, setLoggedIn, password }) {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-0">
      {!loggedIn && (
        <div className={`w-full max-w-md bg-white p-8 rounded-xl shadow-lg transition-opacity duration-500 ${transition ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className="text-3xl font-bold text-center text-purple-700 mb-2">Sarilaya</h1>
          <p className="text-center text-gray-600 mb-6">Sign in to your account</p>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1 text-left">Username:</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
                  </svg>
                </span>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  placeholder="Enter your username"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 text-left">Password:</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a4 4 0 00-4 4v4H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zm-2 4a2 2 0 114 0v4H8V6zm8 6v6H4v-6h12z" />
                  </svg>
                </span>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700  transition-colors  cursor-pointer"
            >
              Login to your account
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
            </div>
          </form>
        </div>
      )}
      {loggedIn && (
        <div className="w-full h-screen overflow-y-auto bg-white p-8 rounded-none shadow-none">
          <section className="space-y-6 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-gray-800">Home</h3>
              <p className="text-gray-600"></p>
            </div>
            <div className="w-full overflow-y-auto bg-white p-0 rounded-none shadow-none" >
              <a href="homepage">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">About</h3>
              <p className="text-gray-600">
                SARILAYA, meaning “gender freedom” in Tagalog, is a socialist eco-feminist organization started by women who participated in the movement against the dictatorship of Marcos in the 1990s in the Philippines. They have a diverse group of members including women, girls, and gender non-conforming people from both urban and rural areas across the Philippines whose key programs centre the holistic well-being of their communities and Mother Earth.
                They are working to feed, heal, house, and educate their communities to build grassroots self-reliance. Additionally, They have set up food and herbal medicine gardens, and community health centres, and trained several women healers who provide alternative health care including mental health support for their communities.
              </p>
            </div>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Contact</h3>
              <p className="text-gray-600">SARILAYA, meaning “gender freedom” in Tagalog, is a socialist eco-feminist organization started by women who participated in the movement against the dictatorship of Marcos in the 1990s in the Philippines. They have a diverse group of members including women, girls, and gender non-conforming people from both urban and rural areas across the Philippines whose key programs centre the holistic well-being of their communities and Mother Earth.
                They are working to feed, heal, house, and educate their communities to build grassroots self-reliance. Additionally, They have set up food and herbal medicine gardens, and community health centres, and trained several women healers who provide alternative health care including mental health support for their communities.
              </p>
            </div>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Advocacies & Events</h3>
              <p className="text-gray-600">Learn more about Sarilaya's advocacies and upcoming events here.</p>
            </div>
            <Link to="/advocacies" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800">
              Go to Advocacies Page
            </Link>
            <button
              onClick={() => setLoggedIn(false)}
              className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
            >
              Log out
            </button>
          </section>
        </div>
      )}
    </main>
  );
}

export default Homepage; 