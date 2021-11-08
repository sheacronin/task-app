import './App.css';
import React, { Component, useEffect, useState } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';
import UserInfo from './components/UserInfo';
import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    getDocs,
    limit,
    onSnapshot,
    setDoc,
    updateDoc,
    doc,
    serverTimestamp,
} from 'firebase/firestore';

const App = () => {
    const [task, setTask] = useState({ text: '', id: uniqid() });
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks();
    }, []);

    const getTasks = () => {
        const tasksQuery = query(collection(getFirestore(), 'tasks'));

        onSnapshot(tasksQuery, (snapshot) => {
            const items = [];
            snapshot.forEach((doc) => items.push(doc.data()));
            console.log(items);
            setTasks(items);
        });
    };

    const handleChange = (e) => {
        setTask((prevState) => {
            return { ...prevState, text: e.target.value };
        });
    };

    const onTaskSubmit = (e) => {
        try {
            addDoc(collection(getFirestore(), 'tasks'), task);
        } catch (error) {
            console.error('Error writing new task to Firebase Database', error);
        }

        setTask({
            text: '',
            id: uniqid(),
        });

        e.preventDefault();
    };

    //TODO CHANGE
    const onSubmitTaskEdit = (editedTask) => {
        const { tasks } = this.state;
        const changingTask = tasks.find((task) => task.id === editedTask.id);
        const changeIndex = tasks.indexOf(changingTask);
        const firstPartArray = tasks.slice(0, changeIndex);
        const secondPartArray = tasks.slice(changeIndex + 1);

        this.setState({
            tasks: [...firstPartArray, editedTask, ...secondPartArray],
        });
    };

    //TODO CHANGE
    const removeTask = (id) => {
        this.setState({
            tasks: this.state.tasks.filter((task) => task.id !== id),
        });
    };

    return (
        <div id="app">
            <header>
                <h1>Task List</h1>
                <UserInfo />
            </header>
            <main>
                <Overview
                    tasks={tasks}
                    removeTask={removeTask}
                    onSubmitTaskEdit={onSubmitTaskEdit}
                />
                <form>
                    <label htmlFor="taskInput">Enter a task:</label>
                    <input
                        type="text"
                        id="taskInput"
                        value={task.text}
                        onChange={handleChange}
                    />
                    <button type="submit" onClick={onTaskSubmit}>
                        Add Task
                    </button>
                </form>
            </main>
        </div>
    );
};

// class App extends Component {
//     constructor() {
//         super();

//         this.state = {
//             task: {
//                 text: '',
//                 id: uniqid(),
//             },
//             tasks: [],
//         };
//     }

//     handleChange = (e) => {
//         this.setState({
//             task: {
//                 text: e.target.value,
//                 id: this.state.task.id,
//             },
//         });
//     };

//     onTaskSubmit = (e) => {
//         try {
//             addDoc(collection(getFirestore(), 'tasks'), this.state.task);
//         } catch (error) {
//             console.error('Error writing new task to Firebase Database', error);
//         }

//         this.setState({
//             tasks: [...this.state.tasks, this.state.task],
//             task: {
//                 text: '',
//                 id: uniqid(),
//             },
//         });
//         e.preventDefault();
//     };

//     onSubmitTaskEdit = (editedTask) => {
//         const { tasks } = this.state;
//         const changingTask = tasks.find((task) => task.id === editedTask.id);
//         const changeIndex = tasks.indexOf(changingTask);
//         const firstPartArray = tasks.slice(0, changeIndex);
//         const secondPartArray = tasks.slice(changeIndex + 1);

//         this.setState({
//             tasks: [...firstPartArray, editedTask, ...secondPartArray],
//         });
//     };

//     removeTask = (id) => {
//         this.setState({
//             tasks: this.state.tasks.filter((task) => task.id !== id),
//         });
//     };

//     render() {
//         const { tasks, task } = this.state;
//         return (
//             <div id="app">
//                 <header>
//                     <h1>Task List</h1>
//                     <UserInfo />
//                 </header>
//                 <main>
//                     <Overview
//                         tasks={tasks}
//                         removeTask={this.removeTask}
//                         onSubmitTaskEdit={this.onSubmitTaskEdit}
//                     />
//                     <form>
//                         <label htmlFor="taskInput">Enter a task:</label>
//                         <input
//                             type="text"
//                             id="taskInput"
//                             value={task.text}
//                             onChange={this.handleChange}
//                         />
//                         <button type="submit" onClick={this.onTaskSubmit}>
//                             Add Task
//                         </button>
//                     </form>
//                 </main>
//             </div>
//         );
//     }
// }

export default App;
