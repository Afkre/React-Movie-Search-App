import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function Login() {

    const { handleLogin, loginError } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            handleLogin(email, password)
        } else {
            // setAlertClass('alert alert-danger')
        }
    }
    return (
        <div className='login'>
            <div>
                <img src='https://picsum.photos/1000/1000' alt='photo' />
            </div>
            <div className='login-form'>
                <div className={loginError ? 'alert alert-danger' : 'alert alert-danger d-none'} role="alert">
                    Please check your credentials!!!
                </div>
                <h1 className='form-title display-3'>Login</h1>
                <form id='login' onSubmit={(e) => handleSubmit(e)}>
                    <div className='mb-4'>
                        <label for='email' className='form-label display-4'>
                            Email
                        </label>
                        <input
                            type='email'
                            className='form-control'
                            id='email'
                            placeholder='Enter your email adress...'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>
                    <div className='mt-3'>
                        <label for='password' className='form-label display-4'>
                            Password
                        </label>
                        <input
                            type='password'
                            className='form-control'
                            id='password'
                            placeholder='Enter your password...'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>
                    <input
                        type='submit'
                        className='btn btn-primary form-control'
                        value='Login'
                    />
                </form>
            </div>
        </div>
    );
}