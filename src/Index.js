/*
LE TRAN TRUONG AN - 0795
*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './TodoApp';

class App extends Component {
    constructor(props) {
        super(props);       
    }

    render() {
        return (
            <TodoApp />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('main'));