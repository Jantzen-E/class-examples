import React from 'react';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
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
                {/* { this.state.mode === 'login' ? this.renderLoginForm() : this.renderForgotPasswordForm() } */}
            </div>
        );
    }
}

export default LoginPage;