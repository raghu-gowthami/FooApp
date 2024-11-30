import React from "react";
import BookingsComponent from "./BookingsComponent";
import ViewBookings from "./ViewBookings";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import UpdateBookings from "./UpdateBookings";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg p-2 navbar-dark bg-primary">
          <span className="navbar-brand">Floating Restaurant</span>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Book Buffet
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viewBookings">
                View Bookings
              </Link>
            </li>
          </ul>
        </nav>

        {/* Application Routes */}
        <Routes>
          <Route path="/" element={<BookingsComponent />} />
          <Route path="/viewBookings" element={<ViewBookings />} />
          <Route path="/updateBookings/:id" element={<UpdateBookings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
