import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

let url = "http://localhost:4000/booking/";

const UpdateBookings = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [booking, setBooking] = useState({});
  const [buffetName, setBuffetName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [plateCount, setPlateCount] = useState("");
  const [bookedOn, setBookedOn] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [messages] = useState({
    ERROR: "Something went wrong",
    MANDATORY: "All the fields are required",
  });

  console.log(id);

  // Fetch booking details when component is mounted
  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`${url}${id}`);
        console.log(response);

        const bookingData = response.data;
        console.log(bookingData);

        setBooking(bookingData);
        setBuffetName(bookingData.buffetName);
        setEmailId(bookingData.emailId);
        setPlateCount(bookingData.plateCount);
        setBookedOn(bookingData.bookedOn);
      } catch (error) {
        setErrorMessage(messages.ERROR);
      }
    };

    fetchBooking();
  }, [id, messages.ERROR]);

  const update = async (e) => {
    e.preventDefault();

    if (!buffetName || !emailId || !plateCount || !bookedOn) {
      setErrorMessage(messages.MANDATORY);
      return;
    }

    const updatedBooking = {
      buffetName,
      emailId,
      plateCount,
      bookedOn,
      id: booking.id,
    };

    try {
      await axios.put(`${url}${id}`, updatedBooking);
      setSuccessMessage("Booking updated successfully!");
      setErrorMessage("");
      // Navigate back to view bookings with updated booking ID
      navigate(`/viewBookings`);
    } catch (error) {
      setErrorMessage(messages.ERROR);
    }
  };

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card mt-4">
          <div className="card-header bg-custom">
            <h4>Update Booking</h4>
          </div>
          <div className="card-body">
            <form className="form" onSubmit={update}>
              <div className="form-group">
                <label>Buffet Name</label>
                <select
                  name="buffetName"
                  className="form-control"
                  value={buffetName}
                  onChange={(e) => setBuffetName(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select Buffet
                  </option>
                  <option value="South Indian Festival">
                    South Indian Festival
                  </option>
                  <option value="North Indian Festival">
                    North Indian Festival
                  </option>
                  <option value="Chinese Festival">Chinese Festival</option>
                </select>
              </div>

              <div className="form-group mt-2">
                <label>Email Id</label>
                <input
                  type="email"
                  name="emailId"
                  className="form-control"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  required
                />
              </div>

              <div className="form-group mt-2">
                <label>Plate Count</label>
                <input
                  type="number"
                  name="plateCount"
                  className="form-control"
                  value={plateCount}
                  onChange={(e) => setPlateCount(e.target.value)}
                  min="1"
                  required
                />
              </div>

              <div className="form-group mt-2">
                <label>Booking Date</label>
                <input
                  type="date"
                  name="bookedOn"
                  className="form-control"
                  value={bookedOn}
                  onChange={(e) => setBookedOn(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary mt-3">
                Update Booking
              </button>

              <p className="text-success mt-3">{successMessage}</p>

              <p className="text-danger mt-3">{errorMessage}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBookings;
