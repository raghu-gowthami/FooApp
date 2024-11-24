import React from "react";
import { Card, CardContent, CardMedia, Button, Typography, Box } from "@mui/material";

const FoodItem = ({ food, setFoodId }) => {
  return (
    <Box sx={{ margin: 2 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={food.image}
          alt={food.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {food.title}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => setFoodId(food.id)}
          >
            View Recipe
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FoodItem;
