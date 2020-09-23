import { addAxiosAuth, setModale } from '../../store/app'
import { setLogged } from '../../store/me'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button.js'
import React, { useState } from 'react'
import styled from 'styled-components'

const Register = (props) => {
    const dispatch = useDispatch()
    const api = useSelector(state => state.app.axiosInstance)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const handleSubmit =  event => {
        event.preventDefault()

        if (isLoading) return

        setIsLoading(true)
        setErrorMessage(null)
        setSuccessMessage(null)

        api.post('/api/register', { email, username, password }, { withCredentials: true })
            .then(response => {
                setIsLoading(false)
                if (response.data.payload.success) {
                    //window.localStorage.setItem('auth-token', response.data.payload.token)
                    dispatch(addAxiosAuth(response.data.payload.token))
                    dispatch(setLogged(true))
                    setSuccessMessage(response.data.payload.message)
                    setTimeout(() => dispatch(setModale(false)), 2000)
                }
                else {
                    setPassword('')
                    setErrorMessage(response.data.payload.message)
                }
            })
            .catch(error => {
                setIsLoading(false)
                setPassword('')
                setErrorMessage('Something went wrong.')
            })
    }

    return (
        <RegisterBox>
            <form onSubmit={ handleSubmit }>
                <div className="">
                    <label>Email</label>
                    <input onChange={ event => setEmail(event.target.value) } value={ email } type="email" required />
                </div>
                <div className="">
                    <label>Username</label>
                    <input onChange={ event => setUsername(event.target.value) } value={ username } type="text" required />
                </div>
                <div className="">
                    <label>Password</label>
                    <input onChange={ event => setPassword(event.target.value) } value={ password } type="password" required />
                </div>
                { errorMessage && <span style={ { color: 'red' } }>{ errorMessage }</span> }
                { successMessage && <span style={ { color: 'green' } }>{ successMessage }</span> }
                { isLoading && <span>is loading</span> }
                <br />
                <Button type="submit" value="S'inscrire" colored={ true } size="small" />
                <br />
            </form>
        </RegisterBox>
    )
}

export default Register;

const RegisterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div {
            width: 100%;
            margin-top: 12px;
            display: flex;
            justify-content: space-between;

            input {
                margin-left: 15px;
                border-radius: 5px;
            }
        }

        .text {
            margin: 6px 0;
            font-size: 15px;
        }
    }
`