import React from 'react'
import axios from 'axios'

import { login } from '../redux/action/ActionCreater'
import { useDispatch } from 'react-redux';

import '../assets/css/Loginview.css'

export default function Loginview() {

    const dispatch = useDispatch();

    const onLoginClick = async (e) => {
        e.preventDefault();

        let res = await axios.get('/api/login');
        console.log(res);

        localStorage.setItem('logininfo', 'true');
        dispatch(login());
    };

    return (
        <div className='loginsection'>
            <div className='subsection'>
                <form className='loginform'>
                    <div>
                        <span>ID : </span>
                        <input type={Text} />
                    </div>
                    <div>
                        <span>PW : </span>
                        <input type='password' />
                    </div>
                    <button onClick={onLoginClick}>login</button>
                </form>
            </div>
        </div>
    );
}