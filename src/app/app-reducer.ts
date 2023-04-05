import {AppThunkType} from "../store/store";
import {AxiosError} from "axios";
import {appAPI} from "../api/app-api";


const initialState = {
    "volume_marginality_relation": {
        "2021": {
            "vds_wsub": [
                {
                    "name": "",
                    "x": 0,
                    "y": 0
                },],
            "vds_sub": [
                {
                    "name": "",
                    "x": 0,
                    "y": 0
                },]
        }

    }
}

export type AppActionType =
    | GetDataAT

type GetDataAT = ReturnType<typeof getDataAC>

export const appReducer = (state: any = initialState, action: AppActionType) => {

    switch (action.type) {
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
export const getDataAC = (appData: any) => ({
    type: 'GET-DATA',
    appData
}) as const

//* Thunk Creators
export const getDataTC = (): AppThunkType => {
    return (dispatch) => {
        // dispatch(setLoadingAC(true))
        appAPI.getData()
            .then((res) => {
                dispatch(getDataAC(res.data))
            })
            .catch((e: AxiosError) => {
                alert(e)
            })
        // .finally(() => {
        //     dispatch(setLoadingAC(false))
        // })
    }
}