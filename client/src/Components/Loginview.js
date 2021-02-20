import React from 'react'

import { login } from '../redux/action/ActionCreater'
import { useDispatch } from 'react-redux';

import '../assets/css/Loginview.css'

export default function Loginview() {

    const dispatch = useDispatch();

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
                    <button onClick={() => {
                        localStorage.setItem('logininfo', 'true');
                        dispatch(login());
                    }}>login</button>
                </form>
            </div>
        </div>
    );
}