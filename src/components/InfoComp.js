import React from 'react'
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
import CloseIcon from "@mui/icons-material/Close";
import { Stack } from "@mui/system";

function InfoComp({open,handleClose }) {

  const [tabIndex, setTabIndex] = React.useState(0);
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  }


  return (
    <div>
        <Dialog fullScreen open={open} onClose={handleClose}>
          <DialogTitle>
            <Stack
              direction="row"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box> Booking</Box>
              <Box>
                <IconButton>
                  <CloseIcon onClick={handleClose} />
                </IconButton>
              </Box>
            </Stack>
          </DialogTitle>

          <DialogContent>
            <Stack direction="row">
              <Box sx={{ width: "50%" }}>
                <table>
                  <tbody>
                    <tr>
                      <td style={{ width: "200px" }}> Case Number</td>
                      <td> 11094 (Normal)</td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Status </td>
                      <td> New </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Case Type</td>
                      <td> Booking </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Title </td>
                      <td> Booking </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Product </td>
                      <td>Old Split Ac On Rent </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Technician </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Technician Date/Time </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Technician Status </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Due Date </td>
                      <td> 02-02-2023 </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Billable </td>
                      <td>
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Package Service </td>
                      <td>
                        <Checkbox />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}>Amount </td>
                      <td> rs </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Source </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Invoice Number </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Remarks </td>
                      <td> </td>
                    </tr>
                  </tbody>
                </table>
              </Box>

              <Box sx={{ width: "50%" }}>
                <table>
                  <tbody>
                    <tr>
                      <td style={{ width: "200px" }}> Account Name</td>
                      <td> JDM World Wide Fright Solutions Pvt Ltd </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Contact Name</td>
                      <td> Nitin Mulay </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Mobile</td>
                      <td> 9004862660 </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Phone</td>
                      <td> 1234656725 </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Email </td>
                      <td> nitin.mulay@dmcargoplanners.com </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Address </td>
                      <td>
                        {" "}
                        B- 801, Sapphire Shelter, Plot no. 18/19, Sector- 15{" "}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Date/Time Opened </td>
                      <td> 28-01-2023 06:10:59 </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Age </td>
                      <td> 3 days </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Customer Rating </td>
                      <td> </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Agent</td>
                      <td> Tester </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Visibility </td>
                      <td> Public </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}>Created By </td>
                      <td> Tester 28-01-2023 06:10:59 </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}> Last Modified By </td>
                      <td> Tester 28-01-2023 01:13:31 </td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            </Stack>
            <Stack >
              <Box sx={{ display:'flex',justifyContent:'center'}}> 
              <Box >
                <Box >
                  <Tabs value={tabIndex} onChange={handleTabChange}>
                    <Tab label="COMMENTS" />
                    <Tab label="PRODUCTS" />
                    <Tab label="ACTIVITIES" />
                    <Tab label="FILES" />
                    <Tab label="CONFIRMATION" />

                  </Tabs>
                </Box>
                <Box sx={{ padding: 2 }}  >
                  {tabIndex === 0 && (
                    <Box >
                      <Typography>The first tab</Typography>
                    </Box>
                  )}
                  {tabIndex === 1 && (
                    <Box>
                      <Typography>The second tab</Typography>
                    </Box>
                  )}
                  {tabIndex === 2 && (
                    <Box>
                      <Typography>The third tab</Typography>
                    </Box>
                  )}
                   {tabIndex === 3 && (
                    <Box>
                      <Typography>The 4th tab</Typography>
                    </Box>
                  )}
                   {tabIndex === 4 && (
                    <Box>
                      <Typography>The 5th tab</Typography>
                    </Box>
                  )}
                </Box>
              </Box>
              </Box>
            </Stack>
          </DialogContent>
        </Dialog>
        
    </div>
  )
}

export default InfoComp