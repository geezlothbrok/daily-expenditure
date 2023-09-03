import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/nav/NavigationBar';
import { Home, Login, Register, Reset } from './pages';
import MobileNavigation from './components/nav/MobileNavigation';
import { ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddExpenditure from './pages/AddExpenditure';
import Edit from './pages/Edit';

function App() {
  return (
    <>
   
    <BrowserRouter>
     <ToastContainer />
      <NavigationBar />
      {/* <MobileNavigation /> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
       <Route path="/reset" element={ <Reset />}/>
       <Route path="/addExpense" element={ <AddExpenditure />}/>
       <Route path="/update/:id" element={ <AddExpenditure />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
