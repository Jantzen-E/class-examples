import React from 'react';
import Die from '../components/Die';

class DiceBagPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddNewDie = this.handleAddNewDie.bind(this);

        this.state = {
            list: [10,4],
            newInput: '',
        };
    }

    handleInputChange(event) {
        const sides = event.target.value;
        this.setState({newInput: sides})
    }

    handleAddNewDie() {
        const sides = this.state.newInput;

        // const newList = this.state.list.push(sides);

        // const newList = this.state.list;
        // newList.push(sides);

        const newList = [...this.state.list];
        newList.push(sides);
        // const newList = this.state.list.concat(sides);

        this.setState({
            list: newList,
            newInput: ''
        });
    }

    renderDiceList() {
        return this.state.list.map((d, index) => (
            <Die sides={ d } key={ index }/>
        ))
    }

    renderInputBox() {
        return (
            <div>
                <div>Number of Sides</div>
                <input type="number" id="newDieSides" value={this.state.newInput} onChange={this.handleInputChange}/>
            </div>
        )
    }

    renderAddNewDieButton() {
        return (
            <div>
                <button onClick={this.handleAddNewDie}>Add</button>
            </div>
        )
    }

    render() {
        return (
            <div>
                { this.renderInputBox() } 
                { this.renderAddNewDieButton() }
                
                <span>{ this.renderDiceList() }</span>
            </div>
        )
    }
};

export default DiceBagPage;