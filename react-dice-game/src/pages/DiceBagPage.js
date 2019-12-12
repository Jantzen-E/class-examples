import React from 'react';
import Die from '../components/Die';

class DiceBagPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [10,4,5,6,8],
        };
    }

    renderDiceList() {
        return this.state.list.map(d => (
            <Die sides={ d }/>
        ))
    }

    startRolling() {
        return
    }

    stopRolling() {
        return
    }

    handleInputBox() {
        return <input type="number">Number of Sides</input>
    }

    addNewDie() {
        return
    }

    // <div className="label">
    //         D{this.props.sides}
    // </div>

    render() {
        return(
            <div>
                <span>{ this.renderDiceList() }</span>
            </div>
        )
    }
};

        

export default DiceBagPage;