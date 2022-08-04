
import './App.css';
import { BrowserRouter ,Route,Routes,Link} from 'react-router-dom';
import Register from './Components/Register';

import pic from "./images/layout.png";
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

import { useState } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 toast.configure();


function App() {
 const [log,setLog]=useState(localStorage.getItem('Loginsuccess'));
  const Logout=()=>{
    localStorage.removeItem('Loginsuccess');
    localStorage.removeItem('Resgisterstatus');
    localStorage.removeItem('Deletestatus');
    localStorage.removeItem('Updatestatus');
    window.location.reload();
    window.location="/";
  }
  return (
    
    
    <BrowserRouter>
    
    <div className="App">
    <div className="nav">
      
      {!log &&(
        
        <>
         <ul>
                    <li className="logo"><img src={pic}></img></li>
                    <li className="logo name">AdBoard</li>
                    
                    
                   
                </ul>
        </>
       
      )}
      {log  &&(
        <>
           <ul>          
                    <li className="logo"><img src={pic}></img></li>
                    <li className="logo name">AdBoard</li>
                   
                    <Link to={"/"} className='logo1'><li className='logo2' onClick={Logout}>Logout</li>
                    </Link>
                    <li className='logo2' >Hello! {localStorage.getItem('useremailid')}</li>
                  
                   

                   
                </ul>
        </>
      )}
    
      </div>
                
            
     <Routes>
    
      <Route path="/create" element={<Register/>}></Route>
     
      <Route path='/' element={<Login/>}></Route>

      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      
     </Routes>
       
     </div>
   
    </BrowserRouter>
    );

 }
 
 

export default App;
