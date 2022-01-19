
import SignInForm from './components/Login/SignInForm'

import SignUpForm from './components/Login/SignUpForm';
import { Route, Switch, Redirect, } from "react-router-dom";
import Profil from './components/Profil/Profil';

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import ProfilCard from './components/Profil/ProfilCard/ProfilCard';

import ContactContain from './components/Contact/ContactContain';
import Aboutus from './components/About us/Aboutus';
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "./components/JS/actions/userActions";

import React, { useEffect } from "react";
import Contactmain from './components/Contact/Contactmain';
import Postuele from './components/Acceil/Jobs/JobPart/Postuele'




const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const loading = useSelector((state) => state.userReducer.loading);
 useEffect(() => {
    dispatch(getProfile());
  }, [isAuth]);
  return (
    <div>
 <Switch>
      
          <Route path="/" exact>
          <Home />
          </Route>


          <Route path="/postuler" exact>
         <Postuele/>
          </Route>






          

      <Route
        exact
        path="/login-page"
        render={(props) => <SignInForm {...props} />}
      />

<Route
        exact
        path="/about-page"
        render={(props) => <Aboutus {...props} />}
      />



<Route
          exact
          path="/profile-page"
          render={(props) => <Profil {...props} />}
        />

<Route
          exact
          path="/contact-page"
          render={(props) => <Contactmain {...props} />}
        />

   
   <Route
          exact
          path="/register-page"
          render={(props) => <SignUpForm {...props} />}
        />


          
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
