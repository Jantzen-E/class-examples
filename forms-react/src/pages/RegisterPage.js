import React from 'react';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                username: '',
                firstName: '',
                lastName: '',
                dateOfBirth: '',
                email: '',
                password: '',
                passwordConfirmation: '',
            },
            formErrors: {
                username: '',
                firstName: '',
                lastName: '',
                dateOfBirth: '',
                email: '',
                password: '',
                passwordConfirmation: '',
            },
            isFormValid: '',
            errorMessage: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(field, event) {
        const value = event.target.value;
        const formClone = Object.assign({}, this.state.form);
        formClone[field] = value;

        this.setState({
            form: formClone
        });
    }

    handleSubmit(e) {
        e.preventDefault();
debugger;
        const originalFormErrors = {
            username: '',
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        };

        this.setState({
            formErrors: originalFormErrors,
            isFormValid: true
        });

        const form = this.state.form;

        let formErrors = {};

        if(!form.username || form.username.length < 8) {
            formErrors.username = 'Username is missing or is less than 8 characters long';
        }
        if(Object.keys(formErrors).length > 0) {
            debugger;
            this.setState({
                formErrors: formErrors,
                isFormValid: false
            });        

            return;
        }

        // Submit to Server
        alert('Successfully Registerd!');
    }
    render() {
        return (
            <div className="register-page-container">
                <h1>Registration Form</h1>
                { this.state.isFormValid === false ? <span>Form Validation Error(s)</span> : '' }
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <label>
                            <span>
                               First Name<span>*</span>:
                            </span>
                            <input
                                type="text"
                                value={ this.state.form.firstName }
                                onChange={ (e) =>this.handleInputChange('firstName', e) }
                                className={ this.state.formErrors.firstName ? 'error' : '' }
                            />
                        </label>
                        { this.state.formErrors.firstName ? <span className="red">Error: { this.state.formErrors.firstName }</span> : ''} 
                    </div>
                    <hr align="left"></hr>
                    <div>
                        <label>
                            <span>
                               Last Name<span>*</span>:
                            </span>
                            <input
                                type="text"
                                value={ this.state.form.lastName }
                                onChange={ (e) =>this.handleInputChange('lastName', e) }
                                className={ this.state.formErrors.lastName ? 'error' : '' }
                            />
                        </label>
                        { this.state.formErrors.lastName ? <span className="red">Error: { this.state.formErrors.lastName }</span> : ''} 
                    </div>
                    <hr align="left"></hr>
                    <div>
                        <label>
                            <span>
                                Username<span>*</span>:
                            </span>
                            <input
                                type="text"
                                value={ this.state.form.username }
                                onChange={ (e) =>this.handleInputChange('username', e) }
                                className={ this.state.formErrors.username ? 'error' : '' }
                            />
                        </label>
                        { this.state.formErrors.username ? <span className="red">Error: { this.state.formErrors.username }</span> : ''} 
                    </div>
                    <hr align="left"></hr>
                    <div>
                        <label>
                            <span>
                                Date of Birth<span>*</span>:
                            </span>
                            <input
                                type="date"
                                value={ this.state.form.dateOfBirth }
                                onChange={ (e) =>this.handleInputChange('dateOfBirth', e) }
                                className={ this.state.formErrors.dateOfBirth ? 'error' : '' }
                            />
                        </label>
                    </div>
                    <hr align="left"></hr>
                    <div>
                        <label>
                            <span>
                                Email<span>*</span>:
                            </span>
                            <input
                                type="text"
                                value={ this.state.form.email }
                                onChange={ (e) =>this.handleInputChange('email', e) }
                                className={ this.state.formErrors.email ? 'error' : '' }
                            />
                        </label>
                    </div>
                    <hr align="left"></hr>
                    <div>
                        <label>
                            <span>
                                Password<span>*</span>:
                            </span>
                            <input
                                type="password"
                                value={ this.state.form.password }
                                onChange={ (e) =>this.handleInputChange('password', e) }
                                className={ this.state.formErrors.password ? 'error' : '' }
                            />
                        </label>
                        { this.state.formErrors.password ? <span className="red">Error: { this.state.formErrors.password }</span> : ''} 
                    </div>
                    <hr align="left"></hr>
                    <div>
                        <label>
                            <span>
                               Confirm Password<span>*</span>:
                            </span>
                            <input
                                type="password"
                                value={ this.state.form.confirmPassword }
                                onChange={ (e) =>this.handleInputChange('confirmPassword', e) }
                                className={ this.state.formErrors.confirmPassword ? 'error' : '' }
                            />
                        </label>
                        { this.state.formErrors.confirmPassword ? <span className="red">Error: { this.state.formErrors.confirmPassword }</span> : ''} 
                    </div>
                    <hr align="left"></hr>
                    <button>Submit Form</button>
                </form>



                {/* { this.state.mode === 'login' ? this.renderLoginForm() : this.renderForgotPasswordForm() } */}
            </div>
        );
    }
}

export default RegisterPage;