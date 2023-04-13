import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productData: [],
    userInfo: null
}

export const bazarSlice = createSlice({
    name: 'bazar',
    initialState,
    reducers:{
        addToCart:(state, action) => {
            const item = state.productData.find(
                (item) => item.id === action.payload.id
            )
            
            if (item) {
                item.quantity += action.payload.quantity
            } else {
                state.productData.push(action.payload)
            }
        },
        deleteItem: (state, action) => {
            const item = state.productData.filter(
                (item) => item.id !== action.payload.id
            )
           state.productData = action.payload
        },
        resetCart: (state) => {
            state.productData = []
        },
        increamentQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item.id === action.payload.id
            )
            
            if (item) {
                item.quantity += 1
            }
           
        },
        decreamentQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item.id === action.payload.id
            )
            
            if (item) {
                item.quantity += 1
            }
        }
    }
})

export const { addToCart, deleteItem, resetCart, increamentQuantity, decreamentQuantity } = bazarSlice.actions
export default bazarSlice.reducer