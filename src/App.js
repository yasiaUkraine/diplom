import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import { auth } from './firebase';
import Login from './component/Login';
import Account from './component/Account';
export const ID = '';


function App() {
  const [user, setUser] = useState('');
  const [id, setId] = useState('');

  const authListener = () => {
    auth.onAuthStateChanged(user => {
      if(user) {
        setUser(user);
      } else {
        setUser('');
      }
    })
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
      {id ? (
        <Account
          id = {id}
          setId = {setId}
        />
      ) : (
        <Login
          id = {id}
          setId = {setId}
        />
      )}
    </div>
  );
}

export default App;
