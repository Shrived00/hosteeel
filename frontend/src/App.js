import './App.css';
// import Carousel__ from './Carousel__';
// import Header from "./Header"
// import Info from './Info';
// import Footer from './Footer';
import Header from "./Header"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Screens/Home'
import Home from './Screens/Home';
import Hostel from './Screens/Hostel';
import Mess from './Screens/Mess';
import Admission_Process from './Screens/Admission_Process'
import Log from './Screens/Log'
import Sign from './Screens/Sign'


function App() {
  return (
    <div className="App">

      <Router>
        <Header />

        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/Hostel' element={<Hostel />} />
          <Route path='/Mess' element={<Mess />} />
          <Route path='/Admission_Process' element={<Admission_Process />} />
          <Route path='/Sign' element={<Sign />} />
          <Route path='/Log' element={< Log />} />
        </Routes>

      </Router>




    </div>
  );
}

export default App;
