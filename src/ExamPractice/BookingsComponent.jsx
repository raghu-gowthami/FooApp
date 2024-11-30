import React, { useState } from "react";
import { validation } from "./Validation";
import axios from "axios";

let url = "http://localhost:4000/booking";

const BookingsComponent = () => {
  const [state, setState] = useState({
    buffetName: "",
    bookedOn: "",
    emailId: "",
    plateCount: "",
  });

  const [formErrors, setFormErrors] = useState({
    emailIdError: "",
    plateCountError: "",
    buffetNameError: "",
    bookedOnError: "",
  });

  const [mandatory, setMandatory] = useState(false);
  const [success, setSuccess] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [valid, setValid] = useState(false);

  const [messages] = useState({
    EMAILID_ERROR: "Please enter a valid email",
    PLATE_COUNT_ERROR: "Plate count should be one or more",
    BUFFET_NAME_ERROR: "Please select a buffet type",
    BOOKED_ON_ERROR: "Booking date should be after today's date",
    ERROR: "Something went wrong",
    MANDATORY: "Enter all the form fields",
  });

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    // Check if all fields are entered
    const { buffetName, bookedOn, emailId, plateCount } = state;
    if (!buffetName || !bookedOn || !emailId || !plateCount) {
      setMandatory(true);
      return;
    }

    // Reset mandatory field
    setMandatory(false);

    // Make Axios call
    try {
      const response = await axios.post(url, state);
      const bookingId = response.data.id; // Assuming API returns `id` in response
      setSuccess(`Booking is successful with id: ${bookingId}`);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(messages.ERROR);
      setSuccess("");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update state
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Validate the field
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errors = { ...formErrors };

    switch (name) {
      case "buffetName":
        errors.buffetNameError = validation.validateBuffet(value)
          ? ""
          : messages.BUFFET_NAME_ERROR;
        break;

      case "emailId":
        errors.emailIdError = validation.validateEmail(value)
          ? ""
          : messages.EMAILID_ERROR;
        break;

      case "plateCount":
        errors.plateCountError = validation.validatePlateCount(value)
          ? ""
          : messages.PLATE_COUNT_ERROR;
        break;

      case "bookedOn":
        errors.bookedOnError = validation.validateDate(value)
          ? ""
          : messages.BOOKED_ON_ERROR;
        break;

      default:
        break;
    }

    setFormErrors(errors);

    // Check if form is valid
    const isValid = Object.values(errors).every((err) => err === "");
    setValid(isValid);
  };

  return (
    <React.Fragment>
      <div className="CreateBooking">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <br />
            <div className="card">
              <div className="card-header bg-custom">
                <h4>Book Your Buffet</h4>
              </div>
              <div className="card-body">
                <form
                  className="form"
                  data-testid="buffet-form"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  {/* Success or Error Messages */}
                  {success && (
                    <div data-testid="success" className="text-success">
                      {success}
                    </div>
                  )}
                  {errorMessage && (
                    <div data-testid="error" className="text-danger">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label>Buffet Name</label>
                    <select
                      name="buffetName"
                      value={state.buffetName}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="" disabled>
                        Select a Buffet
                      </option>
                      <option value="South Indian Festie">South Indian Festie</option>
                      <option value="North Indian Festie">North Indian Festie</option>
                      <option value="Chinese Festie">Chinese Festie</option>
                    </select>
                    <span className="text-danger">
                      {formErrors.buffetNameError}
                    </span>
                  </div>

                  <div className="form-group">
                    <label>Email Id</label>
                    <input
                      type="email"
                      name="emailId"
                      value={state.emailId}
                      className="form-control"
                      placeholder="Enter email id"
                      onChange={handleChange}
                    />
                    <span className="text-danger">
                      {formErrors.emailIdError}
                    </span>
                  </div>

                  <div className="form-group">
                    <label>Plate Count</label>
                    <input
                      type="number"
                      name="plateCount"
                      className="form-control"
                      value={state.plateCount}
                      onChange={handleChange}
                      required
                    />
                    <span className="text-danger">
                      {formErrors.plateCountError}
                    </span>
                  </div>

                  <div className="form-group">
                    <label>Booking Date</label>
                    <input
                      type="date"
                      name="bookedOn"
                      className="form-control"
                      value={state.bookedOn}
                      onChange={handleChange}
                    />
                    <span className="text-danger">
                      {formErrors.bookedOnError}
                    </span>
                  </div>

                  <br />

                  <button
                    data-testid="button"
                    type="submit"
                    name="active"
                    className="btn btn-primary"
                    disabled={!valid}
                  >
                    Book Buffet
                  </button>

                  {mandatory && (
                    <div data-testid="mandatory" className="text-danger">
                      {messages.MANDATORY}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookingsComponent;
