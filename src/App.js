import React, { createContext } from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Details from './Components/Details/Details';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import UserFeature from './Components/UserFeature/UserFeature';
import UserForm from './Components/UserForm/UserForm';

export const UserContext = createContext();
function App() {
  const [loggedInUser , setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser ,setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path ="/">
             <Home></Home>
              </Route>
                 <Route  path ="/service/:serve">
                    <Details/>
          </Route>
          <Route path ="/login">
          <Login></Login>
          </Route>
          <Route path="/userform">
            <UserForm></UserForm>
          </Route>
         
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}
export default App;
