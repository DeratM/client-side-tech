import './App.css';

import React from 'react';
import { DISHES } from './dishes';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';


function App() {
    return (
        <div className="App">
            <h1>Menu</h1>
            <div className="dishes">
                {DISHES.map(dish => (
                    <div key={dish.id} className="dish-card">
                        <h2>{dish.name}</h2>
                        <img src={dish.image} alt={dish.name} />
                        <p>{dish.description}</p>
                        <p><strong>Category:</strong> {dish.category}</p>
                        <p><strong>Price:</strong> ${dish.price}</p>
                        {dish.label && <span className="label">{dish.label}</span>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;

