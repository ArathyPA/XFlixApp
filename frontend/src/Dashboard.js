import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Header from './Header.js'
import Box from "@mui/material/Box";
import { Search } from "@mui/icons-material";
import { useNavigate, Link} from "react-router-dom";

//import InputLabel from '@mui/material/InputLabel';
import {
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import axios from "axios";
import './Card.css';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import './GenerPanel.css';
let Genere=['All Genere','Education','Sports','Comedy','Lifestyle'];
let Age=['Any Age Group','7+','12+','16+','18+'];
let url='https://251f31e3-0caa-4fca-88e0-105d8237957a.mock.pstmn.io/v1/videos'
let category="";
let carray=[];
var catstring="";
let age="";

//var isclicked=true;

const Dashboard = (props) => {
  const navigate=useNavigate(); 
  const [debounceTimeout, setDebounceTimeout] = useState(setTimeout(() => {}, 500))
  //const [category,setCat] = useState("");
  //const [agefilter,setAge] = useState(["Any Age"]);
  //const [url,seturl] = useState('https://a6274916-692d-4eb3-8ef5-6bcddc633400.mock.pstmn.io/v1/videos');

    const [state, setState] = useState({
        videos: [],
        loading: false,       
      });
      
      const searchfunction=(e,debounceTimeout)=>{
       // console.log(e.target.value);
                     
    clearTimeout(debounceTimeout);
    setDebounceTimeout(
      setTimeout(() => {
        let title=e.target.value
        console.log(title)
        url=`https://251f31e3-0caa-4fca-88e0-105d8237957a.mock.pstmn.io/v1/videos?title=${title}`; 
        performAPICall(url);
      }, 500)
    );
       // performAPICall(url);
      }

      const filterbyCat=(e)=>{
        category=e.target.innerHTML;
        if(document.getElementById(e.target.id).classList.contains('pillclicked'))
        {
        document.getElementById(e.target.id).className="pill";
        let index=carray.indexOf(category)
        carray.splice(index,1);
        }
        else{document.getElementById(e.target.id).className="pillclicked"; 
        carray.push(category)
      }
       
        //console.log(e.target.innerHTML);
        
        
        
        catstring=carray.join(',')
        console.log(catstring)
        if(category=='All Genere'&&document.getElementById(e.target.id).classList.contains('pillclicked')){
          url='https://251f31e3-0caa-4fca-88e0-105d8237957a.mock.pstmn.io/v1/videos'
        }
        else{
        url=`https://251f31e3-0caa-4fca-88e0-105d8237957a.mock.pstmn.io/v1/videos?genres=${catstring}`}
        //console.log(category);
        performAPICall(url);
      }
      const filterbyage=(e)=>{

        //document.getElementById("cat").className="pillclicked";
        //isclicked=!isclicked
        console.log(e.target.innerHTML);
        
        
        if(document.getElementById(e.target.id).classList.contains('pillclicked'))
        {
        document.getElementById(e.target.id).className="pill";
        //carray.pop(category)
        age="";
        }
        else{document.getElementById(e.target.id).className="pillclicked"; 
        age=e.target.innerHTML;
        //carray.push(category)
      }
      if(age){
        if(age=='Any Age Group'){
          url='https://251f31e3-0caa-4fca-88e0-105d8237957a.mock.pstmn.io/v1/videos'
        }
        else{
         if(carray.length===0){
         url=encodeURI(`https://251f31e3-0caa-4fca-88e0-105d8237957a.mock.pstmn.io/v1/videos?contentRating=${age}`)
         }
         else{
          url=encodeURI(`https://251f31e3-0caa-4fca-88e0-105d8237957a.mock.pstmn.io/v1/videos?genres=${catstring}&contentRating=${age}`)
         }        

        }
      }
      
        //console.log(category);
        performAPICall(url);
      }

      useEffect(() => {
        performAPICall();
      },[]);

      const performAPICall = async () => {
        console.log(url);

        setState((preState) => ({
          ...preState,
          loading: true,
        }));
        await axios.get(url)
          .then((response) => {
            //console.log(response);
            setState(() => ({          
              videos: response.data.videos,
              loading: false,
            }));            
            
          })
          .catch(() => {
           
            setState((preState) => ({
              ...preState,
              loading: false,
            }));
          });
          //console.log(state.videos);
          //console.log(state.loading);
      };
     // const toggleclick=()=>{isclicked=!isclicked}
      const handleSort=(e)=>{
        if(e.target.value==='ViewCount'){
          url='https://251f31e3-0caa-4fca-88e0-105d8237957a.mock.pstmn.io/v1/videos?sortBy=viewCount'
        }
        else{
          url='https://251f31e3-0caa-4fca-88e0-105d8237957a.mock.pstmn.io/v1/videos?sortBy=releaseDate'
        }
        performAPICall(url);
      }
      
      return (
        <div>
          {props.isLandingpage&&<Header>   
      <Box sx={{ width: "45vw" }}> 
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
            onChange={searchfunction}
          />
         </Box> 
         </Header>}
         
      {props.isLandingpage&& <div class="mt-2" className="filter-section">
        <div className="Gener-section">
            {Genere.map((cat,index) => <p key={cat} id={`categ${index}`} className="genre-btn" onClick={(e)=>filterbyCat(e)}>{cat}</p>)}
           <div className="sort">
            {/* <Chip label= {<ImportExportIcon color="primary" />}
            variant="filled"
                
            /> */}
            {/* <Button id="sortbutton" variant="contained" color="info" startIcon={<ImportExportIcon color="primary"/>}
            onClick={toggleclick}>
               Release Date
            </Button> */}
             {/* <InputLabel id="demo-simple-select-label">Release Date</InputLabel> */}
             <ImportExportIcon color="primary"/>
             <select class="sort-select" name="Release Date" id="Release Date" onChange={(e)=>handleSort(e)}>
              <option id="release-date-option" value="Release Date">Release Date</option>
              <option id="view-count-option"value="ViewCount">View Count</option>    
            </select>
            </div> 
        </div>
        <div className="Gener-section">
        {/* <<Chip label="7+" variant="outlined"/>> */}
        {Age.map((age,index) => <p id={`ag${index}`} className="content-rating-btn" onClick={(e)=>filterbyage(e)}>{age}</p>)}
        </div>
    </div>
     }

        
      <Grid container spacing={2} direction="row" className="grid" >
        {state.videos.map((video) => (
          <Grid item xs={12} sm={6} md={3} key={video._id}>
            {/* <videoCard
              video={video}                                              
            /> */}
             {/* <Card key={video.key} className="card" image={video.previewImage} title={video.title} 
             date={video.releaseDate} /> */}
            <Card sx={{ maxWidth: 345 }} className='video-tile-link'>
      <CardMedia 
        className="video-tile"
        sx={{ height: 140 }}
        image={video.previewImage}
        title="green iguana"        
        onClick={() => navigate(`/video/${video._id}`,{state:video})}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {video.title} 
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        {video.releaseDate}
        </Typography>
      </CardContent>
      
        </Card>
       </Grid>))}
      </Grid>
      
      </div>
      );
}

export default Dashboard;