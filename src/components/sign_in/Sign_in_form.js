import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from '../general/input';

let SignIn = props => {
    const {onSubmit, handleSubmit, errorMessage} = props;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <Field name={"email"} label={"Email"} component={Input}/>
            </div>
            <div className="row">
                <Field name={"password"} label={"Password"} type={"password"} component={Input}/>
            </div>
            <div className="row">
                <div className="col s12 right-align">
                    <button className={"blue darken-2 btn"}>Sign In</button>
                    <p className=" red-text text-darken-2 center">{errorMessage}</p>
                </div>
            </div>
        </form>

    )
};

function validate({email, password}) {
    const errors = {};
    if(!email) {
        errors.email = "please enter your email";
    }
    if(!password) {
        errors.password = "please enter your password";
    }

    return errors;
}

export default reduxForm({
    form : 'sign-in-form',
    validate,
})(SignIn);