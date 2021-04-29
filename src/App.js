import './App.css';
import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            tasks: ['Task 1', 'Task 2'],
        };

        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    handleChange(e) {
        this.setState({
            inputValue: e.target.value,
        });
    }

    addTask(e) {
        console.log('Adding task ' + this.state.inputValue);
        this.setState({
            tasks: [...this.state.tasks, this.state.inputValue],
            inputValue: '',
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
                        <input
                            type="text"
                            value={this.state.inputValue}
                            onChange={this.handleChange}
                        />
                        <button onClick={this.addTask}>Submit</button>
                    </form>
                </main>
            </div>
        );
    }
}

export default App;
