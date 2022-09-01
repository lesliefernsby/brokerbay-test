import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Edit from './components/Edit';
import Home from './components/Home'

const App: React.FC = () => {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  )
};

export default App;
