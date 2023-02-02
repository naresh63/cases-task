import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons/faInfo";
import {
  Box,
  AppBar,
  IconButton,
  Typography,
  Button,
  FormControl,
  Select,
  InputBase,
  MenuItem,
  TextField,
  InputAdornment,
  Input,
  Fab,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  styled,
  InputLabel,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Tab,
  Tabs,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import Radio from "@mui/material/Radio";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import DialogComp from "./DialogComp";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoComp from "./InfoComp";
import EditDialog from "./EditDialog";

function CasesComp() {
  const [age, setAge] = React.useState("");
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openInfo, setOpenInfo] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  // for open  add  dialog
  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };
 // close add  dialog
 const handleCloseAdd = () => {
  setOpenAdd(false);
};

// for edit dialog
const handleClickOpenEdit = () => {
  setOpenEdit(true);
};
// close   edit dialog
const handleCloseEdit = () => {
setOpenEdit(false);
};


// info dialog 
const handleClickOpenInfo = () => {
  setOpenInfo(true);
};


  const [tabIndex, setTabIndex] = React.useState(0);
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  let casesAll = JSON.parse(localStorage.getItem("cases")); 
  console.log('all cases //',casesAll)


  const tableData =  []; // tabledata is row

  const rows = [];
  let radioChecked ;
if(casesAll){
   radioChecked = [rows[0].id];
  //  tableData= caseAll;
   rows= casesAll;
}
  

  const [selectionModel, setSelectionModel] = React.useState(radioChecked);
  radioChecked = selectionModel;
  console.log('---',radioChecked);

  if(casesAll){
    const selectedRow = rows.filter((item) => {
      return item.id === selectionModel[0];
    });
    console.log('***',selectedRow);
  }

   const columns =[];
  if(casesAll){


    columns = [
    {
      field: "radiobutton",
      headerName: "",
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <Radio 
        
        // checked={radioChecked[0] === params.id} value={params.id}
         />
      ),
    },
    {
      field: "id",
      headerName: "#",
      width: 150,
    },
    {
      field: "caseNumber",
      headerName: "Case Number",
      width: 150,
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
    },
    {
      field: "product",
      headerName: "Product",
      width: 150,
    },
    {
      field: "subStatus",
      headerName: "Sub Status",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "technician",
      headerName: "Technician",
      width: 150,
    },
    {
      field: "technicianStatus",
      headerName: "Technician Status",
      width: 150,
    },
    {
      field: "technician date time",
      headerName: "Technician date time",
      width: 150,
    },
    {
      field: "account name",
      headerName: "Account Name",
      width: 150,
    },
    {
      field: "contact name",
      headerName: "Contact Name",
      width: 150,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      width: 150,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
    },
    {
      field: "opened date",
      headerName: "Opened Date",
      width: 150,
    },
    {
      field: "package",
      headerName: "Package",
      width: 150,
    },
    {
      field: "billable",
      headerName: "Billable",
      width: 150,
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 150,
    }, 
    {
      field: "priority",
      headerName: "Priority",
      width: 150,
    },
    {
      field: "agent",
      headerName: "Agent",
      width: 150,
    },
    {
      field: "remarks",
      headerName: "Remarks",
      width: 150,
    },
    {
      field: "comments",
      headerName: "Comments",
      width: 150,
    }
  ];
}

  return (
    <div>
      <Stack
        direction="row"
        sx={{
          background: "#0C67DB",
          px: 5,
          color: "white",
          py: 1,
          fontSize: 10,
        }}
      >
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            RW
          </Typography>
        </Box>

        <Box>
          <Button color="inherit">
            <LogoutIcon />
          </Button>
        </Box>
      </Stack>

      <Stack direction="row" sx={{ p: 0.5 }}>
        <Box>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">All Case Type</MenuItem>
              <MenuItem value="Booking">Booking</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">All Status</MenuItem>
              <MenuItem value="New">New</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">All Cases</MenuItem>
              <MenuItem value="Open Cases"> Open Cases</MenuItem>
              <MenuItem value="Closed Cases"> Closed Cases</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <TextField
              size="small"
              placeholder="Search "
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {" "}
                    <SearchIcon />{" "}
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Button
              variant="outlined"
              sx={{
                border: "none",
                boxShadow: 1,
                color: "black",
              }}
            >
              Search
            </Button>
          </FormControl>
        </Box>

        <Box>
          <FormControl sx={{ m: 1 }} size="small">
            <Fab
              size="small"
              color="primary"
              aria-label="add"
              onClick={handleClickOpenAdd}
            >
              <AddIcon />
            </Fab>
          </FormControl>

          <DialogComp openAdd={openAdd} addHandleClose={()=>setOpenAdd(false)} />
        </Box>

        <Box>
          <FormControl sx={{ m: 1 }} size="small">
            <Fab
              size="small"
              color="primary"
              aria-label="edit"
              onClick={handleClickOpenEdit}
            >
              <BorderColorOutlinedIcon />
            </Fab>
            {/* <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> */}
          </FormControl>
          <EditDialog openEdit={openEdit} editHandleClose={()=>setOpenEdit(false)} 
          // selectedRow={selectedRow}
          />
          {/* <DialogComp openAdd={openAdd} addHandleClose={()=>setOpenAdd(false)} /> */}
        </Box>

        <Box>
          <FormControl sx={{ m: 1 }} size="small">
            <Fab
              size="small"
              color="primary"
              aria-label="edit"
              // onClick={handleClickOpen}
            >
              <DeleteIcon />
            </Fab>
            {/* <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> */}
          </FormControl>
        </Box>

        <Box>
          <FormControl sx={{ m: 1 }} size="small">
            <Fab
              size="small"
              color="primary"
              aria-label="edit"
              onClick={handleClickOpenInfo}
            >
              i
              {/* <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/></svg>
              </div> */}
            </Fab>
            {/* <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> */}
          </FormControl>
          
        </Box>
        <InfoComp
        open={openInfo} 
        handleClose={()=>setOpenInfo(false)}
        />
      </Stack>

      <Box>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            selectionModel={selectionModel}
            onSelectionModelChange={(newSelectionModel) => {
              setSelectionModel(newSelectionModel);
            }}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </Box>
    </div>
  );
}
export default CasesComp;
