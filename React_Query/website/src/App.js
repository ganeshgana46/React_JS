import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Home } from './Pages/Home';
import { Profile } from './Pages/Profile';
import { Contact } from './Pages/Contact';
import { Navbar } from './Component';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
function App() {
  const client = new QueryClient({defaultOptions : {
    queries: {
      refetchOnWindowFocus: false,
    },
  }});
  return (
    <div className="App">
      <QueryClientProvider client= {client}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
