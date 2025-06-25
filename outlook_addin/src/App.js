import React, { useEffect, useState } from 'react';
import LoginForm from './components/LoginForm';
import ContactPanel from './components/ContactPanel';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token)
    if(token!='' && token!=undefined && token!='undefined'){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
    //if (token) 
  }, []);

  const handleLogin = (success) => {
    if (success) setIsLoggedIn(true);
  };

  return (
    <div style={{ padding: '40px' }}>
      {!isLoggedIn ? <LoginForm onLogin={handleLogin} /> : <ContactPanel setIsLoggedIn={setIsLoggedIn}/>}
    </div>
  );
}

export default App;