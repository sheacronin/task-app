import React, { Component } from 'react';
import trashIcon from '../i/trash.svg';
import editIcon from '../i/edit.svg';
import submitIcon from '../i/submit.svg';

const Overview = (props) => {
    const { tasks, removeTask, onSubmitTaskEdit } = props;

    return (
        <div id="tasks-container">
            <ul>
                {tasks.map((task, i) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        i={i}
                        removeTask={removeTask}
                        onSubmitTaskEdit={onSubmitTaskEdit}
                    />
                ))}
            </ul>
        </div>
    );
};

class TaskItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditable: false,
            task: {
                text: props.task.text,
                id: props.task.id,
            },
        };
    }

    handleToggleEditable = () => {
        if (this.state.isEditable) {
            // If submitting, edit state in App
            this.props.onSubmitTaskEdit(this.state.task);
        }

        this.setState({
            isEditable: !this.state.isEditable,
        });
    };

    handleChange = (e) => {
        this.setState({
            task: {
                text: e.target.value,
                id: this.state.task.id,
            },
        });
    };

    render() {
        const { task, isEditable } = this.state;
        const { i, removeTask } = this.props;

        return (
            <li>
                <span className="task-num">{i + 1}</span>
                <TaskText
                    isEditable={isEditable}
                    task={task}
                    handleChange={this.handleChange}
                    handleToggleEditable={this.handleToggleEditable}
                />
                <EditButton
                    handleToggleEditable={this.handleToggleEditable}
                    isEditable={isEditable}
                />
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

const TaskText = (props) => {
    const { isEditable, task, handleChange, handleToggleEditable } = props;

    if (isEditable) {
        return (
            <input
                type="text"
                value={task.text}
                onChange={handleChange}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        handleToggleEditable();
                    }
                }}
            />
        );
    } else {
        return <span className="task-text">{task.text}</span>;
    }
};

const EditButton = (props) => {
    const { handleToggleEditable, isEditable } = props;

    return (
        <button className="edit-task" onClick={handleToggleEditable}>
            <img
                src={isEditable ? submitIcon : editIcon}
                alt={isEditable ? 'check mark submit icon' : 'pencil edit icon'}
            />
        </button>
    );
};

export default Overview;
