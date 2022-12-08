import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { clearAuthState, selectUser } from '../store/authSlice';

// Validate user with jwt -------------------------- DONE
// Send jwt on authenticated requests (handle 401?)
// Log out? ---------------------------------------- DONE

const Home = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  const onLogOut = () => {
    localStorage.removeItem('token')
    dispatch(clearAuthState())
  }
  

  return (
    <div>{user ?
        <>
        Hello {user.name}
        <div onClick={onLogOut}>Log out</div>
        </> : 
      <> 
      <NavLink style={{}} to="/signup">
          Sign Up
        </NavLink>
        <NavLink style={{}} to="/login">
          Login
        </NavLink>
        </>}    
    </div>
  )
}

export default Home
