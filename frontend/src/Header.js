import Box from "@mui/material/Box";
import { Avatar, Button, Stack } from "@mui/material";
import React from "react";
import './Header.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@material-ui/core/styles"

import {
  InputAdornment,
  TextField,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import axios from "axios";



// const styles = {
//   root: {
//     background: "black"
//   },
//   input: {
//     color: "white"
//   }
// };


const Header = ({children}) => {

  const [videoLink,setvideoLink]=useState("");
  const [title,settitle]=useState("");
  const [genre,setgenre]=useState("");
  const [contentRating,setcontentRating]=useState("");
  const [releaseDate,setreleaseDate]=useState("");
  const [previewImage,setpreviewImage]=useState("");

  //const { classes } = props;

  //const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
console.log(videoLink,title,genre,contentRating,releaseDate,previewImage)
    axios.post('https://251f31e3-0caa-4fca-88e0-105d8237957a.mock.pstmn.io/v1/videos', {
      "videoLink":{videoLink},
    "title": {title},
    "genre": {genre},
    "contentRating": {contentRating},
    "releaseDate": {releaseDate},
    "previewImage": {previewImage}
    })
    .then(function (response) {
      console.log(response);
      if(response){alert('Success')}
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(e);

    setOpen(false);
  };

    return (
        <div>
        {/* <Box className="header">
          <Box className="header-title">
              XFLIX
          </Box>
        </Box> */}
      <Box className="header">
      {/* <Stack direction="row" spacing> */}
        <Box className="header-title">
        <img src="https://github.com/ArathyPA/XFlix/blob/main/Logo.png?raw=true" alt="XFlix-icon"></img>        
          </Box> 
                   {children}
         {/* <Box sx={{ width: "45vw" }}> 
        <TextField
            className="search-desktop"
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search color="primary" />
                </InputAdornment>
              ),
            }}            
            placeholder="Search"
            name="search"
            onChange={props.fn}
          />
         </Box>  */}
          
         <Box>
         <Button id="upload-btn" variant="contained" onClick={handleClickOpen}>
            Upload
          </Button>
          
          <Dialog open={open} onClose={handleClose} 
          PaperProps={{
            style: {
              backgroundColor: 'grey',
              boxShadow: 'none',
              color:"white"
            },
          }}
          
          >
        
        <DialogTitle>Upload Video</DialogTitle>
       
        <DialogContent>
          
          <TextField
            autoFocus            
            margin="dense"
            id="name"
            label="Videolink"            
            fullWidth
            variant="outlined"  
            
            onChange={(e)=>setvideoLink(e.target.value)}
          />
          <DialogContentText>
            Link will be used to derive the video.
          </DialogContentText>
                   
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Thumbnail image Link"            
            fullWidth
            variant="outlined"
            onChange={(e)=>setpreviewImage(e.target.value)}
          />
          <DialogContentText>
          Link will be used to preview the thumbnail image.
          </DialogContentText>
        
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"           
            fullWidth
            variant="outlined"
            onChange={(e)=>settitle(e.target.value)}
          />
          <DialogContentText>
            Title will be representative text for a video
          </DialogContentText>
          
         
          <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    sx={{
            minWidth: 500,
            color:"white"
    }}
    label="Genere"
    onChange={(e)=>setgenre(e.target.value)}
  >
    <MenuItem value={"Education"}>Education</MenuItem>
    <MenuItem value={"Sports"}>Sports</MenuItem>
    <MenuItem value={"Comedy"}>Comedy</MenuItem>
    <MenuItem value={"Life Style"}>Life Style</MenuItem>
  </Select>
  <DialogContentText>
            Genere will help in categorizing videos.
          </DialogContentText>

         
          <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    sx={{
            minWidth: 500,
            color:"white"
    }}
    label="Age"
    input={<OutlinedInput label="Suitable Age group for the clip" />}
    onChange={(e)=>setcontentRating(e.target.value)}
  >
    <MenuItem value={"7+"}>7+</MenuItem>
    <MenuItem value={"12+"}>12+</MenuItem>
    <MenuItem value={"16+"}>16+</MenuItem>
    <MenuItem value={"18+"}>18+</MenuItem>
  </Select>
          <DialogContentText>
            This will be used to filter videos based on age group suitability
          </DialogContentText>
        
          
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="date"                        
            fullWidth
            variant="outlined"
            onChange={(e)=>setreleaseDate(e.target.value)}
          />
          <DialogContentText>
            This will be used to sort videos.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button id="upload-btn-cancel" onClick={handleClose}>Cancel</Button>
          <Button id="upload-btn-submit" onClick={(e)=>handleSubmit(e)}>Submit</Button>
        </DialogActions>
      </Dialog>
          </Box> 
        
                
        {/* </Stack>       */}
        
      
      </Box>
        

        </div>
//         <div> <nav class="navbar navbar-expand-lg navbar-light bg-dark ps-3">       
//        <h3 id='X'> XFLIX</h3>
//         <form class="form-inline">
//     <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
   
//   </form>
//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
//             aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//         </button>

//         <div class="collapse navbar-collapse" id="navbarNavDropdown">
//             {/* <button class="btn-primary justify-content-end w-10"> 
//                Upload
//             </button> */}
//         </div>
//       </nav>
//     </div>
        
        
      );


}
export default Header;
