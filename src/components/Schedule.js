import React from 'react'
import Calendar from 'react-calendar/dist/umd/Calendar'
import Time from './Time'
import DateInfo from './DateInfo'
import styles from './Schedule.module.css'

function Schedule(props) {
    return (
        // <div className=''>
            <div className={styles.wrapper}>
                <div className={styles.wrapper__init}>
                    {/* <div className={styles}> */}
                        <div>
                            <DateInfo date={props.date} />
                        </div>
                        <div className={styles.wrapper_calender}>
                            <Calendar minDate={new Date()} onChange={props.onChange} value={props.date} />
                        </div>
                    {/* </div> */}
                </div>
                <div>
                    <Time setShow={props.setShow} setTimer={props.setTimer} setIsActive={props.setIsActive} time={props.time} />
                </div>
            </div>
        // </div>
    )
}

export default Schedule