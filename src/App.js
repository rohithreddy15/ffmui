import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Dealer from './Pages/Dealer';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Ticket from './Pages/Ticket';

const App=()=> {
  return (
    <div className="App">
      <header className="App-header">
      <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Dealer" element={<Dealer />} />
          </Routes>
        </>
      
      {/* <Ticket/> */}
    
        {/* <Home/>
        <Login/>
        <Dealer/>  */}
      

      </header>
    </div>
  );
}

export default App;

