import React  from 'react'
import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import Search from './components/Users/Search';
import axios from 'axios';
import './App.css'

class App extends React.Component{


  state={
    users:[],
    loading : false
  }



  searchUsers= async text=>{
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);


    this.setState({users : res.data.items, loading:false});
  };



  render(){
    //return React.createElement() create new div or a or i something like that.

    return (
      <div className="App">
        <Navbar/>
        <div className='container'>
          <Search searchUsers={this.searchUsers}/>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }

  
}

export default App;
