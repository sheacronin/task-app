import React from 'react';
import trashIcon from '../i/trash.svg';

const Overview = (props) => {
    const { tasks } = props;

    return (
        <div id="tasks-container">
            <ul>
                {tasks.map((task, i) => (
                    <li key={task.id}>
                        <span className="task-num">{i + 1}</span>
                        {task.text}
                        <button className="delete-task">
                            <img src={trashIcon} alt="trash can icon" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Overview;
