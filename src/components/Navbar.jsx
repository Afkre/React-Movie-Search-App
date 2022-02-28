import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from "../auth/firebase-config";

export default function Navbar() {
    const navigate = useNavigate();
    const { currentUser } = useContext(AuthContext);

    const handleLogOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
                <a className="navbar-brand" href="/">React Movie App</a>
                <div className='buttons'>
                    {
                        currentUser ?
                            <div className='d-flex'>
                                <h1 className='text-capitalize text-light'>
                                    {currentUser.displayName}
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