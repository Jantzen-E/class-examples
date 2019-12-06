import React from 'react';
import ToDo from '../components/ToDo/ToDo';


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoInput: ''
        };

        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleToDoInputChange = this.handleToDoInputChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    
    createToDoListElements() {
        return this.props.list.map((todo, index) => {
            const item = {
                todo,
                index
            };
            return <ToDo item={item} key={index} handleDeleteItem={ this.handleDeleteItem }/>;
        });
    } 

    handleDeleteItem(index) {
        this.props.handleDeleteItem(index);
    }

    handleToDoInputChange(event) {
        const newValue = event.target.value;
        this.setState({
            toDoInput: newValue
        });
    }

    handleKeyPress(event) {
        if(event.key === 'Enter') {
            this.handleAdd();
        }
    }

    handleAdd() {
        const todo = this.state.toDoInput;
        // call parent component, addTodoCallback.
        if(todo) {
            this.props.onAddItem(todo);
        }
        else {
            alert('input is empty. please try again');
        }
        
        this.setState({
            toDoInput: ''
        });
        this.nameInput.focus();
        console.log('ADD ITEM');
    }

    componentDidMount() {
        this.nameInput.focus();
    }
    
    render() {
        return (
            <div className="to-do-list-container">
                <h1>{ this.props.name }</h1>
                <div>Add ToDo:</div>
                <input 
                    type="text" 
                    value={ this.state.toDoInput } 
                    onChange={ this.handleToDoInputChange }
                    onKeyPress={ this.handleKeyPress }
                    ref={(input) => { this.nameInput = input; }} 
                />
                <button onClick={ this.handleAdd } >ADD</button>
                <div className="list">
                    { this.createToDoListElements() }
                </div>    
            </div>
        );
    }
}

export default ToDoList;