import React, { Component } from 'react'
import Navbar from './components/layout/Navbar';
import UserItem from './components/Users/UserItem';
import './App.css'

class App extends React.Component{

  render(){
    //return React.createElement() create new div or a or i something like that.

    const name = 'Şafak Semerci'
    return (
      <div className="App">
        <Navbar/>
        <UserItem/>
      </div>
    );
  }


  
}

export default App;
