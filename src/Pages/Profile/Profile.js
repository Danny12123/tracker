import React from 'react';
import './style.css'
import {Container} from 'react-bootstrap'
import Image from '../../images/avatar.jpeg'

const Profile = () => {
  return (
    <div id='profile'>
        <Container>
              <div className='fr_head'>
                  <h2>Edit your profile</h2>
                  { error && <p className="error_text">{ error }</p> }
              </div>
              <div className="image_holder">
                <div className='im_h'>
                    <img src={Image} alt="" />
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
                    <input type="file" placeholder='Upload a profile picture' required onChange={ (e) => setImages(e.target.files[0]) } />
                </div>
                  <button type='submit' onClick={ handleSignUp }>{ !isLoading ? 'SignUp' : <Spinner animation="border" /> }</button>
              </form>
        </Container>
    </div>
  )
}

export default Profile