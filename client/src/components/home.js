import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { selectUser } from '../store/authSlice';

 const Home = () => {
  const user = useSelector(selectUser)

  console.log('user', user)

  return (
    <div>Hello {user ? user.name : ''}

      <NavLink style={{}} to="/signup">
        Sign Up
      </NavLink>
      <NavLink style={{}} to="/login">
        Login
      </NavLink>
    </div>
  )
}

export default Home
