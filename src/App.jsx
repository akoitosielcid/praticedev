import { useState } from 'react'
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
    <div>
      {/* Only show navbar after login */}
      {loggedIn && (
        <header className="w-full bg-white shadow fixed top-0 left-0 z-10 px-3 flex items-center justify-center h-16">
          <div className="text-purple-700 font-black text-4xl tracking-widest">Sarilaya</div>
          <div className="flex-1 text-center text-gray-500 font-medium">Welcome, {username}!</div>
          <nav className="flex gap-6 pr-4">
            <a href="Homepage" className="text-purple-700 font-semibold hover:text-purple-800 transition"  >Home</a>
            <a href="#about" className="text-purple-700 font-semibold hover:text-purple-800 transition">About</a>
            <a href="#contact" className="text-purple-700 font-semibold hover:text-purple-800 transition">Contact</a>
            <a href="#advocacies" className="text-purple-700 font-semibold hover:text-purple-800 transition">Advocacies & Events</a>
          </nav>
        </header>
      )}
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-0">
  {!loggedIn && (
    <div className={`w-full max-w-md bg-white p-8 rounded-xl shadow-lg transition-opacity duration-500 ${transition ? 'opacity-0' : 'opacity-100'}`}>
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-2">Sarilaya</h1>
      <p className="text-center text-gray-600 mb-6">Sign in to your account</p>
      <form onSubmit={handleLogin} className="space-y-5">
        <div>
        <label
           htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1 text-left">
      Username:
</label>
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
        <label
           htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1 text-left">
    Password:
</label>
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
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
      </form>
    </div>
  )}
  {loggedIn && (
  <div class="w-full h-screen overflow-y-auto bg-white p-8 rounded-none shadow-none">
  <section class="space-y-6 max-w-4xl mx-auto">
        
    <div>
      <h3 class="text-xl font-bold text-gray-800">Home</h3>
      <p class="text-gray-600"> 
      </p>
    </div>
    
<div class="w-full overflow-y-auto bg-white p-0 rounded-none shadow-none" >
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
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
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
    <div>
      <h3 className="text-xl font-bold text-gray-800">Contact</h3>
      <p className="text-gray-600">  SARILAYA, meaning “gender freedom” in Tagalog, is a socialist eco-feminist organization started by women who participated in the movement against the dictatorship of Marcos in the 1990s in the Philippines. They have a diverse group of members including women, girls, and gender non-conforming people from both urban and rural areas across the Philippines whose key programs centre the holistic well-being of their communities and Mother Earth.

They are working to feed, heal, house, and educate their communities to build grassroots self-reliance. Additionally, They have set up food and herbal medicine gardens, and community health centres, and trained several women healers who provide alternative health care including mental health support for their communities.
</p>
    </div>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a> 
    <div>
      <h3 className="text-xl font-bold text-gray-800">Advocacies & Events</h3>
      <p className="text-gray-600">
        Learn more about Sarilaya's advocacies and upcoming events here.
      </p>
      
    </div>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
    
{/* 
<div id="default-carousel" class="relative w-full" data-carousel="slide">
   
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="C:\Users\ACER\cursor\praticedev\src\assets\1.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="C:\Users\ACER\cursor\praticedev\src\assets\2.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
  
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="C:\Users\ACER\cursor\praticedev\src\assets\3.jpeg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="C:\Users\ACER\cursor\praticedev\public\vite.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="C:\Users\ACER\cursor\praticedev\public\vite.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
   
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
   
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div> */}

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

    </div>
  );
}

export default App;
