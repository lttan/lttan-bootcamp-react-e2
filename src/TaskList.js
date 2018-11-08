/*
LE TRAN TRUONG AN - 0795
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';

import '../styles/taskList.css';

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.getTaskByStatus = this.getTaskByStatus.bind(this);
    }

    getTaskByStatus(status){
        const tasks = [];

        this.props.tasks.forEach(element => {
            if (status == false && element.finished == false) {
                tasks.push(element);
            }
            else if (status == true && element.finished == true) {
                tasks.push(element);
            }           
        });

        return tasks;
    }

    render() {
        const tasks = [];
        let taskList = this.getTaskByStatus(this.props.showStatus);

        taskList.forEach(element => {
            tasks.push(<Task key={element.id}
                                  task={element}
                                  deleteTask={this.props.deleteTask}
                                  changeTaskStatus={this.props.changeTaskStatus} />);
        });

        return (
            <div className='list-container'>
                {tasks}
            </div>
        );
    }
}