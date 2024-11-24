import React from "react";
import { useParams } from "react-router";
import { Typography, Box, Paper } from "@mui/material";

const Product = () => {
  const { id } = useParams();

  return (
    <Box sx={{ padding: 4 }}>
      <Paper sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Product Details
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Showing products for the ID: <strong>{id}</strong>
        </Typography>
        <Typography variant="body1" color="textPrimary" sx={{ marginTop: 2 }}>
          You can display more details or actions related to the product here based on the provided ID.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Product;
