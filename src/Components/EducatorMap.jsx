import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Link,
} from "@mui/material";
import { Outlet, Link as RouterLink } from "react-router";  // Correct import for `Link` and `Outlet`

var course = [
  {
    name: "Angular",
    educator: "Lucia",
  },
  {
    name: "ReactJS",
    educator: "Daniel",
  },
  {
    name: "Ajax",
    educator: "Paula",
  },
];

const EducatorMap = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Links to Profile and Settings */}
      <Box sx={{ display: "flex", justifyContent: "space-around", marginBottom: 2 }}>
        <RouterLink to="Profile" style={{ textDecoration: "none" }}>
          <Typography variant="body1" color="primary">Profile</Typography>
        </RouterLink>
        <RouterLink to="Settings" style={{ textDecoration: "none" }}>
          <Typography variant="body1" color="primary">Settings</Typography>
        </RouterLink>
      </Box>

      {/* Display Outlet for nested routes */}
      <Outlet />

      {/* Course Table */}
      <Typography variant="h5" color="primary" textAlign="center" sx={{ marginBottom: 2 }}>
        UI Course List
      </Typography>
      
      <TableContainer component={Paper}>
        <Table aria-label="course table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Educator</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {course.map((crs, index) => (
              <TableRow key={index}>
                <TableCell>{crs.name}</TableCell>
                <TableCell>{crs.educator}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EducatorMap;
