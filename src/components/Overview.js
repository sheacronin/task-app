import React, { Component } from 'react';

class Overview extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div id="tasks-container">
                <ul>
                    <li>Example Task</li>
                    <li>Example Task</li>
                    <li>Example Task</li>
                    {this.props.tasks.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Overview;
