import './App.css';
import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
    }

    addTask(e) {
        console.log('adding task');
        e.preventDefault();
    }

    render() {
        return (
            <main>
                <form>
                    <input type="text" />
                    <button onClick={this.addTask}>Submit</button>
                </form>
                <Overview />
            </main>
        );
    }
}

export default App;
