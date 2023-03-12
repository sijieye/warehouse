import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import { Select, Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Grid container spacing={2} style={{ padding: "2rem" }}>
        <Grid item={true} xs={12} md={12} container alignItems="center" justifyContent="center">
            <Typography variant="h3" gutterBottom>
              Summary Report
            </Typography>
        </Grid>

        <Grid item={true} xs={12} md={12}>
          <Typography variant="h5" gutterBottom display="inline-block" margin="10px">
                Select a shipment ID
          </Typography>
          <FormControl style={{minWidth: "20em"}}>
            <Select fullWidth={true} >
            </Select>
          </FormControl>
        </Grid>

        <Grid  item={true}xs = {12} md={12} margin="1em" >
          <div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
