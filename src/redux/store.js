import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import addNewReducer from "./slice/addNewSlice";

const rootReducer = combineReducers(
    {
        auth: authReducer,
        addNew: addNewReducer,
    }
)

const store = configureStore({
    reducer: rootReducer,
});

export default store;