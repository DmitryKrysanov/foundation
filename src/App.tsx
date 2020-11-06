import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App(): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="App">
      <Navbar sidebarToggle={sidebarToggle} isSidebarOpen={isSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} sidebarToggle={sidebarToggle} />
    </div>
  );
}

export default App;
