import React, {Component} from 'react'
import classes from './Auth.module.sass'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

class Auth extends Component {
  signInHandler = () => {

  };
  signUpHandler = () => {

  };
  submitHandler = event => {
    event.preventDefault()
  };

  render() {
    return(
      <div className={classes.Auth}>
        <div>
          <h1>Authorization</h1>
          <form className={classes.AuthForm} onSubmit={this.submitHandler}>
            <Input
              label = "Email"
            />

            <Input
              label = "Password"
              errorMessage="errorMsg"
            />

            <Button type="success" onClick={this.signInHandler}
            >
              Sign in
            </Button>

            <Button type="primary" onClick={this.signUpHandler}
            >
              Sign up
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth