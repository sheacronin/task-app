import React, { Component } from 'react';

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: ['Task 1', 'Task 2'],
        };
    }

    render() {
        return (
            <div id="tasks-container">
                <ul>
                    <li>Example Task</li>
                    <li>Example Task</li>
                    <li>Example Task</li>
                    {this.state.tasks.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Overview;
