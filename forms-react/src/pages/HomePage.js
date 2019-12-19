import React from 'react';
import AuthContext from '../AuthContext';
import { NavLink } from 'react-router-dom';

class HomePage extends React.Component {
    renderWelcomeLoginRegister(context) {
        if(context.currentUser) {
            return (<h3>Welcome, { context.currentUser.username }</h3>);
        }
        else {
            return (
                <div>
                    <h1>This is the home page. Please login or register</h1>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </div>
            );
        }
    }

    static contextType = AuthContext;

    componentDidMount() {
        if(!this.context.currentUser) {
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <AuthContext.Consumer>
                {
                    context => {
                        return (
                            <div className="home-container">
                                { this.renderWelcomeLoginRegister(context) }
                            </div>
                        );
                    }
                }
            </AuthContext.Consumer>
        );
    }
}

export default HomePage;