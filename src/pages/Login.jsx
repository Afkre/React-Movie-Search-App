import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

export default function Login() {

  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertClass, setAlertClass]= useState('alert alert-danger d-none')

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(email, password);
    //navigate('/')
    //navigate(1) Bu durumda bir sayfa ileri gider. -1 olduğunda da geri gider. İstenen değer girilebilir.
    if (email && password) {
      navigate('/');
    } else (
      setAlertClass('alert alert-danger')
    )
    email !== '' && password !== '' && navigate('/');
  }

  return (
    <div className='login' onSubmit={handleSubmit}>
      <div>
        <img
          src={"https://picsum.photos/1000/1000"}
          alt='photo'
        />
      </div> 
      
      <div className='login-form'>
        <div className={alertClass} role="alert">
        Please fill in the blanks!!!
      </div>
        <h1 className='form-title display-3'>Login</h1>
        <form id='login' action="">
          <div className='mb-4'>
            <label for="email" className='form-label display-4'>
              Email
            </label>
            <input
              type="email"
              className='form-control'
              id='email'
              placeholder='Enter your amail adress...'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className='mt-3'>
            <label for="password" className='form-label display-4'>Password</label>
            <input
              type="password"
              className='form-control'
              id='password'
              placeholder='Enter your password...'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <input
            type="submit"
            className='btn btn-primary form-control'
            value='Login'            
          />
        </form>
      </div>
    </div>
  );
}
