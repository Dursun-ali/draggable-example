import React, { useState } from 'react';
import './App.css';
import Dashboard from './views/Dashboard';

function App() {
  const[buttonActive,setButtonActive]=useState(false);
  return (
    <div className='flex items-center justify-center h-screen bg-gray-800'>
      <div>
        <div className='w-[360px] sm:w-[600px] flex justify-center text-white mb-6 text-[28px]'>
          Draggabble Example
        </div>
        <Dashboard
        buttonActive={buttonActive}
        setButtonActive={setButtonActive}
        />
        <div className='flex justify-end'>
        <button onClick={()=>setButtonActive(true)} className='bg-blue-800 rounded-lg font-medium px-6 py-3 text-white'>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
