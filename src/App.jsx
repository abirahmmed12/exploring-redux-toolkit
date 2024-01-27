import React from 'react';
import './App.css'
import { FiUsers } from "react-icons/fi";
import AddUsers from './AddUsers';
import DeleteUsers from './DeleteUsers';
const App = () => {
  return (
    <>

<div className=' blur-background '>
      <div className='text-center '>
      <h1 className='text-3xl bg-white mb-2'>Welcome to UI </h1>
     <div className='text-5xl m-auto flex justify-center'> < FiUsers /></div>
      <h1>You can add user by clicking add user</h1>
      <h1>Also can Delete the by clicking delete the user</h1>
      </div>
    </div>
    <AddUsers></AddUsers>
    <DeleteUsers></DeleteUsers>
    </>
  );
};

export default App;