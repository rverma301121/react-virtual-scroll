import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/pages/Dashboard/Dashboard';
import AlbumList from './components/pages/AlbumList/AlbumList';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/list" element={<AlbumList />} />
        <Route
          path="*"
          element={
            <div className="label">
              <h2>404 Page not found</h2>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
