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
            //do something else with res
        }).catch(err => {
            //do something else with err
        })
    }

    return (
      <button className="button-logout " onClick={logOut}>Log out</button>
    )
}

export default LogOut