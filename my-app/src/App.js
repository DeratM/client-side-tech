import React from 'react';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

function App() {
    return (
        <div className="App">
            <Menu dishes={DISHES} />
        </div>
    );
}

export default App;
