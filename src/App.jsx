// src/App.jsx
import React, { useState } from 'react';
import ComplaintForm from './components/ComplaintForm';
import Dashboard from './components/Dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div>
      {/* Simple Navigation Header */}
      <nav className="bg-white border-b border-gray-200 px-6 py-3 flex gap-6 shadow-sm">
        <button 
          onClick={() => setCurrentPage('dashboard')}
          className={`text-sm font-bold ${currentPage === 'dashboard' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          DASHBOARD
        </button>
        <button 
          onClick={() => setCurrentPage('form')}
          className={`text-sm font-bold ${currentPage === 'form' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
        >
          NEW COMPLAINT
        </button>
      </nav>

      {/* Conditional Rendering */}
      {currentPage === 'dashboard' ? <Dashboard /> : <ComplaintForm />}
    </div>
  );
}

export default App;