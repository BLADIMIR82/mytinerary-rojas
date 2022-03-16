import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import userActions from '.././redux/actions/userActions';
import {Link as LinkRouter } from 'react-router-dom';
import Alert from '../componentes/Snackbar';
import  apiCities from "../componentes/apicities"

 function SignUp(props) {
  let form = document.getElementById("formIn")

  const handleSubmit = (event) => {
    event.preventDefault()
    const userData={
      firstName:event.target[0].value,
      lastName:event.target[1].value,
      email:event.target[2].value,
      password:event.target[3].value,
      photoURL:event.target[4].value,
      chooseCountry:event.target[5].value,
      from:"form-Signup"     
  }
  props.signUpUser(userData)
  form.reset()
  
}
// alert(props.message.message)
  console.log(props.message)

  
  return (
    <div className="formsingup">
      <Alert/>
      <div className="container">
      <div>
      <h1>Create your MyTinerary account !!</h1>
      <h2>Already have an account? <LinkRouter to={"/signin"}>Sign In</LinkRouter>.</h2>
      </div>
        <div class="screen">
          <div class="screen__content">
            <form className ="login"   onSubmit={handleSubmit} id="formIn">
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  class="login__input"
                  placeholder=" You Firts Name"
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  class="login__input"
                  placeholder=" You Last Name"
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  class="login__input"
                  placeholder=" You Email"
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  class="login__input"
                  placeholder="Password"
                />
              </div>
              <div class="login__field">
                <i class="login__icon fas fa-user"></i>
                <input
                  type="text"
                  class="login__input"
                  placeholder=" Select Avatar"
                />
              </div>
              <select class="login__input">
                <option value="Select-City">Select City</option>
                {apiCities.map(cities=>{
                  return(
                    <option  key = {cities.name} value={cities.name}> {cities.name} </option>
                  )


                })}
                
              </select>
              <button class="button login__submit">
                <span class="button__text"> Sing Up</span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
           
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
    signUpUser: userActions.signUpUser,
    
}
const mapStateToProps = (state) => {
	return {
		snackbar: state.userReducer.snackbar
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
