import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getItem } from '../../Utils/localStorage'

export interface AddCartState {
    discountPercentage: number
    id: number 
    img: string
    price: number
    title: string
    brand: string
    category: string
}
interface RemoveCart {
    id: number
}

const initialState: AddCartState[] = getItem('CART') ||[];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<AddCartState>) => {
            const { id } = action.payload;
            if (state.length === 0 || state.filter((item) => item.id === id).length === 0) {
                state.push(action.payload)
            }
        },
        deleteFromCart: (state, action: PayloadAction<RemoveCart>) => {
            const { id } = action.payload
            if (state.some(item => item.id === id)) {
                return state = state.filter(item => item.id !== id)
            }
        }
    },
})

export const { addToCart, deleteFromCart } = cartSlice.actions