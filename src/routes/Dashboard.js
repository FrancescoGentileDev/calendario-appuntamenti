import React from "react";
import Sidebar from "../components/sidebar";
import { Col, Row } from "react-bootstrap";
import AnimationRoutes from "../components/AnimationRoutes";
import { Grid } from "@mui/material";
export default function Dashboard() {
  return (
    <Grid container spacing={0}>
       <Grid xs={1}>
          <Sidebar />
       </Grid>
        <Grid xs={10} >
        <AnimationRoutes/>
        </Grid>
    </Grid>
  );
}
