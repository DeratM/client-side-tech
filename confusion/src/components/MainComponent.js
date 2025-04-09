import React, { Component } from 'react'; 
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';  
import Contact from './ContactComponent';

import { DISHES } from '../shared/dishes';  // Importing the DISHES data
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES, // Storing DISHES data in the state
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        const selectedDish = this.state.dishes.find(dish => dish.id === this.state.selectedDish);
        const selectedComments = this.state.comments.filter(comment => comment.dishId === this.state.selectedDish);

        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        return (
            <div>
                <Header />
                
                <Switch>
                    <Route path="/home" render={HomePage} />
                    <Route exact path='/contactus' component={Contact} /> 
                    <Route 
                        exact 
                        path="/menu" 
                        component={() => 
                            <Menu 
                                dishes={this.state.dishes} 
                                onClick={(dishId) => this.onDishSelect(dishId)} 
                            />} 
                    />
                    <Route 
                        path="/menu/:dishId" 
                        component={() => 
                            <DishDetail 
                                dish={selectedDish} 
                                comments={selectedComments} 
                            />} 
                    />
                    <Redirect to="/home" />
                </Switch>

                <Footer />
            </div>
        );
    }
}

export default Main;
