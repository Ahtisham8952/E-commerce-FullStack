import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDisplayUser } from '../context/UserContextProvider';

const Profile = () => {
  const { user, setUser } = useDisplayUser();
 

  

  if (!user || !user.email) {
    return <div>Please Login</div>;
  }

  return (
    <div>
      <h2>Welcome: {user.email}</h2>
      <p>Username: {user.username}</p>
      <p>Full Name: {user.fullName}</p>
      <img src={user.avatar} alt="User Avatar" />
      
    </div>
  );
};

export default Profile;
