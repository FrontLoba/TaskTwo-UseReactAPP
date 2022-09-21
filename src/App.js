import React from 'react';
import './App.css';
import Landing from './Pages/Landing';
import {Routes, Route} from "react-router-dom"
import Formpage from './Pages/Formpage';




function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/form' element={<Formpage/>}></Route>
    
        </Routes>
    </div>
  );
}

export default App;
