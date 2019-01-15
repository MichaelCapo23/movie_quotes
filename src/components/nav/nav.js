import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions'
import './nav.scss';
import SideNav from './side_nav';

class Nav extends Component {
    state = {
        CommonLinks: [
            {
                text: "Home",
                to: '/',
            },
            {
                text: "About Us",
                to: '/about'
            },
            {
                text: "Movie List",
                to: '/movie-list'
            }
        ],
        noAuthLinks: [
            {
                text: "Sign In",
                to: '/Sign-in'
            },
            {
                text: "Sign Up",
                to: '/Sign-up'
            },
        ],
        AuthLinks: [
            {
                text: "Private Movie List",
                to: "/movie-list/private"
            },
            {
                text: "Movie Quotes",
                to: "/movie-quotes"
            }
        ]
    };

    buildLink(link) {
        return (
            <li key={link.to}>
                <Link to={link.to}>{link.text}</Link>
            </li>
        )
    }

    handleSignOut = () => {
        console.log("Sign Out Button CLicked");
        this.props.signOut();
    };


    renderLinks() {
        const {AuthLinks, CommonLinks, noAuthLinks} = this.state;
        const {auth} = this.props;
        let links = [...CommonLinks];
        if (auth) {
            links = [...links, ...AuthLinks].map(this.buildLink);
            links.push(
                <li key={"sign-out"} className={"sign-out"}>
                    <button onClick={this.handleSignOut} className={"btn blue"}>Sign Out</button>
                </li>
            )
        } else {
            links = [...links, ...noAuthLinks].map(this.buildLink);
        }
        return links
    }


    render() {

        const links = this.renderLinks();

        return (
            <Fragment>
                <nav className={"blue darken-2"}>
                    <Link className={"brand-logo"} to={'/'}>Movie Quotes</Link>
                    <a href={"#"} data-target="side-nav" className={"sidenav-trigger"}>
                        <i className={'material-icons'}>menu</i>
                    </a>
                    <ul className={"right hide-on-med-and-down"}>
                        {links}
                    </ul>
                </nav>
                <SideNav links={links} />
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {
    signOut,
})(Nav)