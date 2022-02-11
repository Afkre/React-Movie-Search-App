import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function Navbar() {
    const navigate = useNavigate();
    const { credentials, login, handleLogOut } = useContext(AuthContext);


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
                <a className="navbar-brand" href="/">React Movie App</a>
                <div className='buttons'>
                    {
                        login ?
                            <div className='d-flex'>
                                <h1 className='text-capitalize text-light'>
                                    {credentials.firstName + ' ' + credentials.lastName}
                                </h1>
                                <button
                                    className='btn btn-outline-light mx-2'
                                    onClick={handleLogOut}
                                >
                                    Log Out
                                </button>
                            </div> : (
                                <>
                                    <button
                                        type='button'
                                        className='btn btn-outline-light mx-2'
                                        onClick={() => navigate('/login')}
                                    >
                                        Login
                                    </button>
                                    <button
                                        type='button'
                                        className='btn btn-outline-light mx-2'
                                        onClick={() => navigate('/register')}
                                    >
                                        Register
                                    </button>
                                </>
                            )
                    }

                </div>
            </nav>
        </div>
    );
}