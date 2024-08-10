import { configureStore } from "@reduxjs/toolkit";
import profileReduser from "./profile/profileSlice";

export const store = configureStore({
    reducer: {
        profile: profileReduser,
    },
});
