import React, { useEffect, useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("pizza");

  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "0204c14dff754ef3aa132ceec277505a";

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchData();
  }, [query]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 3,
        width: "100%",
      }}
    >
      <TextField
        label="Search for Recipes"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ width: "80%", maxWidth: 400, marginBottom: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setQuery(query)}
        sx={{ width: "80%", maxWidth: 400 }}
      >
        Search
      </Button>
    </Box>
  );
};

export default Search;
