import React, { useState } from "react";
import { Container, Box, Typography, Grid } from "@mui/material"; // Import Material-UI components
import Search from "./Search";
import FoodList from "./FoodList";
import FoodDetails from "./FoodDetails";

const App1 = () => {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      {/* Title Section */}
      <Typography variant="h4" component="h1" gutterBottom textAlign="center">
        Food Finder App
      </Typography>

      {/* Search Bar */}
      <Box sx={{ marginBottom: 4 }}>
        <Search foodData={foodData} setFoodData={setFoodData} />
      </Box>

      {/* Main Content Section */}
      <Grid container spacing={4}>
        {/* Food Details */}
        <Grid item xs={12} md={8}>
          <Box sx={{ padding: 2, boxShadow: 2, borderRadius: 2 }}>
            <FoodDetails foodId={foodId} />
          </Box>
        </Grid>

        {/* Food List */}
        <Grid item xs={12} md={4}>
          <Box sx={{ padding: 2, boxShadow: 2, borderRadius: 2 }}>
            <FoodList setFoodId={setFoodId} foodData={foodData} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App1;
