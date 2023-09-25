import {Routes, Route} from 'react-router-dom';
import LayoutWrapper from './pages/LayoutWrapper';
import BookingPage from './pages/BookingPage';
import Main from './pages/Main';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={
        <LayoutWrapper>
          <Main />
        </LayoutWrapper>
      }/>
      <Route path="/reserve-a-Table" element={
        <LayoutWrapper>
          <BookingPage />
        </LayoutWrapper>
      } />
      <Route path="*" element={<LayoutWrapper />} />
    </Routes>
  )
}

export default App
