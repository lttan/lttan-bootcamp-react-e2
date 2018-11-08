/*
LE TRAN TRUONG AN - 0795
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/task.css';

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
        this.changeTaskStatus = this.changeTaskStatus.bind(this);
    }

    deleteTask(e){
        const task = this.props.task;        
        this.props.deleteTask(task.id);
    }

    changeTaskStatus(e) {
        this.props.changeTaskStatus(e.target.value, e.target.checked); // Value of checkbox is task's id
    }

    render() {
        const task = this.props.task;

        return (
            <div className='task-container'>
                <input className='finish'
                       type='checkbox' 
                       value={task.id} 
                       defaultChecked={task.finished} 
                       onChange={this.changeTaskStatus}/>
                <div className='task-name'>{task.name}</div>
                <button className='delete-btn' onClick={this.deleteTask}>Delete</button>
            </div>
        );
    }
}