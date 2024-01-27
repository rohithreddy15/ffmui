
import './App.css';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Dealer from './Pages/Dealer';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Employee from './Pages/Employee';
import VisitInfo from './Pages/VisitInfo';
import Plan from './Pages/Plan';

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
            <Route path="/VisitInfo" element={<VisitInfo />} />
            <Route path="/Plan" element={<Plan />} />
            <Route path="/Employee" element={<Employee />} />
           
          </Routes>
        </>
     
      
     
    
        {/* <Home/>
        <Login/>
        <Dealer/>  */}
      

      </header>
    </div>
  );
}

export default App;

