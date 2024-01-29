

import Login from './Pages/Login';
import Dealer from './Pages/Dealer';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Employee from './Pages/Employee';
import VisitInfo from './Pages/VisitInfo';
import Plan from './Pages/Plan';
import Task from './Pages/Task';

// const Header = () => (
//   <header className="header">
//     <h1>Field Force Management</h1>
//     <p>Optimize your field operations with our comprehensive management solution.</p>
//   </header>
// );





const App=()=> {
  return (
    <div className="App">
      <header className="App-header">
      <>
          
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Home" element={<Home />} />
            <Route path="/Plan" element={<Plan />} />
            <Route path="/Task" element={<Task/>}/>
            <Route path="/Dealer" element={<Dealer />} />
            <Route path="/VisitInfo" element={<VisitInfo />} />
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

