import React, { Component } from 'react';
import trashIcon from '../i/trash.svg';
import editIcon from '../i/edit.svg';
import submitIcon from '../i/submit.svg';

class Overview extends Component {
    makeTaskEditable = () => {
        this.setState({
            isEditable: true,
        });
    };

    render() {
        const { tasks, removeTask } = this.props;

        return (
            <div id="tasks-container">
                <ul>
                    {tasks.map((task, i) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            i={i}
                            removeTask={removeTask}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

class TaskItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditable: false,
        };
    }

    handleToggleEditable = () => {
        this.setState({
            isEditable: !this.state.isEditable,
        });
    };

    render() {
        const { task, i, removeTask } = this.props;

        return (
            <li>
                <span className="task-num">{i + 1}</span>
                <span className="task-text">{task.text}</span>
                <button
                    className="edit-task"
                    onClick={this.handleToggleEditable}
                >
                    <img
                        src={this.state.isEditable ? submitIcon : editIcon}
                        alt={
                            this.state.isEditable
                                ? 'check mark submit icon'
                                : 'pencil edit icon'
                        }
                    />
                </button>
                <button
                    className="delete-task"
                    onClick={() => removeTask(task.id)}
                >
                    <img src={trashIcon} alt="trash can icon" />
                </button>
            </li>
        );
    }
}

// const EditableTaskItem = (props) => {
//     const { task, i } = props;

//     return (
//         <li key={task.id}>
//             <span className="task-num">{i + 1}</span>
//             <span className="task-text">{task.text}</span>
//             <button className="edit-task" onClick={this.makeTaskEditable}>
//                 <img src={editIcon} alt="pencil edit icon" />
//             </button>
//             <button className="delete-task" onClick={() => removeTask(task.id)}>
//                 <img src={trashIcon} alt="trash can icon" />
//             </button>
//         </li>
//     );
// };

export default Overview;
