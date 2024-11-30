import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router"; // For navigation

let url = "http://localhost:4000/booking/";

const ViewBookings = (props) => {
  const [state, setState] = useState({
    bookingId: "",
    bookingData: null,
    infoMessage: "",
  });

  const [messages] = useState({
    INFO: "The booking has been deleted! Please refresh the page.",
    NOT_FOUND: "Reservation for booking id: ",
  });

  const navigate = useNavigate();

  const onChange = (event) => {
    // Update bookingId state
    const { value } = event.target;
    setState((prevState) => ({
      ...prevState,
      bookingId: value,
    }));
  };

  const handleActions = async (action) => {
    const { bookingId, bookingData } = state;

    if (action === "onDelete" && bookingId) {
      try {
        // DELETE request
        await axios.delete(`${url}${bookingId}`);

        // After successful deletion, reset the booking data and show the success message
        setState((prevState) => ({
          ...prevState,
          infoMessage: `Reservation for booking id: ${bookingId} has been deleted.`,
          bookingData: null, // Clear booking data
        }));
      } catch (error) {
        // If there is an error in deletion, show a failure message
        setState((prevState) => ({
          ...prevState,
          infoMessage: `${messages.NOT_FOUND}${bookingId} is not found.`,
          bookingData: null, // Clear booking data
        }));
      }
    } else if (action === "isUpdate" && bookingData) {
      navigate(`/updateBookings/${bookingId}`, { state: bookingData });
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const { bookingId } = state;

    if (!bookingId) {
      setState((prevState) => ({
        ...prevState,
        infoMessage: `${messages.NOT_FOUND}${bookingId} is not found.`,
        bookingData: null,
      }));
      return;
    }

    try {
      // GET request
      const response = await axios.get(`${url}${bookingId}`);
      setState((prevState) => ({
        ...prevState,
        bookingData: response.data,
        infoMessage: "", // Clear infoMessage on successful fetch
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        infoMessage: `${messages.NOT_FOUND}${bookingId} is not found.`,
        bookingData: null,
      }));
    }
  };

  const { bookingId, bookingData, infoMessage } = state;

  return (
    <div className="row">
      <div className="col-md-10 offset-md-1">
        <br />
        <div className="card">
          <div className="card-header bg-custom">
            <h4>View Booking</h4>
          </div>
          <div className="card-body view">
            <form
              className="form"
              data-testid="viewBooking.form"
              onSubmit={onSubmit}
            >
              <div className="form-group">
                <label>Booking Id</label>
                <input
                  type="text"
                  name="bookingId"
                  className="form-control"
                  placeholder="Enter Booking Id"
                  value={bookingId}
                  onChange={onChange}
                />
                <button
                  name="button"
                  className="btn btn-primary mt-2"
                  type="submit"
                >
                  Get Booking
                </button>
              </div>

              {bookingData && (
                <table className="table bordered mt-4">
                  <thead className="thead">
                    <tr>
                      <th>Booking Id</th>
                      <th>Buffet Name</th>
                      <th>Email Id</th>
                      <th>Plate Count</th>
                      <th>Booking Date</th>
                      <th>Action Items</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-testid="id">{bookingData.id}</td>
                      <td data-testid="buffetName">{bookingData.buffetName}</td>
                      <td data-testid="emailId">{bookingData.emailId}</td>
                      <td data-testid="placeCount">{bookingData.plateCount}</td>
                      <td data-testid="bookingOn">{bookingData.bookedOn}</td>
                      <td>
                        <button
                          className="btn btn-danger mt-2 ms-2"
                          data-testid="delete-button"
                          onClick={() => handleActions("onDelete")}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-success mt-2 ms-2"
                          data-testid="update-button"
                          onClick={() => handleActions("isUpdate")}
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}

              <p data-testid="message" className="text-info mt-2">
                {infoMessage}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBookings;
