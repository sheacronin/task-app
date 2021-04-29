import './App.css';
import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <form>
                    <input type="text" />
                    <button>Submit</button>
                </form>
                <Overview />
            </main>
        );
    }
}

export default App;
