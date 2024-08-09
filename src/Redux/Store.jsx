import {configureStore} from '@reduxjs/toolkit';
import { BlogDetailsSlice, Loginslice, ServiceDetailsSlice, bannerslice, blogslice, serviceslice, testtimonialslice, trainerslice } from './Allslice';
import { BookingSlice } from './BookingSlice';
import { BookingDashboardSlice } from './DasboardSlice';



export const Store = configureStore({
    reducer:{
        bannerstore:bannerslice.reducer,
        traierstore:trainerslice.reducer,
        testtimonialstore:testtimonialslice.reducer,
        servicestore:serviceslice.reducer,
        blogstore: blogslice.reducer,
        logininstore:Loginslice.reducer,
        servicedetailsstore:ServiceDetailsSlice.reducer,
        blogdetailsstore:BlogDetailsSlice.reducer,
        bookingstore: BookingSlice.reducer,
        bookingdashboard:BookingDashboardSlice.reducer
    }
})