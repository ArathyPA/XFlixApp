import React from "react";
import Header from "./Header.js";
import Dashboard from './Dashboard.js'
import { useLocation } from "react-router-dom";
import Chip from '@mui/material/Chip';
import './VideoPage.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import axios from "axios";


const VideoPage = (props)=>
{
    const location =useLocation()
    console.log(location.state);
    let str="https://www." + location.state.videoLink;
    console.log(location.state.videoLink);
    const handleDownvote=()=>{
        axios
    .patch('https://251f31e3-0caa-4fca-88e0-105d8237957a.mock.pstmn.io/v1/videos/60331f421f1d093ab5424489/votes', {
        "vote": "downVote",
        "change": "increase"
    }, {'headers': { 'Content-type': 'application/json; charset=UTF-8' }})
    .then((data) => console.log(data))
    .catch((e)=>{console.log(e)})
    }
    const handleUpvote=()=>{
        axios
    .patch('https://251f31e3-0caa-4fca-88e0-105d8237957a.mock.pstmn.io/v1/videos/60331f421f1d093ab5424489/votes', {
        "vote": "upVote",
        "change": "increase"
    }, {'headers': { 'Content-type': 'application/json; charset=UTF-8' }})
    .then((data) => console.log(data))
    .catch((e)=>{console.log(e)})
    }

    return(
<div>
    <Header/>
    <div>
        
<iframe src={str} width="700" height="400"
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'            
        />
        <div className="videodetailsflex">
            <div className="videodescription">
            <h3>{location.state.title}</h3>        
            <p>{location.state.viewCount}&nbsp;&nbsp;{location.state.releaseDate}</p>
            </div>
            <div className="chip">
            <Chip onClick={handleUpvote} color='info' className="chip-button"  icon={<ThumbUpIcon color='primary'/>}  label={location.state.votes.upVotes} variant="outlined"/>
            <Chip onClick={handleDownvote} color='info' className="chip-button" icon={<ThumbDownIcon color='primary'/>}  label={location.state.votes.downVotes} variant="outlined"/>
            </div>
        </div>
    </div>
    <hr color="red"
        />
        <Dashboard isLandingpage={false}/>
       
</div>
    );
} 

export default VideoPage;
