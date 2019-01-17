import React, {Component} from 'react';
import SignInForm from './Sign_in_form';
import {connect} from 'react-redux';
import {signIn} from "../../actions";

class SignIn extends Component {

    handleSignIn = (values) => {
        console.log("sign in values: ", values);
        this.props.signIn(values)
    }

    render() {
        console.log("sign in props", this.props);
        return (
            <div>
                <h1 className="center">Sign In</h1>
                <div className="center">
                    <SignInForm onSubmit={this.handleSignIn} errorMessage={this.props.errorMessage}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.user.signInError
    }
}

export default connect(mapStateToProps, {signIn})(SignIn);