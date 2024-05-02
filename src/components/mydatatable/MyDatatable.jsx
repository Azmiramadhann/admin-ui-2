import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";




const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
];

const rows = [
  { id: 1, name: "Coffee"},
  { id: 2, name: "Orange Jus"},
  { id: 3, name: "Dessert"},
  { id: 4, name: "Spageti"},
  { id: 5, name: "Cookie"},
  { id: 6, name: "Mix Platter"},
  { id: 7, name: "Air Mineral"},
  { id: 8, name: "Chicken Katsu"},
  { id: 9, name: "Burger"},
  { id: 10, name: "Pizza"},
];

const actionColumn = [
 
];

const MyDatatable = () => {
  return (
    <div className="mydatatable">
      <div className="mydatatableTitle">
        All Data
        
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default MyDatatable;