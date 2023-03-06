import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Error from './Component/Error';
function App(){
 return(
  
   <BrowserRouter>
    <Navbar />
    <div className='content'>
      
    <Routes>
        {/* <Route exact path="/" element=<Home /> /> */}
        <Route path="/home" element= {<Home />} />
        <Route path="/contactt" element= {<Contact />} />
        <Route path="/about" element= {<About />} />
        
    </Routes>
    
    </div>
   </BrowserRouter>
 )

}
export default App;