import {Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LayoutWrapper from './pages/LayoutWrapper';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking'
import Main from './pages/Main';
import './App.css';

function App() {
  const [formResponse, setFormResponse] = useState('Not set');
  return (
    <Routes>
      <Route path="/" element={
        <LayoutWrapper>
          <Main />
        </LayoutWrapper>
      }/>
      <Route path="/reserve-a-Table" element={
        <LayoutWrapper>
          <BookingPage formResponse={formResponse} setFormResponse={setFormResponse}/>
        </LayoutWrapper>
      } />
      <Route path="/conformation" element={ formResponse === 'Not set' ?
        <Navigate replace to={"/"} /> :
        <LayoutWrapper>
          <ConfirmedBooking formResponse={formResponse} setFormResponse={setFormResponse}/>
        </LayoutWrapper>
      } />
      <Route path="*" element={<LayoutWrapper />} />
    </Routes>
  )
}

export default App
