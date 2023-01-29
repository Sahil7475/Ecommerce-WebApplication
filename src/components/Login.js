import React from 'react'
import ".//login.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
/* import { auth } from './firebasee'; 
import { auth } from './src/fire'; */
/* import './/firebase' */
/* import './/tp1' */
/* import './/firebase' */
/* import { auth } from './firebase'; */
import { auth } from "./firebase";

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/');
                }

            })
            .catch(error => alert(error.message))
    }

    const Register = (e) => {

        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //it succesfully create a new user with email and password
                console.log(auth);
                if (auth) {
                    history.push('/');
                }

            })
            .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <Link to="/">
                <img className='login_logo'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_umixnVplgh8Ivltsk9SG7v3fYbtl7QHH1w&usqp=CAU" alt="" />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' className='login_signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing in, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button className='login_registerButton' onClick={Register}>Create Your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login