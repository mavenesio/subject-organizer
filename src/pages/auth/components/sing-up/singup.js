import React, { useState } from 'react'
import { auth } from '../../../../config';
import { useHistory } from 'react-router-dom';
import '../styles.css';

function SignUp() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = () => {
        auth.createUserWithEmailAndPassword(email, password).then(res => {
            history.push('/main');
            //do something with the response
        }).catch(err => {
            //do something with the error
        })
    }
    return (
        <div className='login-container'>
          <h1>Register your account</h1>
          <input
            className="login-input"
            type='text'
            placeholder='Enter your email'
            onChange={e => setEmail(e.currentTarget.value)}
          />
          <input
            className="login-input"
            type='password'
            placeholder='Enter your password'
            onChange={e => setPassword(e.currentTarget.value)}
          />
          <button className="login-button" onClick={signUp}>Sign Up</button>
        </div>
    )
}

export default SignUp