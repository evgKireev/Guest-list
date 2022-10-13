import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.scss';
import Users from './components/Users';
import Success from './components/Success';

const URL_API = 'https://reqres.in/api/users';
function App() {
  const [users, setUsers] = useState([]);
  const [ivites, setIvites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await axios.get(URL_API);
        setUsers(data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    }
    getUsers();
  }, []);

  const onClickIvites = (id) => {
    if (ivites.includes(id)) {
      setIvites(ivites.filter((value) => value !== id));
    } else {
      setIvites([...ivites, id]);
    }
  };

  return (
    <div className="App">
      {closed ? (
        <Success count={ivites.length} />
      ) : (
        <Users
          onClick={() => setClosed(true)}
          ivites={ivites}
          item={users}
          isLoading={isLoading}
          onClickIvites={(id) => onClickIvites(id)}
        />
      )}
    </div>
  );
}

export default App;
