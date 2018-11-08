/*
LE TRAN TRUONG AN - 0795
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/taskNew.css';

export default class TaskNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTaskName: ''
        }

        this.changeTask = this.changeTask.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
        this.handlePressEnter = this.handlePressEnter.bind(this);
    }

    changeTask(e) {
        this.setState({
            newTaskName: e.target.value
        });
    }

    addNewTask() {
        const newTaskName = this.state.newTaskName;

        if (newTaskName.length > 0) {
            this.props.addNewTask(newTaskName);

            this.setState({
                newTaskName: ''
            });
        }
    }

    handlePressEnter(e) {
        if (e.charCode  === 13 || e.key === 'Enter') {
            this.addNewTask();
        }
    }

    render() {
        return (
            <div>
                <input className='new-task'
                       type='text' 
                       name='newTask' 
                       placeholder='Input your task here...' 
                       value={this.state.newTaskName} 
                       onChange={this.changeTask} 
                       onKeyPress={this.handlePressEnter} />
                <button className='add-btn' onClick={this.addNewTask}>Add</button>
            </div>
        );
    }
}