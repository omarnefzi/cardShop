import { configureStore } from "@reduxjs/toolkit";
import  productSlice  from "./cardSlice";


const store = configureStore({
  reducer :{
    products :productSlice
  }
});
export default store;
