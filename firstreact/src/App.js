import React  from 'react'
import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import Search from './components/Users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';
import './App.css'

class App extends React.Component{

  state={
    users:[],
    loading : false,
    alert:null
  }

  searchUsers= async text=>{
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users : res.data.items, loading:false});
  };

    //Clear Users
  clearUsers= () =>{this.setState({users: [], loading:false})
  };

  
    // Set Alert
    setAlert = (msg,type)=>{ this.setState({alert:{msg, type}});

    setTimeout(()=> this.setState({alert:null}), 5000);

  }

  render(){
    //return React.createElement() create new div or a or i something like that.

    const{users , loading } = this.state;



    return (
      <div className="App">
        <Navbar/>
        <div className='container'>
          <Alert alert={this.state.alert}/>
          <Search searchUsers={this.searchUsers} clearUsers = {this.clearUsers} showClear={ this.state.users.length>0 ? true: false} setAlert={this.setAlert} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }

  
}

export default App;
