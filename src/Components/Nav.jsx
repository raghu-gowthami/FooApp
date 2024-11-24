import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material"; // Import Material-UI components

import App1 from "./App1";
import EducatorMap from "./EducatorMap";
import UseReducerDemo from "./UseReducerDemo";
import PageNotFound from "./PageNotFound";
import DumProfile from "./DumProfile";
import DumSettings from "./DumSettings";
import Product from "./Product";

const Nav = () => {
  return (
    <BrowserRouter>
      <div>
        {/* AppBar for navigation */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My Application
            </Typography>
            <Button color="inherit" component="a" href="/" sx={{ marginRight: 2 }}>
              Home
            </Button>
            <Button color="inherit" component="a" href="/App" sx={{ marginRight: 2 }}>
              App
            </Button>
            <Button color="inherit" component="a" href="/EdMap" sx={{ marginRight: 2 }}>
              Educator
            </Button>
            <Button color="inherit" component="a" href="/Product/" sx={{ marginRight: 2 }}>
              Products
            </Button>
          </Toolbar>
        </AppBar>

        {/* Main Content Area */}
        <Container sx={{ marginTop: 4 }}>
          <Routes>
            <Route path="/" element={<UseReducerDemo />} />
            <Route path="/Product/" element={<Product />} />
            <Route path="/Product/:id" element={<Product />} />
            <Route path="/App" element={<App1 />} />
            <Route path="/EdMap" element={<EducatorMap />}>
              <Route path="Profile" element={<DumProfile />} />
              <Route path="Settings" element={<DumSettings />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default Nav;
