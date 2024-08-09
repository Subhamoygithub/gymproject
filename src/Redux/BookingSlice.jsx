import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../Api/Axiosinstance"
import { useNavigate } from "react-router-dom";




const initialState = {
  bookingStatus: 'idle'
};

export const booking = createAsyncThunk("booking", async (data) => {
    
  try {
    const response = await axiosInstance.post("booking", data);
    return response;
  } catch (error) {
    toast(error?.response?.data?.message)
  }
})

export const BookingSlice = createSlice ({
    name : "bookingservice",
    initialState,
    reducers :{},
    
    extraReducers:(builder)=>{
      
        builder
        .addCase(booking.pending,(state,action)=>{
            state.bookingStatus= "loading"
        })
        builder
        .addCase(booking.fulfilled,(state,{payload})=>{
            if(payload?.status === 200){
                state.bookingStatus = "success";
                toast.success(payload?.message)
                toast.success("Congratulations! Training has been booked.");
               
            }

        })
        builder
        .addCase(booking.rejected,(state,action)=>{
            state.bookingStatus = 'failed';
        })
    }
})