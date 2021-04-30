import './App.css';
import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: {
                text: '',
                id: uniqid(),
            },
            tasks: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.onTaskSubmit = this.onTaskSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            task: {
                text: e.target.value,
                id: this.state.task.id,
            },
        });
    }

    onTaskSubmit(e) {
        this.setState({
            tasks: [...this.state.tasks, this.state.task],
            task: {
                text: '',
                id: uniqid(),
            },
        });
        e.preventDefault();
    }

    render() {
        return (
            <div id="app">
                <header>
                    <h1>Task List</h1>
                </header>
                <main>
                    <Overview tasks={this.state.tasks} />
                    <form>
                        <label htmlFor="taskInput">Enter a task:</label>
                        <input
                            type="text"
                            id="taskInput"
                            value={this.state.task.text}
                            onChange={this.handleChange}
                        />
                        <button type="submit" onClick={this.onTaskSubmit}>
                            Add Task
                        </button>
                    </form>
                </main>
            </div>
        );
    }
}

export default App;
