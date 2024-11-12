import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Grid from './components/Grid';
import BookingForm from './components/BookingForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

const App = () => {
  const [bookings, setBookings] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const addBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };

  const handleBookingClick = (booking) => {
    console.log('Booking details:', booking);
  };

  return (
    <div className="App container mt-5">
      <nav className="mb-4">
        {location.pathname === '/' && (
          <Link to="/book" className="btn btn-primary">Book</Link>
        )}
        {location.pathname === '/book' && (
          <button onClick={() => navigate('/')} className="btn btn-secondary">
            ← Back
          </button>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Grid bookings={bookings} onBookingClick={handleBookingClick} />} />
        <Route path="/book" element={<BookingForm addBooking={addBooking} bookings={bookings} />} />
      </Routes>
    </div>
  );
};

export default App;

