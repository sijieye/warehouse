import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from "react";


const columns: GridColDef[] = [
  { field: 'Date', headerName: 'Date', width: 260 },
  { field: 'WarehouseID', headerName: 'WarehouseID', width: 320 },
  { field: 'ShippingPO', headerName: 'ShippingPO', width: 320 },
  { field: 'ShipmentID', headerName: 'ShipmentID', width: 260 },
  { field: 'BoxesRcvd', headerName: 'BoxesRcvd', width: 260 },
];


/**
 * This is the component where you should write the code for displaying the
 * the table of grades.
 *
 * You might need to change the signature of this function.
 *
 */
export const SummaryTable = ({rows}: {rows: any[]}) => {
  const [pgSize, setPgSize] = useState<number>(5);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        getRowId={(row) => row.ShipmentID}
        columns={columns}
        pageSize={pgSize}
        rowsPerPageOptions={[5, 10, 15]}
        onPageSizeChange={(newPageSize: number) => {setPgSize(newPageSize)}}
      />
    </div>
  );
};
