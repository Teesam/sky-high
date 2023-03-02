import './App.css';
import TopNavbar from './components/layouts/TopNavBar/TopNavbar';
import Dashboard from './pages/dashboard/Dashboard';
import React from 'react';
import ChartsLayout from './components/layouts/Charts';

function App() {
  return (
    <div className='app'>
      <TopNavbar />
      <Dashboard />
      {/* <ChartsLayout /> */}
    </div>
  )
}

export default App;
