import React, { useState, useEffect } from 'react'
import styles from './Form.module.css'

function Form(props) {
    let [emailNotValid, setEmailNotValid] = useState(false)
    let [purposeNotValid, setPurposeNotValid] = useState(false)
    let [nameNotValid, setNameNotValid] = useState(false)

    useEffect(() => {
        if (props.name.trim().length >= 1 && props.purpose.trim().length >= 1 && props.email.includes('@') && props.email.includes('.com')) {
            props.setIsActive(true)
        } else {
            props.setIsActive(false)
        }
    }, [props, props.name, props.purpose, props.email])

    useEffect(() => {
        if (props.email.trim().length >= 1 && props.email.includes('@') && props.email.includes('.com')) {
            setEmailNotValid(false)
        }
    }, [props.email])

    let textChangeHandler = (e) => {
        props.setName(e.target.value)
        setNameNotValid(false)
    }

    let purposeChangeHandler = (e) => {
        props.setPurpose(e.target.value)
        setPurposeNotValid(false)
    }

    let emailChangeHandler = (e) => {
        props.setEmail(e.target.value)
    }
    let formSubmitHandler = () => {

    }
    let textBlurHandler = () => {
        if (props.name.trim().length === 0) {
            setNameNotValid(true)
        } else {
            setNameNotValid(false)
        }
    }
    let emailBlurHandler = () => {
        if (props.email.trim().length === 0 && !props.email.includes('@') && !props.email.includes('.com')) {
            setEmailNotValid(true)
        } else {
            setEmailNotValid(false)
        }
    }
    let purposeBlurHandler = () => {
        if (props.purpose.trim().length === 0) {
            setPurposeNotValid(true)
        } else {
            setPurposeNotValid(false)
        }
    }
    return (
        <div className={styles.body}>
            <div className={styles.header}>
                <h4>Enter your information</h4>
            </div>
            <div className={styles.header}>
                <h1>Personal Data</h1>
            </div>
            <div className={styles.form}>
                <form onSubmit={formSubmitHandler}>
                    <div>
                        <label>Name</label>
                        <input

                            type='text'
                            placeholder='Please Enter your name'
                            value={props.name}
                            onChange={textChangeHandler}
                            onBlur={textBlurHandler}
                            required
                        />
                        {nameNotValid && <p>Name must be inputed</p>}
                    </div>
                    <div>
                        <label>Purpose Of meeting:</label>
                        <input

                            type='text'
                            placeholder='Please Enter meeting purpose'
                            value={props.purpose}
                            onChange={purposeChangeHandler}
                            onBlur={purposeBlurHandler}
                            required
                        />
                        {purposeNotValid && <p>Purpose must be inputed</p>}
                    </div>
                    <div>
                        <label>Email:</label>
                        <input

                            type='email'
                            placeholder='Please Enter your email'
                            value={props.email}
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                            required
                        />
                        {emailNotValid && <p>Email must be inputed</p>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form