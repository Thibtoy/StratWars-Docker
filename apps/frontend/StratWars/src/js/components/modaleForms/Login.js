import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setModale, addAxiosAuth } from '../../store/app'
import { setLogged } from '../../store/me'
import styled from 'styled-components'

import Button from '../Button.js'

const Login = (props) => {
    const dispatch = useDispatch()
    const api = useSelector(state => state.app.axiosInstance)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const displayRegisterModale = () => dispatch(setModale({ type: 'register', title: 'Register' }))

    const handleSubmit = (event) => {
        event.preventDefault()

        if (isLoading) return


        setMessage(null)
        setIsLoading(true)

        api
            .post('api/login', { username: email, password }, { withCredentials: true })
            .then(response => {
                dispatch(addAxiosAuth(response.data.token))
                dispatch(setLogged(true))
                dispatch(setModale(false))
            })
            .catch(error => {
                setIsLoading(false)
                setPassword('')
                setMessage('Incorrect password or username')
            })
    }

    return (
        <LoginBox>
            <form onSubmit={ handleSubmit }>
                <div className="">
                    <label>Email :</label>
                    <input onChange={ event => setEmail(event.target.value) } type="email" name='email' required />
                </div>
                <div className="">
                    <label>Password :</label>
                    <input onChange={ event => setPassword(event.target.value) } type="password" required />
                </div>
                { message && <span style={ { color: 'red' } } >{ message }</span> }
                { isLoading && <span>is loading</span> }
                <br />
                <p className="text">Forgoted password? <a href='#'>Click Here</a></p>
                <Button type="submit" value="Sign In" colored={ true } size="small" />
                <p className="text">Not member yet?</p>
                <Button value="Sign Up" onClick={ displayRegisterModale } size="small" />
            </form>
        </LoginBox>
    )
}

const LoginBox = styled.div`
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
export default Login;