import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './TopNav.module.css'

function TopNav() {
    let logOutHandler = () =>{

    }
    return (
        <header className={styles.header}>
            <Link to='/'>
                <div className={styles.logo}>Schedule</div>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to='/auth'>Login</Link>
                    </li>
                    <li>
                        <button onClick={logOutHandler}>Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default TopNav