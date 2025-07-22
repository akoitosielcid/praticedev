import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import img1 from './assets/1.jpeg';
import img2 from './assets/2.jpeg';
import img3 from './assets/3.jpeg';

const images = [
  { src: img1, caption: 'Empowering Women in Communities' },
  { src: img2, caption: 'Grassroots Advocacy for Change' },
  { src: img3, caption: 'Sustainable Eco-Feminist Initiatives' },
];

function Advocacies({ loggedIn, username, setLoggedIn }) {
  const [current, setCurrent] = useState(0);

  if (!loggedIn) {
    return <Navigate to="/homepage" replace />;
  }

  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((current + 1) % images.length);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar is now in App.jsx */}
      <div className="h-16" /> {/* Spacer for navbar */}
      <main className="flex-1 flex flex-col items-center justify-center py-8 px-2">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">Advocacies & Events</h1>
        <div className="w-full max-w-2xl mx-auto">
          {/* Carousel */}
          <div className="relative rounded-lg overflow-hidden shadow-lg bg-white">
            <img
              src={images[current].src}
              alt={images[current].caption}
              className="w-full h-72 object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-lg font-semibold p-4 text-center">
              {images[current].caption}
            </div>
            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-purple-700 rounded-full p-2 shadow"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-purple-700 rounded-full p-2 shadow"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${current === idx ? 'bg-purple-700' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Body Content */}
        <div className="mt-10 max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-purple-700 mb-2">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Sarilaya is committed to empowering women, girls, and gender non-conforming people through grassroots advocacy, sustainable initiatives, and community-based programs. Our events and projects focus on holistic well-being, environmental sustainability, and social justice.
          </p>
          <h3 className="text-xl font-semibold text-purple-700 mb-1">Upcoming Events</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Community Herbal Medicine Workshop</li>
            <li>Eco-Feminist Leadership Training</li>
            <li>Grassroots Advocacy Forum</li>
          </ul>
        </div>
        <button
          onClick={() => setLoggedIn(false)}
          className="mt-8 px-6 py-2 bg-red-600 text-white font-bold rounded-lg shadow hover:bg-red-700 transition"
        >
          Log out
        </button>
      </main>
    </div>
  );
}

export default Advocacies; 