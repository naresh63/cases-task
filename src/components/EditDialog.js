import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  styled,
  InputLabel,
  Checkbox,
  FormControlLabel,
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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Stack } from "@mui/system";

function EditDialog({ openEdit, editHandleClose }) {
    // console.log('///**',selectedRow)
    // console.log('++=',selectedRow[0].id)

    const initialValues = {
      id: 1,
    accountName: '',
    contactName: '',
    mobile: '',
    email: '',
    phone: '',
    address: '',
    pinCode: '',
    technician: '',
    priority: '',
    source: '',
    caseRemarks: '',
    invoiceNumber: '',
    billable: '',
    packageService: '',
    caseType: '',
    caseTitle: '',
    productCategory: '',
    product: '',
    brand: ' ',
    serialNumber: '',
    model: '',
    warrenty: '',
    problem: '',
    reason: '',
    productsOtherDetails: '',
    agent: '',
    visibility: '',
    quantity:"1",
    dueDate:'',
    };
  // const initialValues = {
  //   id: selectedRow[0].id,
  //   accountName: selectedRow[0].accountName,
  //   contactName:selectedRow[0].contactName,
  //   mobile: selectedRow[0].mobile,
  //   email: selectedRow[0].email,
  //   phone: selectedRow[0].phone,
  //   address: selectedRow[0].address,
  //   pinCode: selectedRow[0].pinCode,
  //   technician: selectedRow[0].technician,
  //   priority: selectedRow[0].priority,
  //   source: selectedRow[0].source,
  //   caseRemarks: selectedRow[0].caseRemarks,
  //   invoiceNumber: selectedRow[0].invoiceNumber,
  //   billable: selectedRow[0].billable,
  //   packageService: selectedRow[0].packageService,
  //   caseType: selectedRow[0].caseType,
  //   caseTitle: selectedRow[0].caseTitle,
  //   productCategory: selectedRow[0].productCategory,
  //   product: selectedRow[0].product,
  //   brand: selectedRow[0].brand,
  //   serialNumber: selectedRow[0].serialNumber,
  //   model: selectedRow[0].model,
  //   warrenty: selectedRow[0].warrenty,
  //   problem: selectedRow[0].problem,
  //   reason: selectedRow[0].reason,
  //   productsOtherDetails: selectedRow[0].productsOtherDetails,
  //   agent: selectedRow[0].agent,
  //   visibility: selectedRow[0].visibility,
  //   quantity: selectedRow[0].quantity,
  //   dueDate:""
  // };




  const [values, setValues] = useState(initialValues);
  const [caseslist, setCaseslist] = useState([]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // let casesAll = JSON.parse(localStorage.getItem("cases"));
  // console.log('all cases //',casesAll)

  // save add button handle
  function saveHandle() {
    setCaseslist([...caseslist,values]);
    console.log("cases=>", caseslist);
    localStorage.setItem("cases", JSON.stringify(caseslist));
    editHandleClose();
    setValues(initialValues);
  }

  return (
    <div>
      <Dialog
        open={openEdit}
        onClose={editHandleClose}
        fullScreen={true}
        fullWidth={true}
        PaperProps={{ sx: { width: "900px", height: "95%" } }}
      >
        <DialogTitle>
          <Stack
            direction="row"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>New Case</Box>
            <Box>
              <IconButton>
                <CloseIcon onClick={editHandleClose} />
              </IconButton>
            </Box>
          </Stack>
        </DialogTitle>
        <DialogContent>
          <Stack direction="row" sx={{ p: 0.5 }}>
            <Box sx={{ width: "50%", mr: 2, mt: 1 }}>
              <TextField
                label="Account Name"
                size="small"
                sx={{ width: "100%" }}
                value={values.accountName}
                onChange={handleInputChange}
                name="accountName"
              />
            </Box>
            <Box sx={{ width: "50%" }}>
              <FormControl sx={{ width: "100%", mt: 1 }} size="small">
                <InputLabel id="demo-simple-select-helper-label">
                  Case Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Case Status"
                  value={values.caseStatus}
                  onChange={handleInputChange}
                  name="caseStatus"
                >
                  <MenuItem value="">
                    <em>Select Case Status</em>
                  </MenuItem>
                  <MenuItem value="New">New</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>

          <Stack direction="row" sx={{ p: 0.5, mt: 1 }}>
            <Box sx={{ width: "50%", mr: 2 }}>
              <TextField
                label="Contact Name"
                size="small"
                sx={{ width: "100%" }}
                value={values.contactName}
                onChange={handleInputChange}
                name="contactName"
              />
            </Box>
            <Box sx={{ width: "50%" }}>
              <FormControl sx={{ width: "100%" }} size="small">
                <TextField
                  label="Case Type"
                  size="small"
                  sx={{ width: "100%" }}
                  value={values.caseType}
                  onChange={handleInputChange}
                  name="caseType"
                />
              </FormControl>
            </Box>
          </Stack>

          <Stack direction="row" sx={{ p: 0.5 }}>
            <Box sx={{ width: "50%", mr: 2, mt: 1 }}>
              <TextField
                label="Mobile"
                size="small"
                sx={{ width: "100%" }}
                value={values.mobile}
                onChange={handleInputChange}
                name="mobile"
              />
            </Box>
            <Box sx={{ width: "50%" }}>
              <FormControl sx={{ width: "100%", mt: 1 }} size="small">
                <TextField
                  label="Case Title"
                  size="small"
                  sx={{ width: "100%" }}
                  value={values.caseTitle}
                  onChange={handleInputChange}
                  name="caseTitle"
                />
              </FormControl>
            </Box>
          </Stack>

          <Stack direction="row" sx={{ p: 0.5 }}>
            <Box sx={{ width: "50%", mr: 2, mt: 1 }}>
              <TextField
                label="Email"
                size="small"
                sx={{ width: "100%" }}
                value={values.email}
                onChange={handleInputChange}
                name="email"
              />
            </Box>
            <Box sx={{ width: "50%" }}>
              <FormControl sx={{ width: "100%", mt: 1 }} size="small">
                <InputLabel id="demo-simple-select-helper-label">
                  Priority
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Priority"
                  value={values.priority}
                  onChange={handleInputChange}
                  name="priority"
                >
                  <MenuItem value=" normal "> Normal </MenuItem>
                  <MenuItem value=" high "> High </MenuItem>
                  <MenuItem value=" emergency "> Emergencyv </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>

          <Stack direction="row" sx={{ p: 0.5 }}>
            <Box sx={{ width: "50%", mr: 2, mt: 1 }}>
              <TextField
                label="Phone"
                size="small"
                sx={{ width: "100%" }}
                value={values.phone}
                onChange={handleInputChange}
                name="phone"
              />
            </Box>
            <Box sx={{ width: "50%" }}>
              <FormControl sx={{ width: "100%", mt: 1 }} size="small">
                <InputLabel id="source-label">Source</InputLabel>
                <Select
                  labelId="source-label"
                  id="source-label"
                  label="Source"
                  value={values.source}
                  onChange={handleInputChange}
                  name="source"
                  defaultValue=" "
                >
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="selectSource">Select Source</MenuItem>
                  <MenuItem value="partner">Partner</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>

          <Stack direction="row" sx={{ p: 0.5, mt: 1 }}>
            <Box sx={{ width: "50%", mr: 2 }}>
              <TextField
                label="Address"
                size="small"
                sx={{ width: "100%" }}
                value={values.address}
                onChange={handleInputChange}
                name="address"
              />
            </Box>
            <Box sx={{ width: "50%" }}>
              <FormControl sx={{ width: "100%" }} size="small">
                <TextField
                  label="Case Remarks"
                  size="small"
                  sx={{ width: "100%" }}
                  value={values.caseRemarks}
                  onChange={handleInputChange}
                  name="caseRemarks"
                />
              </FormControl>
            </Box>
          </Stack>

          <Stack direction="row" sx={{ p: 0.5, mt: 1 }}>
            <Box sx={{ width: "50%", mr: 2 }}>
              <TextField
                label="Pin Code"
                size="small"
                sx={{ width: "100%" }}
                value={values.pinCode}
                onChange={handleInputChange}
                name="pinCode"
              />
            </Box>
            <Box sx={{ width: "50%", mr: 2 }}>
              <FormControlLabel
                value="end"
                control={
                  <Checkbox
                    value={values.billable}
                    onChange={handleInputChange}
                    name="billable"
                  />
                }
                label="Billable"
                labelPlacement="end"
              />
              {/* /> */}
              <FormControlLabel
                value="end"
                control={
                  <Checkbox
                    value={values.packageService}
                    onChange={handleInputChange}
                    name="packageService"
                  />
                }
                label="Package Service"
                labelPlacement="end"
              />
            </Box>
          </Stack>

          <Stack direction="row" sx={{ p: 0.5 }}>
            <Box sx={{ width: "50%", mr: 2, mt: 1 }}>
              <TextField
                placeholder="Technician"
                size="small"
                sx={{ width: "100%" }}
                value={values.technician}
                onChange={handleInputChange}
                name="technician"
              />
            </Box>
            <Box sx={{ width: "50%" }}>
              <FormControl sx={{ width: "100%", mt: 1 }} size="small">
                <TextField
                  label="Invoice Number"
                  size="small"
                  sx={{ width: "100%" }}
                  value={values.invoiceNumber}
                  onChange={handleInputChange}
                  name="invoiceNumber"
                />
              </FormControl>
            </Box>
          </Stack>

          <Stack direction="row" sx={{ p: 0.5, mt: 1 }}>
            <Box sx={{ width: "50%", mr: 2 }}>
            <FormControl sx={{ width: "100%", mt: 1 }} size="small">
                <TextField
                  label="Due Date"
                  size="small"
                  sx={{ width: "100%" }}
                  type="date"
                  value={values.dueDate}
                  onChange={handleInputChange}
                  name="dueDate"
                />
              </FormControl>  
            </Box>

            <Box sx={{ width: "50%" }}>
              <FormControl sx={{ width: "66%", mr: 1 }} size="small">
                <TextField
                  label=" agent"
                  placeholder="tester"
                  size="small"
                  sx={{ width: "100%" }}
                  value={values.agent}
                  onChange={handleInputChange}
                  name="agent"
                />
              </FormControl>

              <FormControl sx={{ width: "30%" }} size="small">
                <InputLabel id="demo-simple-select-helper-label">
                  Visibility
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="visibility"
                  value={values.visibility}
                  onChange={handleInputChange}
                  name="visibility"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Public">Public</MenuItem>
                  <MenuItem value="Private">Private</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>

          <Stack direction="row" sx={{ mt: 1 }}>
            <Box sx={{ mr: 1 }}>
              <Button
                variant="outlined"
                sx={{ border: "1px solid grey", color: "grey" }}
                onClick={editHandleClose}
              >
                Cancel
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="success"
                onClick={() => saveHandle()}
              >
                Save
              </Button>
            </Box>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditDialog;
