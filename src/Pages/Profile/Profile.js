import React, { useState } from 'react';
import './style.css'
import {Container} from 'react-bootstrap'
import Image from '../../images/avatar.jpeg'
import './style.css'
import { UserAction } from '../../redux/Action';
import { useDispatch } from 'react-redux';

import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const Profile = () => {
     const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [images, setImages] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.UserHolder)
    const [urlImage, setUrlImage] = useState(null);

    const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true)
        try {
            const data = new FormData();
            const filename = images.name;
            data.append("user_profile", images);
            data.append("file.originalname", filename);
            
            const imageURL = await axios.post("http://localhost:8080/api/v1/user_profile", data);
            // console.log(imageURL.data)
        
            const info = { username: name, email, password, userId: user._id, profilePic: imageURL.data }
            const res = await axios.put(`http://localhost:8080/api/v1/updateUser/${user._id}`, info)
            dispatch(UserAction(res.data.user))
            console.log(res.data.user)
            setIsLoading(false)
            setName('');
            setEmail('');
            setPassword('');

        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }

}
  return (
    <div id='profile'>
        <Container>
              <div className='fr_head'>
                  <h2>Edit your profile</h2>
                  { error && <p className="error_text">{ error }</p> }
              <div className="image_holder">
                <div className='im_h'>
                          <img src={ images ? URL.createObjectURL(images) : Image} alt="" />
                </div>
              </div>
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
                  <div className='form_inp_holder'>
                    <label>Profile</label>
                    <input type="file" className='image-input' placeholder='Upload a profile picture' required onChange={ (e) => setImages(e.target.files[0]) } />
                </div>
                  <button type='submit' onClick={ handleSignUp }>{ !isLoading ? 'Update your profile' : <Spinner animation="border" /> }</button>
              </form>
        </Container>
    </div>
  )
}

export default Profile