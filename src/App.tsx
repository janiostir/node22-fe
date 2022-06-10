import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Card from './components/Card';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wrapper from './components/Wrapper';
import CreatePost from './pages/CreatePost';
import axios from 'axios';
import {UserDto} from './classes/UserDto';
import Me from './pages/Me';

function App() {

  const [user,setUser] = useState<UserDto>(new UserDto(0, '', '', ''));


  const currentUser = async () => {
    try{
      const res = await axios.get('http://localhost:8080/users/profile', {withCredentials: true});

      if(res.status == 200){
        console.log(res.data);
        setUser(res.data);
      }
    }
    catch (e){

    }
  }

  useEffect( () => {
    currentUser();
  }, []);


  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/create'} element={<CreatePost />} />
          <Route path={'/me'} element={<Me user={user}/>} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
