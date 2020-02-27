import React from 'react';
import './App.css';
import  PostsList  from "./Components/PostsList";
import PostInfo from './Components/postInfo';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Components/Nav';



function App()  {
    return (
      <Router>
        <div className='App'> 
          <Nav/>
          <Switch>
              <Route path='/posts' component={PostsList}/>
              <Route path='/post-info/:postId/:userId' component={PostInfo}/>

          </Switch>
        </div>
      </Router>   
    );
}



export default App;