import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import FoodItem from "./FoodItem";

const FoodList = ({ foodData, setFoodId }) => {
  if (!foodData || foodData.length === 0) {
    return (
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" color="textSecondary">
          No food items available.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {foodData.map((food) => (
          <Grid item xs={12} sm={10} md={4} lg={20} key={food.id}>
            <FoodItem food={food} setFoodId={setFoodId} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FoodList;
