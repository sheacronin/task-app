import './App.css';
import React, { useEffect, useState } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';
import UserInfo from './components/UserInfo';
import {
    getFirestore,
    collection,
    query,
    onSnapshot,
    setDoc,
    doc,
    deleteDoc,
} from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

const db = getFirestore();

const getCurrentUserId = () => {
    return getAuth().currentUser.uid;
};

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(getAuth(), setCurrentUser);
    }, []);

    const [task, setTask] = useState({ text: '', id: uniqid() });
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (!!currentUser) {
            getTasks();
        }
    }, [currentUser]);

    const getTasks = () => {
        const tasksQuery = query(
            collection(db, `users/${getCurrentUserId()}/tasks`)
        );

        onSnapshot(tasksQuery, (snapshot) => {
            const items = [];
            snapshot.forEach((doc) => items.push(doc.data()));
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
            setDoc(doc(db, `users/${getCurrentUserId()}/tasks`, task.id), task);
        } catch (error) {
            console.error('Error writing new task to Firebase Database', error);
        }

        setTask({
            text: '',
            id: uniqid(),
        });

        e.preventDefault();
    };

    const onSubmitTaskEdit = (editedTask) => {
        setDoc(
            doc(db, `users/${getCurrentUserId()}/tasks`, editedTask.id),
            editedTask
        );
    };

    const removeTask = (id) => {
        deleteDoc(doc(db, `users/${getCurrentUserId()}/tasks`, id));
    };

    return (
        <div id="app">
            <header>
                <h1>Task List</h1>
                <UserInfo currentUser={currentUser} />
            </header>
            {currentUser ? (
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
            ) : (
                <main>Please sign in to add your tasks.</main>
            )}
        </div>
    );
};

export default App;
