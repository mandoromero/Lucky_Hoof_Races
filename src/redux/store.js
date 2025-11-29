// src/store.js
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  gameName: "Deck & Dice Derby",
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    // add your actions here later
    default:
      return state;
  }
}

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
