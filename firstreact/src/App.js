import React, { Fragment,Component }  from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
import Navbar from './components/layout/Navbar';
import Users from './components/Users/Users';
import User from './components/Users/User';
import Search from './components/Users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css'

class App extends Component{

  state={
    users:[],
    user:{},
    loading : false,
    alert:null
  }

  searchUsers= async text=>{
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users : res.data.items, loading:false});
  };

    //Get Single Github User
    getUser = async (username) => {
      this.setState({loading:true})
      const res = await axios.get(`https://api.github.com/users/${username}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({user : res.data, loading:false});

    }

    //Clear Users
  clearUsers= () =>{this.setState({users: [], loading:false})
  };

  
    // Set Alert
    setAlert = (msg,type)=>{ this.setState({alert:{msg, type}});

    setTimeout(()=> this.setState({alert:null}), 5000);

  }

  render(){
    //return React.createElement() create new div or a or i something like that.

    const{users ,user, loading } = this.state;



    return (
      <Router>
      <div className="App">
        <Navbar/>
        <div className='container'>
          <Alert alert={this.state.alert}/>

          <Routes>
            {/*Render yerine element kullandım düzeldi.*/}
            <Route exact path='/' element={( 
            <Fragment>
              <Search searchUsers={this.searchUsers} clearUsers = {this.clearUsers} showClear={ this.state.users.length>0 ? true: false} setAlert={this.setAlert} />
              
              <Users loading={loading} users={users} />
              </Fragment>
            )} 
            />
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/user/:login' render={ props =>(
            
              <User getUser={this.getUser} user={user} loading={loading}/>
              
            ) } />
          </Routes>
               
        </div>
      </div>
      </Router>
    );
  }

}

export default App;
