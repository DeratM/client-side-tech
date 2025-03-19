import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

function RenderMenuItem({ dish, onClick }) {
    return (
        <Card onClick={() => onClick(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {
    const [selectedDish, setSelectedDish] = useState(null);

    const menu = props.dishes.map((dish) => (
        <div className="col-12 col-md-5 m-1" key={dish.id}>
            <RenderMenuItem dish={dish} onClick={setSelectedDish} />
        </div>
    ));

    return (
        <div className="container">
            <div className="row">{menu}</div>
            <div className="row">
                <DishDetail dish={selectedDish} />
            </div>
        </div>
    );
};

export default Menu;
