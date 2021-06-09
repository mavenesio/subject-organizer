import React, { useEffect } from 'react';
import { auth } from '../../../../config';
import { useHistory } from 'react-router-dom';

import './styles.css';

function LogOut() {
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) history.push('/auth');
        })
    })
    const history = useHistory();

    const logOut = () => {
        auth.signOut().then(res => {
            history.push('/auth');
        }).catch(err => {
            console.log(err);
        })
    }

    return (
      <button className="button-logout " onClick={logOut}>Log out</button>
    )
}

export default LogOut