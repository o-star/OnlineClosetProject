import React from 'react'
import axios from 'axios'

import { login } from '../redux/action/ActionCreater'
import { useDispatch } from 'react-redux';

import '../assets/css/Loginview.css'

export default function Loginview() {

    const dispatch = useDispatch();
    let idtext, pwtext;

    const onLoginClick = async (e) => {
        e.preventDefault();

        let res = await axios.post('/api/login', {
            id: idtext,
            password: pwtext
        });
        console.log(res);

        // localStorage.setItem('logininfo', 'true');
        // dispatch(login());
    };

    return (
        <div className='loginsection'>
            <div className='subsection'>
                <form className='loginform'>
                    <div>
                        <span>ID : </span>
                        <input type={Text} onChange={(e) => {
                            idtext = e.target.value
                        }} />
                    </div>
                    <div>
                        <span>PW : </span>
                        <input type='password' onChange={(e) => {
                            pwtext = e.target.value
                        }} />
                    </div>
                    <button onClick={onLoginClick}>login</button>
                </form>
            </div>
        </div>
    );
}