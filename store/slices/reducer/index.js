import {createSelector, createSlice} from "@reduxjs/toolkit"

const initialState = {
    isOpen: false,
    quote: {
        pickup: "",
        delivery: "",
        type: ""
    }
}


const slice = createSlice({
    name: "main",
    initialState,
    reducers: {
        setToggleSidebar: (store, action) => {
            store.isOpen = action.payload
        },
        setQuoteLocations: (store, action) => {
            store.quote = action.payload
        }
    }
})

export const {setToggleSidebar,setQuoteLocations} = slice.actions
export default slice.reducer

export const getSidebarOpen = () => createSelector(
    store => store.main,
    state => state.isOpen
)

export const getQuoteLocations = () => createSelector(
    store => store.main,
    state => state.quote
)
