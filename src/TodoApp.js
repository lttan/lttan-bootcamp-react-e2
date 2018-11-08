/*
LE TRAN TRUONG AN - 0795
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import TaskNew from './TaskNew';
import TaskList from './TaskList';
import TaskFooter from './TaskFooter';


const TASKS = [
    { id: 1, name: 'Todo task 1', finished: false },
    { id: 2, name: 'Todo task 2', finished: false }
];

export default class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: TASKS,
            showStatus: false
        };

        this.addNewTask = this.addNewTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.changeTaskStatus = this.changeTaskStatus.bind(this);
        this.showTaskByStatus = this.showTaskByStatus.bind(this);
    }

    addNewTask(newTaskName) {
        this.setState((currentState) => {
            if (newTaskName.length > 0) {
                const currentList = currentState.taskList;
                const newTask = {
                    id: currentList.length + 1, //This is the id of new task
                    name: newTaskName,
                    finished: false
                };

                currentList.push(newTask);

                return {
                    taskList: currentList
                };
            }
        });
    }

    deleteTask(id) {
        this.setState((currentState) => {
            const currentList = currentState.taskList;
            const removeIndex = currentList.findIndex(task => task.id == id);

            if (removeIndex >= 0) {
                currentList.splice(removeIndex, 1);
            }

            return {
                taskList: currentList
            };
        });
    }

    changeTaskStatus(id, status) {
        this.setState((currentState) => {
            const currentList = currentState.taskList;
            const finishIndex = currentList.findIndex(task => task.id == id);

            if (finishIndex >= 0) {
                currentList[finishIndex].finished = status;
            }

            return {
                taskList: currentList
            };
        });
    }

    showTaskByStatus(status) {
        this.setState({ showStatus: status });
    }

    render() {
        return (
            <div>
                <Header />
                <TaskNew addNewTask={this.addNewTask} />
                <TaskList tasks={this.state.taskList}
                    deleteTask={this.deleteTask}
                    changeTaskStatus={this.changeTaskStatus}
                    showStatus={this.state.showStatus} />
                <TaskFooter showTaskByStatus={this.showTaskByStatus} />
            </div>
        );
    }
}