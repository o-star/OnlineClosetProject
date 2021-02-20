import React from 'react'
import '../assets/css/Homeview.css'

import { logout } from '../redux/action/ActionCreater'
import { useDispatch } from 'react-redux';

export default function Homeview() {

    const dispatch = useDispatch();

    return (
        <div className="entire-page">
            <div className="circle1"></div>
            <button onClick={() => {
                localStorage.removeItem('logininfo');
                dispatch(logout());
                window.location.href = '/';
            }}>logout</button>
        </div>
    );
} 