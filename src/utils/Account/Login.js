import React, { useState } from 'react';
import './style.css'
import { Container } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';  
import {useNavigate, Link} from 'react-router-dom';
import { UserAction } from '../../redux/Action';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);  
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSignUp = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        if ( email === '' || password === '') {
            setError("Pleas all input are required");
        } else {
            try {
                const res = await axios.post("http://localhost:8080/api/v1/signin", { email, password })
                setIsLoading(false)
                dispatch(UserAction(res.data));
                navigate('/')   
            } catch (error) {
                
                setError(error.message)
                setIsLoading(false)
            }
        }
    }
    return (
        <div id='signUp'>
            <Container>
                <div className='fr_head'>
                    <h2>Login</h2>
                    <p>Open your account to see your expense</p>
                    { error && <p className="error_text">{ error }</p> }
                </div>
                <form>
                    
                    <div className='form_inp_holder'>
                        <label>Email</label>
                        <input type="email" placeholder='Enter your email' required value={ email } onChange={ (e) => setEmail(e.target.value) } />
                    </div>
                    <div className='form_inp_holder'>
                        <label>Password</label>
                        <input type="password" placeholder='Enter your password' required value={ password } onChange={ (e) => setPassword(e.target.value) } />
                    </div>
                    <button type='submit' onClick={ handleSignUp }>{ !isLoading ? 'Login' : <Spinner animation="border" /> }</button>
                </form>

                <div className="fr_footer">
                    <hr />
                    <p><span><Link to="/signUp">SignUp</Link></span> to create your account.</p>
                </div>

            </Container>
        </div>
    )
}

export default Login