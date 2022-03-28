import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const callApi = createAsyncThunk('getRecipes',async(object,{getState,rected})=>{
    const {data} = await axios.get("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=e4ed685b&app_key=d38ec1fcd48f23da9f2a85282cbd5004")
    return data
})

const recipiesSlice = createSlice({
    name:'recipies',
    initialState:{recipies:[]},
    reducers:{},
    extraReducers:{
        [callApi.fulfilled]:(state,action)=>{
            state.recipies = action.payload
        }
    }
})
 export default recipiesSlice
