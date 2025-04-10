import { createStore, combineReducers, applyMiddleware, compose } from 'redux';  // <-- Add compose import
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Dishes } from './dishes';  // Make sure this import is correct
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { createForms } from 'react-redux-form';  // <-- Import createForms
import { InitialFeedback } from './forms';  // <-- Import InitialFeedback

// Combine your reducers and add the form state
const rootReducer = combineReducers({
    dishes: Dishes,
    comments: Comments,
    promotions: Promotions,
    leaders: Leaders,
    ...createForms({  // <-- Add the createForms call here
        feedback: InitialFeedback  // Add your feedback form to the store
    })
});

// Enable Redux DevTools if installed in the browser
const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Create the Redux store with middleware and Redux DevTools extension
export const ConfigureStore = () => {
    const store = createStore(
        rootReducer,
        composeEnhancers(  // This ensures Redux DevTools works with your store
            applyMiddleware(thunk, logger)
        )
    );
    return store;
};
