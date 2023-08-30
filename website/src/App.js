import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';
import { Contact } from './Pages/Contact';
import { Navbar } from './NavBar';
import { useState, createContext } from 'react';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("PedroTech");
  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}
export default App;
