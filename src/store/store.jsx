import {configureStore} from '@reduxjs/toolkit'
import recipiesSlice from './feature/recipies'
const store = configureStore({
    reducer:{
        recipies:recipiesSlice.reducer
    }
})
export default store