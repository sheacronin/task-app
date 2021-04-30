import React from 'react';

const Overview = (props) => {
    const { tasks } = props;

    return (
        <div id="tasks-container">
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Overview;
