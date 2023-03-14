import React, { useEffect, useState } from "react";
import { Select, Typography } from "@mui/material";
import { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { SummaryTable } from './components/SummaryTable';
import { ShipmentsClass } from "./types/api_types";
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';


import logo from './logo.svg';
import './App.css';

import {BASE_API_URL, GET_DEFAULT_HEADERS} from "./globals";

function App() {
  const [shipperIDList, setShipperIDList] = useState<any[]>([]);
  const [currShipperID, setCurrShipperID] = useState<string>("");
  const [valueSID, setValueSID] = useState<string>("");
  const [shipmentsLs, setShipmentsLs] = useState<ShipmentsClass[]>([]);
  const [apiKey, setApiKey] = useState<string>("");

  const getApiKey = async () => {
    const res = await fetch("../../api/apiKey", {
      method: "GET"
    })
  
    const json = await res.json();
  
    setApiKey(json);
  };
  
  getApiKey();
  
  const idLs = async () => {
    console.log("Overhere:", apiKey);

    const res = await fetch(BASE_API_URL + "/allID", {
      method: "GET",
      headers: GET_DEFAULT_HEADERS(apiKey)
    })

    const json = await res.json();

    setShipperIDList(json.allID);
    return;
  };

  const idShipments = async () => {
    const res = await fetch(BASE_API_URL + `/shipments/shipperid/${valueSID}`, {
      method: "GET",
      headers: GET_DEFAULT_HEADERS(apiKey)
    })

    const json = await res.json();

    setShipmentsLs(json);
    return;
  };

  useEffect(() => {
    idLs();

    if(valueSID){
      idShipments();
    }

  }, [currShipperID]);

  const handleChange = (event: SelectChangeEvent) => {
    const shipperID = event.target.value;
    setValueSID(shipperID);

    // Store value selected, so selection box will display it
    setCurrShipperID(shipperID);
  };

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
            <Select fullWidth={true} value={valueSID} label="Class" onChange={handleChange}>
              {/* You'll need to place some code here to generate the list of items in the selection */}
              {shipperIDList.map(data => (<MenuItem key={data} value={data}>{data}</MenuItem>))}
            </Select>
          </FormControl>
        </Grid>

        <Grid  item={true}xs = {12} md={12} margin="1em" >
          <div>
            <SummaryTable rows={shipmentsLs} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}


export default App;
