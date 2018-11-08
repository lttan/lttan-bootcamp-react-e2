/*
LE TRAN TRUONG AN - 0795
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/taskFooter.css';

export default class TaskFooter extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <div>
              <span><a href='#' onClick={() => this.props.showTaskByStatus(false)}>View todo tasks</a></span>
              <span>|||</span>
              <span><a href='#' onClick={() => this.props.showTaskByStatus(true)}>View finished tasks</a></span>
            </div>
          );
    }
}