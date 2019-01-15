import React, {Component} from 'react';
import { connect} from 'react-redux';

export default (WrappedComponent) => { //HOC is a component that is returned form a function.
    class Auth extends Component {

        componentDidMount() {
            this.checkAuth();
        }

        componentDidUpdate() {

            console.log('Component Did Update')
           this.checkAuth();
        }

        checkAuth() {
            const {auth, history} = this.props;
            if(!auth) {
                history.push('/sign-in')
            }
        }

        render() {
            return <WrappedComponent {...this.props}/>
        }
    }

    function mapStateToProps(state) {
        return {
            auth : state.user.auth
        }
    }

    return connect(mapStateToProps)(Auth)

}