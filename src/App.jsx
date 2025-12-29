// src/App.jsx
import React from 'react';
import ComplaintForm from './components/ComplaintForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Container for the form */}
      <div className="py-10">
        <ComplaintForm />
      </div>
    </div>
  );
}

export default App;
