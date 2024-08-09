import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Api/Axiosinstance"


export const STATUS=Object.freeze({
    IDEL: 'success',
    ERROR: 'error',
    LOADING :'loading'
})

export const Banner = createAsyncThunk('banner/fetch',async()=>{
   const bannerapi = await axiosInstance.get("getbanner")
   return bannerapi?.data?.data;
})

export const Trainer =createAsyncThunk('trainer/fetch',async()=>{
    const trainerapi= await axiosInstance.get("gettrainer")
    return trainerapi?.data?.data;
})
export const Testtimonial =createAsyncThunk('testtimonial/fetch',async()=>{
    const testtimonialapi = await axiosInstance.get("gettestimonial")
    return testtimonialapi?.data?.data;
})
export const Service = createAsyncThunk('service/fetch',async()=>{
    const serviceapi = await axiosInstance.get("getservice")
    return serviceapi?.data?.data
})
export const ServiceDetailsfetch = createAsyncThunk("servicedetails/fetch",async(id)=>{
    const servicedetailsres = await axiosInstance.get(`getservicedetails/${id}`)
    return servicedetailsres?.data?.data
})
export const Blog = createAsyncThunk('bolg/fetch',async()=>{
    const blogapi = await axiosInstance.get('getblog')
    return blogapi?.data?.data
})
export const BlogDetailsfetch = createAsyncThunk("blogdetails/fetch",async(id)=>{
    try{
        const res = await axiosInstance.get(`getblogdetails/${id}`);
        return res?.data?.data
    } catch(error){
        console.log(error);
    }
})

export const Loginapi = createAsyncThunk('login/fetch',async(data)=>{
    try{
        const responce = await axiosInstance.post('login',data)
        console.log("log",responce);
        return responce.data
    }catch(error){
        console.log(error,"something wrong");
    }
    
})
// login slice 
export const Loginslice = createSlice({
    name: "login",
    initialState: {
        loginitem: [],
        loading:false,
        LogoutToggle:false
        },
    reducers:{
   Removefun :(state)=>{
    state.loading=false
    state.LogoutToggle=false
    localStorage.removeItem("Name")
    localStorage.removeItem("token")
    localStorage.removeItem("_id")
    localStorage.removeItem("email")
    localStorage.removeItem("phone")
    localStorage.removeItem("answer")
    },
   check_token: (state, { payload }) => {
    let token = localStorage.getItem("token");
    console.log("tok",token);
    if (token !== null && token !== undefined) {

        state.LogoutToggle = true;
    }
  },
  redirectToo: (state, { payload }) => {
    state.redirectTo = payload
  },
    },
    extraReducers: (builder) => {
        builder
         .addCase(Loginapi.pending, (state, action) => {
            state.status=STATUS.LOADING;
             state.loading=true
             })
          .addCase(Loginapi.fulfilled, (state,{payload}) => {
              if(payload?.status==200){
              state.status=STATUS.IDEL;
              state.LogoutToggle = true 
              localStorage.setItem("token",payload?.token);
              localStorage.setItem("Name",payload?.data?.name);
              localStorage.setItem("_id", payload?.data?._id)
              localStorage.setItem("email", payload?.data?.email)
              localStorage.setItem("phone", payload?.data?.phone)
              localStorage.setItem("answer", payload?.data?.answer)
              state.loading="success"
              toast(payload?.data?.name +"  "+"Logged in successfully")
              
             }
             
             else{
              if(payload?.status==201){
                  toast(payload?.message)
                 }
             }
             
             })
             
          .addCase(Loginapi.rejected, (state, {payload}) => {
          
            state.status=STATUS.ERROR
          })
    
    
          
      },
})

// banner slice
export const bannerslice=createSlice({
    name:'banner',
    initialState:{
        banneritem:[],
        status:STATUS.IDEL,
    },
    extraReducers:(builder)=>{
        builder
        .addCase(Banner.pending,(state,action)=>{
            state.status=STATUS.LOADING;
        })
        builder
        .addCase(Banner.fulfilled,(state,action)=>{
            state.banneritem=action.payload;
            state.status=STATUS.IDEL;
        })
        builder
        .addCase(Banner.rejected,(state,action)=>{
            state.status=STATUS.ERROR
        })
    },
})
// end banner slice

// trainer slice
export const trainerslice=createSlice({
    name:"trainer",
    initialState:{
        traineritem:[],
        status:STATUS.IDEL
    },
    extraReducers:(builder)=>{
        builder
        .addCase(Trainer.pending,(state,action)=>{
            state.status=STATUS.LOADING;
        })
        builder.addCase(Trainer.fulfilled,(state,action)=>{
            state.traineritem=action.payload;
            state.status=STATUS.IDEL;
        })
        builder.addCase(Trainer.rejected,(state,action)=>{
            state.status=STATUS.ERROR
        })
    },

})
// end trainer slice 

// testmonial
export const testtimonialslice=createSlice({
    name:"testtimonial",
    initialState:{
        testtimonialitem:[],
        status:STATUS.IDEL
    },
    extraReducers:(builder)=>{
        builder
        .addCase(Testtimonial.pending,(state,action)=>{
            state.status=STATUS.LOADING;
        })
        builder.addCase(Testtimonial.fulfilled,(state,action)=>{
            state.testtimonialitem=action.payload;
            state.status=STATUS.IDEL;
        })
        builder.addCase(Testtimonial.rejected,(state,action)=>{
            state.status=STATUS.ERROR
        })
    },
})
// end testtimonail

// service
export const serviceslice=createSlice({
    name:"service",
    initialState:{
        serviceitem:[],
        status:STATUS.IDEL
    },
    extraReducers:(builder)=>{
        builder
        .addCase(Service.pending,(state,action)=>{
            state.status=STATUS.LOADING;
        })
        builder.addCase(Service.fulfilled,(state,action)=>{
            state.serviceitem=action.payload;
            state.status=STATUS.IDEL;
        })
        builder.addCase(Service.rejected,(state,action)=>{
            state.status=STATUS.ERROR
        })
    },
})
// end service
// service details
        export const ServiceDetailsSlice= createSlice({
            name : "user",
            initialState:{
                ServiceDetailsitem:[],
                status:STATUS.IDEL
            },
            extraReducers:(builder)=>{
        builder
        .addCase(ServiceDetailsfetch.pending,(state,action)=>{
            state.status=STATUS.LOADING;
        })
        builder.addCase(ServiceDetailsfetch.fulfilled,(state,action)=>{
            state.ServiceDetailsitem=action.payload;
            state.status=STATUS.IDEL;
        })
        builder.addCase(ServiceDetailsfetch.rejected,(state,action)=>{
            state.status=STATUS.ERROR
        })
            }
        })

// end ser details

// blog slice

export const blogslice=createSlice({
    name:"blog",
    initialState:{
        blogitem:[],
        status:STATUS.IDEL
    },
    extraReducers:(builder)=>{
        builder
        .addCase(Blog.pending,(state,action)=>{
            state.status=STATUS.LOADING;
        })
        builder.addCase(Blog.fulfilled,(state,action)=>{
            state.blogitem=action.payload;
            state.status=STATUS.IDEL;
        })
        builder.addCase(Blog.rejected,(state,action)=>{
            state.status=STATUS.ERROR
        })
    },
})
// end blog 
// blog details slice 
 export const BlogDetailsSlice = createSlice ({
    name :"bloddetails",
    initialState:{
        blogdetailsitem:[],
        status:STATUS.IDEL
    },
    extraReducers : (builder)=>{
        builder
        .addCase(BlogDetailsfetch.pending,(state,action)=>{
            state.status=STATUS.LOADING;
        })
        builder.addCase(BlogDetailsfetch.fulfilled,(state,action)=>{
            state.blogdetailsitem=action.payload;
            state.status=STATUS.IDEL;
        })
        builder.addCase(BlogDetailsfetch.rejected,(state,action)=>{
            state.status=STATUS.ERROR
        })

    }

 })
// end blog details slice
export const {Removefun,check_token} = Loginslice.actions