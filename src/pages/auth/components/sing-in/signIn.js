import React, { useState } from 'react'
import { auth } from '../../../../config';
import { useHistory } from 'react-router-dom';
import '../styles.css';

function SignIn() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).then(res => {
            history.push('/main');
            //do something else with the response
        }).catch(err => {
            //do something with the error
        })
    }

    return (
      <div className='login-container'>
        <h1>Sign in to your account</h1>
        <input className="login-input" type='text' placeholder='Enter your email' value={email} onChange={e => setEmail(e.currentTarget.value)} />
        <input className="login-input" type='password' placeholder='Enter your password' value={password} onChange={e => setPassword(e.currentTarget.value)} />
        <button  className="login-button" onClick={signIn}>Sign In</button>
      </div>
    )
}

export default SignIn