import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './List';
import Pokemon from './Pokemon';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/pokemon/:id' element={<Pokemon />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
