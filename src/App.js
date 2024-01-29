
import './App.css';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Dealer from './Pages/Dealer';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Employee from './Pages/Employee';
import VisitInfo from './Pages/VisitInfo';
import Plan from './Pages/Plan';

const Header = () => (
  <header className="header">
    <h1>Field Force Management</h1>
    <p>Optimize your field operations with our comprehensive management solution.</p>
  </header>
);

const HeroSection = () => (
  <section className="hero">
    <h1>Welcome to Field Force Management</h1>
    <p>Empower your team, streamline operations, and boost productivity.</p>
  </section>
);

const Feature = ({ title, description }) => (
  <div className="feature">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const FeaturesSection = () => (
  <section className="features">
    <Feature title="Real-time Tracking" description="Track your field force in real-time and optimize their routes for efficient operations." />
    <Feature title="Task Assignment" description="Effortlessly assign tasks to your field agents and monitor task progress." />
    <Feature title="Reporting and Analytics" description="Access comprehensive reports and analytics to make informed business decisions." />
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 Field Force Management. All rights reserved.</p>
  </footer>
);


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
          <Header />
    <HeroSection />
    <FeaturesSection />
    <Footer />
        </>
     
      
     
    
        {/* <Home/>
        <Login/>
        <Dealer/>  */}
      

      </header>
    
    </div>
  );
}

export default App;

