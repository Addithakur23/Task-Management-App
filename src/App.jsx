//  import { useState,useEffect } from 'react'
// import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Link,Outlet } from 'react-router-dom'
// import Navbar from './pages/Navbar.jsx'
// const BASE_URL=import.meta.env.VITE_API_URL

// function App() { 
//   const [User, setUser] = useState(null)
// useEffect(() => {

//     fetch(`${BASE_URL}/api/me`,{credentials:'include'})
//     // fetch("/api/me",{credentials:'include'})
  
//   .then(res=>res.json())
//   .then(data=>{
//     if(data._id) {
//       setUser(data)
//       console.log(data)
//     }
//   })
//   .catch(err=> console.log(err))
// }, [])

//   return (
//     <>
//     {console.log(User)}
//     <Navbar user={User}  setUser={setUser}/>
//     </>
//   )
// }

// export default App

import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './pages/Navbar.jsx';

const BASE_URL = import.meta.env.VITE_API_URL;

function App() {
  const [User, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/me`, {
          method: "GET",
          credentials: "include"
        });

        if (!res.ok) {
          setUser(null);
          return;
        }

        const data = await res.json();

        if (data.user?._id) {
          setUser(data.user);
        }

      } catch (err) {
        console.log("Authentication Error:", err);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <Navbar user={User} setUser={setUser} />
    </>
  );
}

export default App;
