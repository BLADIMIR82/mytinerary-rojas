import { connect } from 'react-redux';
import userActions from '.././redux/actions/userActions';
import {Link as LinkRouter} from "react-router-dom"
import FacebookSignIn from '../componentes/FacebookSignIn';

function SignIn(props) {
	let form = document.getElementById("formIn")
		const handleSubmit = (event) => {
		event.preventDefault()
		const logedUser = {
			email: event.target[0].value,
			password: event.target[1].value,
			from: "form-Signup"
		}
		props.signInUser(logedUser)
		form.reset()
	}

  return (
    <div className="formlogin">
    <div className="container">
	<div>
      <h1>Wellcome!! your MyTinerary</h1>
		<h2>Don't have an account? <LinkRouter className='buttomlink3'  to={"/signup"}>SignUp</LinkRouter> </h2>
      </div>
	<div className="screen">
		<div className="screen__content">
			<form className="login1" onSubmit={handleSubmit}  id="formIn" >
				<div className="login__field">
					<input type="text" className="login__input" placeholder="Please, enter your Email"/>
				</div>
				<div className="login__field">
				
					<input type="password" className="login__input" placeholder="Password"/>
				</div>
				<button className="button login__submit">
					<span className="button__text">Sign In</span>
				</button>	
				<FacebookSignIn />
			</form>
				<div className="iconsocial1">
				<div>
					<h4>know more about us in !!</h4>
				</div>
				<div>
              <a href="https://www.facebook.com/"><img src="../imagenes/logofacebook.png" alt="img"  className="iconsocials" /></a>
               <a href="https://www.instagram.com/accounts/login/?hl=es&sour..."> <img src="../imagenes/instagram.png" alt="img"  className="iconsocials" /> </a>
                <a href= "https://www.youtube.com/"> <img src="../imagenes/youtube.png" alt="img"  className="iconsocials" /></a>
                <a href="https://mobile.twitter.com/i/flow/login"><img src="../imagenes/twitter.png" alt="img"  className="iconsocials" /> </a>
                </div>
				</div>

		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>

    </div>
  );
}
const mapDispatchToProps = {
	signInUser: userActions.signInUser,

}
const mapStateToProps = (state) => {
	return {
		message: state.userReducer.message
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);