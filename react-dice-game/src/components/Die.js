import React from 'react';
import { number } from 'prop-types';

class Die extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: '',
        };

        this.handleRoll = this.handleRoll.bind(this);
    }
    
    handleRoll() {
        const value = Math.floor(Math.random() * this.props.sides) + 1;
        
        this.setState({
            result: value
        });
    }
                    // setState to update result
                    // generate a random number between 1 and this.props.sides
    render() {
        return (
            <div className="die">
                <div className ="sides">
                    D{this.props.sides}
                </div>
                <div>
                    <button onClick={ this.handleRoll }>Roll It</button>
                </div>
                <div className="">
                    <h4>last result: <span>{ this.state.result }</span></h4>
                </div>
            </div>
        );
    }
}

export default Die;