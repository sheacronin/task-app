import React from 'react';
import trashIcon from '../i/trash.svg';
import editIcon from '../i/edit.svg';

const Overview = (props) => {
    const { tasks, removeTask } = props;

    return (
        <div id="tasks-container">
            <ul>
                {tasks.map((task, i) => (
                    <li key={task.id}>
                        <span className="task-num">{i + 1}</span>
                        {task.text}
                        <button className="edit-task">
                            <img
                                src={editIcon}
                                alt="pencil edit icon"
                                onClick={() => console.log('hi')}
                            />
                        </button>
                        <button className="delete-task">
                            <img
                                src={trashIcon}
                                alt="trash can icon"
                                onClick={() => removeTask(task.id)}
                            />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Overview;
