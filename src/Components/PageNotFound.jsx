import React from "react";
import { Link } from "react-router"; // Use react-router-dom if using version 6+
import { Button, Typography, Box } from "@mui/material";

const PageNotFound = () => {
  return (
    <Box 
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" color="error" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="h5" paragraph>
        Sorry, the page you're looking for does not exist.
      </Typography>
      <Button 
        component={Link} 
        to="/" 
        variant="contained" 
        color="primary"
      >
        Go Back to Home
      </Button>
    </Box>
  );
};

export default PageNotFound;
