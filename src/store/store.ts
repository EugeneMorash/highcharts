import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppActionType, appReducer} from "../app/app-reducer";

const rootReducer = combineReducers({
    appData: appReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))


// * types
export type AppRootStateType = ReturnType<typeof store.getState>
export type AppActionsType =
    | AppActionType

export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AppActionsType>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>


// @ts-ignore
window.store = store // для отладки