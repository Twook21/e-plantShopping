/**
 * Redux Store Configuration
 * 
 * This file creates the Redux store using Redux Toolkit's configureStore.
 * The store manages the global state for the shopping cart application.
 * 
 * Features:
 * - Automatically includes Redux DevTools
 * - Pre-configured with middleware (redux-thunk)
 * - Type-safe state management
 */

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

/**
 * Create and configure the Redux store
 * 
 * Reducers:
 * - cart: Manages shopping cart state (items, quantities, etc.)
 * 
 * State Structure:
 * {
 *   cart: {
 *     items: [
 *       { name, image, description, cost, quantity }
 *     ]
 *   }
 * }
 * 
 * Access state: state.cart.items
 */
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;