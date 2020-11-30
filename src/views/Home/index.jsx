import React, {useContext} from 'react';
import {UserContext} from 'context/user'
import { useHistory } from 'react-router-dom';

import './styles.scss';

function Home() {
  const history = useHistory()
  const { user, logout } = useContext(UserContext);

  const logoutUser = () => {
    logout()
    history.push('/accounts/signup')
  }
  return (
    <div className='home'>
      <div>EMAIL: {user?.user?.email}</div>
      <div>NAME: {user?.user?.name}</div>
      <button onClick={logoutUser}>LOGOUT</button>
    </div>
  );
}

export default Home;
