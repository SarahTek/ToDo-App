import React from 'react'
import "../App.css";
import TaskList from './TaskList.js';
import TaskForm from './TaskForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import TaskListContextProvider from '../contexts/TaskListContext';
import Header from "./Header";
import LoginButton from './Login';
import LogoutButton from './Logout';
import Profile from './profile';

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <LoginButton />
          <LogoutButton />
          <Profile />
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>

  )
}

export default withAuth0(App);
