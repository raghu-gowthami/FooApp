import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const UseDemo = () => {

    const [state, setState] = useState({ username: "", Password: "", email: "" });
    const [formError, setFormError] = useState({ username: "", Password: "", email: "" });
    // const [valid, setValid] = useState(false);
    const [mandatory, setMandatory] = useState(false);
    const [success, setSuccess] = useState("");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
        if (e.target.name === "username") {
            let value = e.target.value;
            if (value.length < 4) {
                setFormError({ ...formError, username: "user name must be 5 characters" });
                // setValid(false);
            }
            else {
                setFormError({ ...formError, username: "" });
                // setValid(true);
            }
        }
        if (e.target.name === "Password") {
            let value = e.target.value;
            if (!passwordRegex.test(value)) {
                setFormError({
                    ...formError,
                    Password: "Password must be at least 8 characters long, with 1 uppercase, 1 lowercase, 1 number, and 1 special character."
                });
                // setValid(false);
            } else {
                setFormError({ ...formError, Password: "" });
            }
        }
        if (e.target.name === "email") {
            let value = e.target.value;
            if (!emailRegex.test(value)) {
                setFormError({
                    ...formError,
                    email: "Please enter a valid email address."
                });
            } else {
                setFormError({ ...formError, email: "" });
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.username === "" || state.Password === "" || state.email === "") {
            setMandatory(true);
        }
        else {
            setMandatory(false);
            setSuccess("Hey, User....Registered sucessfully");
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Typography textAlign='center' variant='h3' color='red'>Login</Typography>
                <TextField
                    label="User Name"
                    name='username'
                    value={state.username}
                    onChange={handleChange}
                    error={formError.username !== ""}
                    helperText={formError.username}
                /> <br /> <br />
                <TextField
                    label="Password"
                    name='Password'
                    value={state.Password}
                    onChange={handleChange}
                    error={formError.Password !== ""}
                    helperText={formError.Password}
                /> <br /> <br />
                <TextField
                    label="E-Mail"
                    name='email'
                    value={state.email}
                    onChange={handleChange}
                    error={formError.email !== ""}
                    helperText={formError.email}
                /> <br /> <br />

                <Button variant='contained' type='submit'>Register</Button>

                {mandatory && <Typography color='error'>Please fill all the fields</Typography>}
                {success && <Typography color='primary'>{success}</Typography>}
            </form>
        </Container>
    )
}

export default UseDemo
