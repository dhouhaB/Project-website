import React from 'react'
import SignInForm from './components/Login/SignInForm'

import SignUpForm from './components/Login/SignUpForm';
import { Route, Switch, Redirect, } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import ProfilCard from './components/Profil/ProfilCard/ProfilCard';
import ProfilScreen from './components/Profil/Mainscreen/ProfilScreen';
import ContactContain from './components/Contact/ContactContain';
import Aboutus from './components/About us/Aboutus';
const App = () => {
  return (
    <div>
 <Switch>
      
          <Route path="/" exact>
          <Home />
          </Route>

      <Route
        exact
        path="/login-page"
        render={(props) => <SignInForm {...props} />}
      />
   
   <Route
          exact
          path="/register-page"
          render={(props) => <SignUpForm {...props} />}
        />

<Route path="/me-page" exact>
          <ProfilCard />
          </Route>
          <Route path="/edit-page" exact>
          <ProfilScreen/>
          </Route>

          
          <Route path="/contact" exact>
          <ContactContain/>
          </Route>

          <Route path="/About" exact>
          <Aboutus/>
          </Route>








              <Redirect to="/" />

      
    </Switch>
    
  
  </div>
  )
}

export default App
