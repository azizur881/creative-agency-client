import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import firebaseConfig from './firebase.config';
import  "firebase/auth";
import { UserContext } from '../../App';
import { Button } from 'react-bootstrap';
import './Login.css'


const Login = () => {
    const [loggedInUser , setLoggedInUser] =  useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
    }
    const handleGoogle = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName , email} = result.user
            const signInUser ={name:displayName , email}
            setLoggedInUser(signInUser)
            history.replace(from)
          })
    }
    return (
        <div >
            <Button id="google-btn" style={{textDecoration:"none",fontWeight:"400"}} onClick={()=>handleGoogle()}>Continue with google</Button>
      
                  </div>
    );
};
export default Login;