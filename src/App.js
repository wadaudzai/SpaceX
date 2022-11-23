import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mission from './components/Missions/Mission';
import MyProfile from './components/MyProfile/MyProfile';
import MyRockets from './components/Rockets/rocket';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <Navbar />
          <hr />
        </div>
        <section className="content">
          <Routes>
            <Route path="/" element={<MyRockets />} />
            <Route path="/Rockets" exact element={<MyRockets />} />
            <Route path="/Mission" element={<Mission />} />
            <Route path="/MyProfile" element={<MyProfile />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
