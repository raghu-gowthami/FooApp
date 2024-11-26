import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Paper,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const FoodDetails = ({ foodId }) => {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "0204c14dff754ef3aa132ceec277505a";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId, URL]);  // Add URL to the dependency array

  return (
    <Box sx={{ padding: 4 }}>
      <Paper sx={{ padding: 4, textAlign: "center" }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Food Details
        </Typography>

        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <Typography variant="h5" color="textPrimary">
              {food.title}
            </Typography>
            <Box sx={{ marginTop: 2 }}>
              <img
                src={food.image}
                alt={food.title}
                style={{ maxWidth: "100%", borderRadius: "8px" }}
              />
            </Box>
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="body1" color="textSecondary">
                <strong>{food.readyInMinutes} Minutes</strong> |
                <strong> Serves {food.servings}</strong> |
                {food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
              </Typography>
            </Box>
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="h6" color="primary">
                Price: ${food.pricePerServing / 100} Per Serving
              </Typography>
            </Box>

            <Box sx={{ marginTop: 3 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Instructions
              </Typography>
              {food?.analyzedInstructions &&
              food.analyzedInstructions.length > 0 ? (
                <List>
                  {food.analyzedInstructions[0].steps.map((step, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={step.step} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body2" color="error">
                  No instructions available.
                </Typography>
              )}
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default FoodDetails;
