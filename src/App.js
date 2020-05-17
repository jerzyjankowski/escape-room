import React from 'react';
import './App.css';
import RiddleManager from "./containers/RiddleManager/RiddleManager";
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <RiddleManager/>
            </div>
        </BrowserRouter>
    );
}

export default App;
