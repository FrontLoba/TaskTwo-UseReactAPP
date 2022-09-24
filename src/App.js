import React from 'react';
import './App.css';

import Landing from './Pages/Landing';
import Formpage from './Pages/Formpage';



// import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from "react-router-dom"





function App() {
  return (
    <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='sign-up' element={<Formpage/>}></Route>   
    </Routes>

  );
}

export default App;
