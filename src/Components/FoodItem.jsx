import React from "react";
import { Card, CardContent, CardMedia, Button, Typography, Box } from "@mui/material";

const FoodItem = ({ food, setFoodId }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: 2 }}>
      <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column' }}>
        {/* Ensure the image is displayed correctly */}
        <CardMedia
          component="img"
          height="200"
          image={food.image || "https://via.placeholder.com/200"} // Use a fallback placeholder image if food.image is undefined
          alt={food.title}
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          {/* Title of the food */}
          <Typography gutterBottom variant="h5" component="div">
            {food.title}
          </Typography>
          
          {/* View Recipe Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => setFoodId(food.id)}
            sx={{ marginTop: 'auto', marginBottom: 1 }}
          >
            View Recipe
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FoodItem;
