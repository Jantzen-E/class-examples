import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="home-page-container">
                <h1>Home Page</h1>
                {/* { this.state.mode === 'login' ? this.renderLoginForm() : this.renderForgotPasswordForm() } */}
            </div>
        );
    }
}






export default HomePage;