


export default function Login() {
  return (
    <div className="formlogin">
    <div class="container">
	<div>
      <h1>Wellcome!! your MyTinerary</h1>
      </div>
	<div class="screen">
		<div class="screen__content">
			<form class="login">
        <div>
            <h3>Welcome!!</h3>
        </div>
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
			<div>
				<h3>Don't have an account? SingUp</h3>
			</div>
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
