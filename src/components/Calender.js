import React from 'react'
import './Calender.css'
import Info from './Info'
import { Outlet } from 'react-router'
import Nav from './Nav'

function Calender(props) {
    return (
        <div className='calender_wrapper'>
            <div className="calender_wrapper__inner__wrapper">
                <div className='calender_wrapper__inner__wrapper__info'>
                    <Info dates={props.dates} show={props.show} timer={props.timer} />
                </div>
                <div className='calender_wrapper__inner__wrapper__outlet'>
                <Outlet />
                </div>
            </div>
            <Nav loading = {props.loading} onSubmit = {props.onSubmit} onClickFor={props.onClickFor} onClick={props.onClick} disabled={props.disabled} />
        </div>
    )
}

export default Calender