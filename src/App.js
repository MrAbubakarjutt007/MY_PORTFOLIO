import React,{useState} from 'react'
import './App.css';
import PortNav from './components/nev/PortNav';
import PortUserinfo from './components/mainsecand/PortUserinfo';
import PortSlick from './components/main/PortSlick';
import PortUser from './components/userlinks/PortUser';
// import UserDataInfo from './components/userinfotwo/UserDataInfo';
// import PortFooter from './components/footer/PortFooter';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


function App() {
  const [progress, setProgress ]=useState(0)
  const[mode, changeMode]=useState('light');
  const togalDode=()=>
{
  if(mode==='light')
  {
    changeMode('dark');
    document.body.style.backgroundColor= 'black';
   
    // document.title="TEXT COUNTER-DARK MODE #042743" 
  }
  else
  {
    changeMode('light');
    document.body.style.backgroundColor= 'white';
    
    // document.title="TEXT COUNTER-LIGHT MODE"
  }
}
const togalData=()=>
{
  if(mode==='light')
  {
    changeMode('dark');
    document.body.style.backgroundColor= '#042743';
   
    // document.title="TEXT COUNTER-DARK MODE #042743" 
  }
  else
  {
    changeMode('light');
    document.body.style.backgroundColor= 'white';
    
    // document.title="TEXT COUNTER-LIGHT MODE"
  }
}
  return (  
    <div>
      <Router>
      <LoadingBar
        height={3}
        color='red'
        background='10'  
        progress={progress}
      />
      <PortNav mode={mode} togalMode={togalDode} togalDark={togalData}/>
        <Routes>
        <Route path='/' element={<PortUserinfo  mode={mode} setProgress={setProgress}/>}/>    
       <Route path='/projectinfo' element={<PortSlick setProgress={setProgress} />}/>
       <Route path='/information' element={ <PortUser mode={mode} setProgress={setProgress} />}/>      
       
       
       {/* <PortUser/>
       <UserDataInfo/> 
       <PortFooter/> */}
        </Routes>
       </Router>
     </div>
  );
}

export default App;
