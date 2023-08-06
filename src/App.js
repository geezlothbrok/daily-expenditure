import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/nav/NavigationBar';
import { Home, Login, Register, Reset } from './pages';
import MobileNavigation from './components/nav/MobileNavigation';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavigationBar />
      <MobileNavigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/reset" element={<Reset />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
