import React from 'react';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import TodoList from './components/TodoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='h-screen w-screen'>
      <Navbar />
      <div className="h-full w-full bg-gray-800 grid place-items-center">
        <div className='h-3/4 w-6/12 flex flex-col items-center bg-gray-100 rounded-xl py-8'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<LoginPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/todos' element={<TodoList />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
