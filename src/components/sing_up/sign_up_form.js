import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from '../general/input';

const SignUpFrom = props => {
    const {onSubmit, handleSubmit} = props;
    return (
        /*handle submit pulls values from redux state and passes it the function we pass inside*/
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <Field name={"email"} label={"Email"} component={Input}/>
                <Field name={"password"} label={"Password"} size={'m6 s12'} type={"password"} component={Input}/>
                <Field name={"Confirmpassword"} label={"Password"} size={'m6 s12'} type={"password"} component={Input}/>
            </div>
            <div className="row center" >
                <div className="col s6">
                    <button className={"btn red darken-2 waves-effect waves-light"} type="button">reset</button>
                </div>
                <div className="col s6">
                    <button className={"btn light-blue waves-effect waves-light"}>Sign Up</button>
                </div>
            </div>
        </form>
    );
};

function validate({email, password, Confirmpassword}) { //gets called everytime the form is submitted, parameter names must match name on input fields
    const errors = {};
    if(!email) {
        errors.email = "please enter your email";
    }
    if(!password) {
        errors.password = "please create a password";
    }

    if(Confirmpassword !== password) {
        errors.Confirmpassword = "passwords do not match";
    }
    return errors;
}

export default reduxForm({
    form: 'sign-up-form',
    validate: validate
})(SignUpFrom);



