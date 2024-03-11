import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import videoSlice from "./videoSlice";

const persistConfig = {
    key: 'root',
    storage,
};
const rootReducer = combineReducers({
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    video: videoSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer,
});
let persistor = persistStore(store);
export { store, persistor };
