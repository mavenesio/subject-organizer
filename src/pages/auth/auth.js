import React, { useState, useEffect } from 'react';
import SignIn from './components/sing-in/signIn';
import SignUp from './components/sing-up/singup';
import { auth } from '../../config';
import './styles.css';
import { useHistory } from 'react-router-dom';

function Auth() {
    const history = useHistory();
    const [authType, setAuthType] = useState('signIn');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) history.push('/main')
        })
    }, [])

    return (
        <div className='auth'>
            {authType === 'signIn' ?
                <div className='auth-container'>
                    <SignIn />
                    <p className="p-auth">New here? <span className="span-auth" onClick={() => setAuthType('signUp')}>Create account.</span></p>
                </div>
                :
                <div className='auth-container'>
                    <SignUp />
                    <p className="p-auth">Have an account? <span className="span-auth" onClick={() => setAuthType('signIn')}>Sign In.</span></p>
                </div>
            }
        </div>
    )
}

export default Auth