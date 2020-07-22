import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setModale, addAxiosAuth } from '../store/app'
import styled from 'styled-components'
//import { setStorageUser } from '../utils/local-storage'

const Login = (props) => {
    const dispatch = useDispatch()
    const api = useSelector(state => state.app.axiosInstance)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const displayRegisterModale = () => dispatch(setModale({ type: 'register', title: 'Register' }))

    const handleSubmit = (event) => {
        event.preventDefault();

        setMessage(null)
        setIsLoading(true)

        api
            .post('api/login', { username: email, password }, { withCredentials: true })
            .then(response => dispatch(addAxiosAuth(response.data.token)))
            .catch(error => { throw error })
            .finally(() => {
                setIsLoading(false)
                dispatch(setModale(false))
            })
    }

    return (
        <LoginBox>
            { isLoading
                ? <span>is loading</span>
                : <form onSubmit={ handleSubmit }>
                    <div className="">
                        <label>Email :</label>
                        <input onChange={ event => setEmail(event.target.value) } type="email" name='email' required />
                    </div>
                    <div className="">
                        <label>Password :</label>
                        <input onChange={ event => setPassword(event.target.value) } type="password" required />
                    </div>
                    <br />
                    <Button type="submit">Sign In</Button>
                    <p>Not member yet? <span onClick={ displayRegisterModale }>Sign Up</span></p>
                    <p>Forgoted password? <a href='#'>Click Here</a></p>
                    { message && <span>{ message }</span> }
                </form>
            }
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
			margin-top: 10px;
			display: flex;
			justify-content: space-between;

			input {
				margin-left: 15px;
				border-radius: 5px;
			}
		}

		p {
			margin-top: 12px;
			font-size: 14px;
		}
	}
`

const Button = styled.button`
	padding: 7.5px 15px;
	background-color: rgb(0, 245, 0);
	border-radius: 5px;
	border-style: none;
	border 1px solid grey;
	box-sizing: border-box;
	font-size: 15.5px;
	outline: none;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	:active {
		box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.5) inset;
		transform: scale(0.98);
	}
`

export default Login;