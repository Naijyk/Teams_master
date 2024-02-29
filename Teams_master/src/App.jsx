import React from 'react'
import NavMenu from './components/NavMenu';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ConfigurationsPage from './pages/ConfigurationsPage';
import TeamsPage from './pages/TeamsPage';
import { useState } from 'react';
import { Context } from './context';

const App = () => {

  const [ teams, setTeams ] = useState([]);
  const [ users, setUsers ] = useState([]);

  const addTeam = new_team => setTeams([...teams, new_team]);

  const addUser = new_user => setUsers([...users, new_user]);

  const deleteCard = id => setUsers(users.filter(el => el.id !== id));

  return (
    <div>
      <Context.Provider value={{ users, teams, addUser, addTeam, deleteCard }}>
        <NavMenu />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/configurations' element={<ConfigurationsPage />} />
          <Route path='/teams' element={<TeamsPage />} />
        </Routes>
      </Context.Provider>
    </div>
  )
}

export default App