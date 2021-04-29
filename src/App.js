import './App.css';
import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: ['Task 1', 'Task 2'],
        };

        this.addTask = this.addTask.bind(this);
    }

    addTask(e) {
        console.log('adding task');
        this.setState({
            tasks: [...this.state.tasks, 'new task!'],
        });
        e.preventDefault();
    }

    render() {
        return (
            <main>
                <form>
                    <input type="text" />
                    <button onClick={this.addTask}>Submit</button>
                </form>
                <Overview tasks={this.state.tasks} />
            </main>
        );
    }
}

export default App;
