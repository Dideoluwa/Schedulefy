import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './TopNav.module.css'
import { authActions } from './redux-store/Index';

function TopNav() {
    let loggedIn = useSelector(state => state.auth.isLoggedIn)
    let expTime = useSelector(state => state.auth.expirationTime)
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let logOutHandler = () => {
        dispatch(authActions.logout())
        navigate('/auth')
    }
    useEffect(() => {
        let timer = setTimeout(() => {
            dispatch(authActions.logout())
        }, expTime)
        return () => {
            clearTimeout(timer)
        }
    })
    return (
        <header className={styles.header}>
            <Link to='/'>
                <div className={styles.logo}>Schedule</div>
            </Link>
            <nav>
                <ul>
                    {!loggedIn && <li>
                        <Link to='/auth'>Login</Link>
                    </li>}
                    {loggedIn && <li>
                        <button onClick={logOutHandler}>Logout</button>
                    </li>}
                </ul>
            </nav>
        </header>
    )
}

export default TopNav