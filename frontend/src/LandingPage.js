//import logo from './logo.svg';

import Dashboard from './Dashboard.js'
//import GenerePanel from './GenerePanel.js'


//import './App.css';

function LandingPage() {  
  return (
    <div className="App">     
     <Dashboard isLandingpage={true}/>           
    </div>
  );
}

export default LandingPage;
