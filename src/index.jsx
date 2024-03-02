import React,  { useEffect } from 'react';  
import ReactDOM from 'react-dom';  
import { BrowserRouter, Routes, Route, } from 'react-router-dom';  
import Main from './main';
import About from './pages/about';  
import Contact from './pages/contact';
import "./style.css";

function App(){

    return(
        <BrowserRouter>
             <Routes>
                <Route index path="/" element={<Main/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/about" element={<About/>}></Route>
             </Routes>

        </BrowserRouter>
    )
}


  

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)

