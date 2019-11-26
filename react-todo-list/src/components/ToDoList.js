import React from 'react';
import ToDo from './ToDo';

class ToDoList extends React.Component {
    render() {
        return (
            <div className="to-do-list-container">
                <h1>{ this.props.name }</h1>
                <ToDo/>
            </div>
        );
    }
}

export default ToDoList;