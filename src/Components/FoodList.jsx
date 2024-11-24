import React from "react";
import { Grid, Box } from "@mui/material";
import FoodItem from "./FoodItem";

const FoodList = ({ foodData, setFoodId }) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {foodData?.map((food) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={food.id}>
            <FoodItem setFoodId={setFoodId} food={food} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FoodList;
