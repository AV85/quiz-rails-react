import React, {Component} from 'react'
import classes from './Auth.module.sass'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class Auth extends Component {

  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Enter correct email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Enter correct password',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      },
    }
  };

  signInHandler = () => {

  };

  signUpHandler = () => {

  };

  submitHandler = event => {
    event.preventDefault()
  };

  validateControl(value, validation) {
    if (!validation){
      return true
    }

    let isValid = true;

    if (validation.required){
      isValid = value.trim() !== '' && isValid
    }

    if (validation.email){
      isValid = validateEmail(value) && isValid
    }

    if (validation.minLength){
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  onChangeHandler = (event, controlName) => {
    console.log(`${controlName}: `, event.target.value);
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };
    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach(name=> {
      isFormValid = formControls[name].valid && isFormValid
    });

    this.setState({
      formControls, isFormValid
    })
  };

  renderInputs(){
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return(
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    });
  }

  render() {
    return(
      <div className={classes.Auth}>
        <div>
          <h1>Authorization</h1>
          <form className={classes.AuthForm} onSubmit={this.submitHandler}>

            {this.renderInputs()}

            <Button
              type="success"
              onClick={this.signInHandler}
              disabled={!this.state.isFormValid}
            >
              Sign in
            </Button>

            <Button
              type="primary"
              onClick={this.signUpHandler}
              disabled={!this.state.isFormValid}
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