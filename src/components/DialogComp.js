import React,{useState} from 'react'
import { Dialog,
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



function DialogComp({openAdd,addHandleClose}) {
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
  

  };
    const [values, setValues] = useState(initialValues);
    const [caseslist,setCaseslist] = useState([])
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
      function saveHandle(){

         setCaseslist([...caseslist,{...values,id:Date. now()}])
        console.log('cases=>',caseslist)
        localStorage.setItem("cases",JSON.stringify(caseslist));
        addHandleClose()
        setValues(initialValues)
      }

      // React.useEffect(() => {

      //   if (caseslist) {
      //     localStorage.setItem("cases", JSON.stringify(caseslist || []));
      //   }
      // }, [caseslist]);

  return (
    <div>
         <Dialog
            open={openAdd}
            onClose={addHandleClose}
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
                <IconButton > 
                <CloseIcon onClick={addHandleClose} />
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
                      Case Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="Case Type"
                      value={values.caseType}
                      onChange={handleInputChange}
                      name="caseType"
                    >
                      <MenuItem value="">
                        <em>Select Case Type</em>
                      </MenuItem>
                      <MenuItem value="Booking">Booking</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Stack>

              <Stack direction="row" sx={{ p: 0.5,mt:1 }}>
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
                    <InputLabel id="demo-simple-select-helper-label">
                      Product category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="Product category"
                      value={values.productCategory}
                      onChange={handleInputChange}
                      name="productCategory"
                    >
                      <MenuItem value="">
                        <em>Select Category</em>
                      </MenuItem>
                      <MenuItem value="airConditioner">Air Conditioner</MenuItem>
                    </Select>
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
                      Product
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="Product"
                      value={values.product}
                    onChange={handleInputChange}
                    name="product"
                    >
                      <MenuItem value="">
                        <em>Select Product Category list</em>
                      </MenuItem>
                      <MenuItem value="select_product_category"> Select Product Category list</MenuItem>

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
                    <InputLabel id="brand-label">
                      Brand
                    </InputLabel>
                    <Select
                      labelId="brand-label"
                      id="brand-label"
                      label="Brand"
                      value={values.brand}
                      onChange={handleInputChange}
                      name="brand"
                      defaultValue=" "
                    >
                      <MenuItem
                       value=''
                        >
                        <em>Select Brand</em>
                      </MenuItem>
                      <MenuItem value="bluestar">Bluestar</MenuItem>
  
                    </Select>
                  </FormControl>
                </Box>
              </Stack>

              <Stack direction="row" sx={{ p: 0.5 ,mt:1}}>
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
                      label="Serial Number"
                      size="small"
                      sx={{ width: "100%" }}
                      value={values.serialNumber}
                      onChange={handleInputChange}
                      name="serialNumber"
                    />
                  </FormControl>
                </Box>
              </Stack>

              <Stack direction="row" sx={{ p: 0.5,mt:1 }}>
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
                <Box sx={{ width: "50%" }}>
                  <FormControl sx={{ width: "100%" }} size="small">
                    <TextField
                      label="Model(Series/Number)"
                      size="small"
                      sx={{ width: "100%" }}
                      value={values.model}
                      onChange={handleInputChange}
                      name="model"
                    />
                  </FormControl>
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
                    <InputLabel id="demo-simple-select-helper-label">
                      Warrenty
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="Warrenty"
                      value={values.warrenty}
                      onChange={handleInputChange}
                      name="warrenty"

                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      <MenuItem value="inWarrenty"> In Warrenty</MenuItem>

                    </Select>
                  </FormControl>
                </Box>
              </Stack>

              <Stack direction="row" sx={{ p: 0.5 }}>
                <Box sx={{ width: "50%", mr: 2 }}>
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
                      <MenuItem value="">
                        <em>Normal</em>
                      </MenuItem>
                      <MenuItem value="normal">Normal</MenuItem>
                      <MenuItem value="high">High</MenuItem>
                      <MenuItem value="emergency">Emergency</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ width: "50%" }}>
                  <FormControl sx={{ width: "100%", mt: 1 }} size="small">
                    <InputLabel id="demo-simple-select-helper-label">
                      Problem
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="Problem"
                      value={values.problem}
                      onChange={handleInputChange}
                      name="problem"
                    >
                      <MenuItem value="">
                        <em>select Problem</em>
                      </MenuItem>
                      <MenuItem value="selectProblem">select Problem</MenuItem>
 
                    </Select>
                  </FormControl>
                </Box>
              </Stack>

              <Stack direction="row" sx={{ p: 0.5 }}>
                <Box sx={{ width: "50%", mr: 2 }}>
                  <FormControl
                    sx={{ width: "100%", mt: 1, mr: 1 }}
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-helper-label">
                      Source
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="Source"
                      value={values.source}
                      onChange={handleInputChange}
                      name="source"
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      <MenuItem value="selectSource">Select Source</MenuItem>
                      <MenuItem value="partner">Partner</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ width: "50%", mt: 1 }}>
                  <FormControl sx={{ width: "100%" }} size="small">
                    <InputLabel id="demo-simple-select-helper-label">
                      Reason
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="Reason"
                      value={values.reason}
                      onChange={handleInputChange}
                      name="reason"
                    >
                      <MenuItem value="">
                        <em>Select Reason</em>
                      </MenuItem>
                      <MenuItem value="selectReason">Select Reason</MenuItem>

                    </Select>
                  </FormControl>
                </Box>
              </Stack>

              <Stack direction="row" sx={{ p: 0.5, mt: 1 }}>
                <Box sx={{ width: "50%", mr: 2 }}>
                  <TextField
                    label="Invoice Number"
                    size="small"
                    sx={{ width: "100%" }}
                    value={values.invoiceNumber}
                    onChange={handleInputChange}
                    name="invoiceNumber"
                  />
                </Box>
                <Box sx={{ width: "50%" }}>
                  <FormControl sx={{ width: "100%" }} size="small">
                    <TextField
                      label="Quantity"
                      size="small"
                      sx={{ width: "100%" }}
                      value={values.quantity}
                    onChange={handleInputChange}
                    name="quantity"
                    />
                  </FormControl>
                </Box>
              </Stack>

              <Stack direction="row" sx={{ p: 0.5, mt: 1 }}>
                <Box sx={{ width: "50%", mr: 2 }}>
                  <TextField
                    label="Case Remarks"
                    size="small"
                    sx={{ width: "100%" }}
                    value={values.caseRemarks}
                    onChange={handleInputChange}
                    name="caseRemarks"
                  />
                </Box>
                <Box sx={{ width: "50%" }}>
                  <FormControl sx={{ width: "100%" }} size="small">
                    <TextField
                      label="Product's other details"
                      size="small"
                      sx={{ width: "100%" }}
                      value={values.productsOtherDetails}
                      onChange={handleInputChange}
                      name="productsOtherDetails"
                    />
                  </FormControl>
                </Box>
              </Stack>

              <Stack direction="row" sx={{ p: 0.5, mt: 1 }}>
                <Box sx={{ width: "50%", mr: 2 }}>
                  <FormControlLabel
                    value="end"
                    control={<Checkbox 
                      value={values.billable}
                      onChange={handleInputChange}
                      name="billable"
                    />}
                    label="Billable"
                    labelPlacement="end"
                   
                    />
                  {/* /> */}
                  <FormControlLabel
                    value="end"
                    control={<Checkbox 
                      value={values.packageService}
                      onChange={handleInputChange}
                      name="packageService"
                    />}
                    label="Package Service"
                    labelPlacement="end"
                    
                  />

                </Box>
                <Box sx={{ width: "50%" }}>
                  <FormControl sx={{ width: "66%", mr:1}} size="small">
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

              <Stack direction="row"
              sx={{mt:1}}
              >
                <Box sx={{mr:1}}>
                <Button variant="outlined"  sx={{border:'1px solid grey',color:'grey'}} onClick={addHandleClose} >Cancel</Button>
              
                </Box>
                <Box >
                <Button variant="contained" color="success" onClick={()=>saveHandle()} >Save</Button>

                </Box>
              </Stack>

            </DialogContent>
          </Dialog>




    </div>
  )
}

export default DialogComp