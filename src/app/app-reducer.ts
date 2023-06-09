import {AppThunkType} from "../store/store";
import {AxiosError} from "axios";
import {appAPI} from "../api/app-api";


const initialState = {}

export type AppActionType =
    | GetDataAT
    | SetLoadingAT

type GetDataAT = ReturnType<typeof getDataAC>
type SetLoadingAT = ReturnType<typeof setLoadingAC>


export const appReducer = (state: any = initialState, action: AppActionType) => {
    switch (action.type) {
        case 'SET-LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'GET-DATA':
            return {
                ...state,
                appData: action.appData
            }
        default:
            return state
    }
}

//* Action Creators

export const setLoadingAC = (isLoading: boolean) => ({
    type: 'SET-LOADING',
    isLoading
}) as const
export const getDataAC = (appData: any) => ({
    type: 'GET-DATA',
    appData
}) as const

//* Thunk Creators
export const getDataTC = (): AppThunkType => {
    return (dispatch) => {
        dispatch(setLoadingAC(true))
        appAPI.getData()
            .then((res) => {
                dispatch(getDataAC(res.data))
            })
            .catch((e: AxiosError) => {
                alert(e)
            })
            .finally(() => {
                dispatch(setLoadingAC(false))
            })
    }
}