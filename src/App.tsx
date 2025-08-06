/* import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; */
import Router from './routes'
/* import Home from '@/pages/Home'; */

function App() {
  return (
    <>
      <Router />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/first-birthday-party" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;