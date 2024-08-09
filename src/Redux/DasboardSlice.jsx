import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/Axiosinstance";



export const BookingDashboardApi = createAsyncThunk('bookingdash/fetch',async(id)=>{
   try{
    const res = await axiosInstance.get(`viewBooking/${id}`);
    console.log("dash",res?.data?.result);
    return res?.data
    
   }catch(error){
    console.log(error);
   }
})


export const BookingDashboardSlice = createSlice ({
    name :"bookingdash",
    initialState:{
        bookingdashboarditem:[],
        status:"idle",
    },
    extraReducers:(builder)=>{
        builder
        .addCase(BookingDashboardApi.pending,(state,action)=>{
            state.status="pending"
        })
        builder
        .addCase(BookingDashboardApi.fulfilled,(state,{payload})=>{
            if(payload?.status === 200){
                state.status= "success"
                state.bookingdashboarditem=payload
            }
        })
        builder
        .addCase(BookingDashboardApi.rejected,(state,action)=>{
            state.status = "So sorry dear please try again"
        })
    }
})