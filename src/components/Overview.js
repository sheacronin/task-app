import React from 'react';

const Overview = (props) => {
    const { tasks } = props;

    return (
        <div id="tasks-container">
            <ul>
                {tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                ))}
            </ul>
        </div>
    );
};

export default Overview;
