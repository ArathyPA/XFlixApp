 //import logo from './logo.svg';
import LandingPage from './LandingPage.js'
//import GenerePanel from './GenerePanel.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import './App.css';
import VideoPage from './VideoPage.js';

function App() {  
  return (
    <div className="App">     
      {/* <Dashboard/> */}              
    
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/video/:videoId" element={<VideoPage/>} />
      </Routes>
   
    </div>
  );
}

export default App;
