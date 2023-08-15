import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemOrService: "",
    expenseDate: "",
    expenseAmount: 0,
    category: "",
    notes: ""
}

const addNewSlice = createSlice({
    name: "addNew",
    initialState,
    reducers: {
        ADD_NEW_EXPENSE: (state, actions) => {
            const {itemOrService, expenseDate, expenseAmount, category, notes} = actions.payload
            state.itemOrService = itemOrService
            state.expenseDate = expenseDate
            state.expenseAmount = expenseAmount
            state.category = category
            state.notes = notes
        }
    }
})


export const {ADD_NEW_EXPENSE} = addNewSlice.actions;

export default addNewSlice.reducer;