import React, { useState } from 'react';
import './style.css'
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import {useNavigate, Link} from 'react-router-dom'

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [images, setImages] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    if (name === '' || email === '' || password === '') {
        setError("Pleas all input are required");
    } else {
        try {
            // const data = new FormData();
            // const filename = images.name;
            // data.append("user_profile", images);
            // data.append("file.originalname", filename);
            // const imageURL = await axios.post("http://localhost:8080/api/v1/user_profile", data);
            
            const info = { username: name, email, password }

            const res = await axios.post("http://localhost:8080/api/v1/signup", info)
            navigate('/login')
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }

    }
}
return (
    <div id='signUp'>
        <Container>
            <div className='fr_head'>
                <h2>SignUp</h2>
                <p>Create an account to manage your expense</p>
                { error && <p className="error_text">{ error }</p> }
            </div>
            <form>
                <div className='form_inp_holder'>
                    <label>Full Name</label>
                    <input type="text" placeholder='Enter your name' required value={ name } onChange={ (e) => setName(e.target.value) } />
                </div>
                <div className='form_inp_holder'>
                    <label>Email</label>
                    <input type="email" placeholder='Enter your email' required value={ email } onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className='form_inp_holder'>
                    <label>Password</label>
                    <input type="password" placeholder='Enter your password' required value={ password } onChange={ (e) => setPassword(e.target.value) } />
                </div>
                {/* <div className='form_inp_holder'>
                    <label>Profile</label>
                    <input type="file" placeholder='Upload a profile picture' required onChange={ (e) => setImages(e.target.files[0]) } />
                </div> */}
                <button type='submit' onClick={ handleSignUp }>{ !isLoading ? 'SignUp' : <Spinner animation="border" /> }</button>
            </form>

            <div className="fr_footer">
                <hr />
                <p><span><Link to='/login'>Login</Link></span> into your account.</p>
            </div>

        </Container>
    </div>
)
}

export default SignUp