import React from 'react'
import styles from './Info.module.css'
import { useSelector } from 'react-redux'
function Info(props) {
    let name = useSelector(state => state.auth.name)
    return (
        <div className={styles.body}>
            <div className={styles.body_header}>
                <h2>{name}</h2>
            </div>
            <div className={styles.body_header}>
                <h1>Schdule a demo</h1>
            </div>
            <div className={props.show ? styles.date_show : styles.date}>
                <div>
                    <h4>Date:</h4>
                    <h3>{props.dates}</h3>
                </div>
                <div>
                    <h4>Time:</h4>
                    <h3>{`Scheduled time: ${props.timer}`}</h3>
                </div>

            </div>
        </div>
    )
}

export default Info