import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mission from './components/Mission';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>
      <section className="content">
        <Routes>
          <Route path="/" exact element={<Rockets />} />
          <Route path="/Mission"  element={<Mission />} />
          <Route path="/My Profile" element={<MyProfile />} />
        </Routes>
      </section>
    </div>
    </Router>
  );
}

export default App;
