import React from 'react';

const Overview = (props) => {
    const { tasks } = props;

    return (
        <div id="tasks-container">
            <ul>
                {tasks.map((task, i) => (
                    <li key={task.id}>
                        {task.text}
                        <span className="task-num">{i + 1}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Overview;
