import React from 'react';
import AuthContext from '../AuthContext';
import LoginForm from '../components/LoginForm';
import { withRouter } from 'react-router-dom';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'supersecretusername',
            password: 'supersecretpassword',
        };
        
        this.handleLogin = this.handleLogin.bind(this);
    }

    static contextType = AuthContext;

    handleLogin(e) {
        e.preventDefault();

        const username = this.state.username;
        const password = this.state.password;

        const user = this.context.login(username, password);

        if (user) {
            this.props.history.push('/home');
        }
    }

    

    componentDidMount() {
        const user = localStorage.getItem('currentUser');
        if (user) {
            this.context.currentUser = user;
        }
        if (this.context.currentUser) {
            this.props.history.push('/home');
        }
    }

    renderLoginForm() {
        return (
            <h1>Login Here</h1>
        );
    }

    renderForgotPasswordForm() {
        return (
            <h1>Forgot Password Form</h1>
        );
    }

    render() {
        return (
            <div className="login-page-container">
                <h1>LOGIN</h1>
                <form onSubmit={ this.handleLogin }>
                    <div>
                        <label>
                            <span>
                                Username<span>*</span>:
                            </span>
                            <input 
                                type="text"
                                value={ this.state.username }
                                onChange={ (e) =>this.setState({ username: e.target.value }) }
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>
                                Password<span>*</span>:
                            </span>
                            <input 
                                type="password"
                                value={ this.state.password }
                                onChange={ (e) =>this.setState({ password: e.target.value }) }
                            />
                        </label>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                    <div>
                        <button>Logout</button>
                    </div>
                </form>
                <LoginForm/>
                {/* { this.state.mode === 'login' ? this.renderLoginForm() : this.renderForgotPasswordForm() } */}
            </div>
        );
    }
}

export default withRouter(LoginPage);