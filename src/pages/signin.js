import { connect } from 'react-redux';
import userActions from '.././redux/actions/userActions';
import {Link as LinkRouter} from "react-router-dom"
import Alert from '../componentes/Snackbar';

function SignIn(props) {

	console.log(props)
	const handleSubmit = (event) => {
		event.preventDefault()
		const logedUser = {
			email: event.target[0].value,
			password: event.target[1].value,
			from: "form-Signin"
		}
		props.signInUser(logedUser)
		
	}

  return (
    <div className="formlogin">
		 <Alert />
    <div class="container">
	<div>
      <h1>Wellcome!! your MyTinerary</h1>
		<h2>Don't have an account? <LinkRouter to={"/signup"}>SingUp</LinkRouter> </h2>
      </div>
	<div class="screen">
		<div class="screen__content">
			<form class="login1" onSubmit={handleSubmit}>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="Please, enter your Email"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password"/>
				</div>
				<button class="button login__submit">
					<span class="button__text">Log In</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>	
                <button class="button login__submit">
					<span class="button__text"> Sing up with Google</span>
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
	signInUser: userActions.signInUser,

}
const mapStateToProps = (state) => {
	return {
		message: state.userReducer.message
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);