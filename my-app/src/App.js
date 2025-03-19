<<<<<<< HEAD
import React from 'react';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
=======
import './App.css';

import React from 'react';
import { DISHES } from './dishes';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

>>>>>>> d64cf9ec75bf5da0bfdc88a295b11a5db5ae4892

function App() {
    return (
        <div className="App">
<<<<<<< HEAD
            <Menu dishes={DISHES} />
=======
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
>>>>>>> d64cf9ec75bf5da0bfdc88a295b11a5db5ae4892
        </div>
    );
}

export default App;
<<<<<<< HEAD
=======

>>>>>>> d64cf9ec75bf5da0bfdc88a295b11a5db5ae4892
