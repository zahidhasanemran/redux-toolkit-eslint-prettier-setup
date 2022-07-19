/* ==================================================================================================================================
  1. Configure store with reducer
  2. Provide  all the reducer with respected name like (app: CoctailReducer)
===================================================================================================================================*/

import { configureStore } from "@reduxjs/toolkit";
import CoctailReducer from "./features/cocktailSlice";

export default configureStore({
  reducer: {
    app: CoctailReducer,
  },
});
