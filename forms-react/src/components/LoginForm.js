import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <form onSubmit={ this.handleSubmit }>
                {/* <div>LOGIN FORM</div> */}
                {/* <div>
                    <input>{  }</input>
                </div> */}
            </form>
            
            // handleSubmit(e) {
            //     e.preventDefault();
            // }
        );

        // if(username === '') {
        //     alert("fill in your username");
        // }
    }
}

export default LoginForm;