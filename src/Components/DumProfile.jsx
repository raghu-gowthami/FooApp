import React from "react";
import { useLocation } from "react-router";
import { Typography, Box, Paper } from "@mui/material";

const DumProfile = () => {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <Box sx={{ padding: 4 }}>
      <Paper sx={{ padding: 4, textAlign: 'center', maxWidth: 600, margin: 'auto' }}>
        <Typography variant="h4" color="primary" gutterBottom>
          DumProfile
        </Typography>
        {username ? (
          <Typography variant="h6" color="textSecondary">
            Welcome, <strong>{username}</strong>!
          </Typography>
        ) : (
          <Typography variant="h6" color="error">
            No username provided.
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default DumProfile;
