import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

import HfPhotos from './components/hfPhotos';
import FsPhotos from './components/fsPhotos';
import SsPhotos from './components/ssPhotos';


import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import Navbar from './components/Navbar';
import MainCard from './components/CardComponent';
import Brothers from './components/Brothers';
import ContactUs from './components/ContactUs';
import AboutFamily from './components/AboutFamily';
import Events from './components/Events';

function App() {
  return (
    <Router>
       <ScrollToTop />
      <Routes>
        {/* Login page without Navbar */}
        <Route path='/' element={<Login />} />

        {/* Home page with Navbar */}
        <Route
          path='/home'
          element={
            <>
              <Navbar />
              <br />
              <div className="family-title">Kusumba's Family</div>
              <br />
              <MainCard />
            </>
          }
        />

        {/* Other pages with Navbar */}
        <Route
          path='/brothers'
          element={
            <>
              <Navbar />
              <Brothers />
            </>
          }
        />
        <Route
          path='/aboutfamily'
          element={
            <>
              <Navbar />
              <AboutFamily />
            </>
          }
        />

        <Route
          path='/events'
          element={
            <>
              <Navbar />
              <Events />
            </>
          }
        />


        <Route path="/hf-photos" element={<> <Navbar /> <br /><HfPhotos /></>} />
         <Route path="/fs-photos" element={<> <Navbar /> <br /><FsPhotos /></>} />
         <Route path="/ss-photos" element={<> <Navbar /> <br /><SsPhotos /></>} />


        <Route
          path='/contactus'
          element={
            <>
              <Navbar />
              <ContactUs />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;