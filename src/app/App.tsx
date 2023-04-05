import React, {useEffect} from 'react';
import {HighchartsGraph} from '../components/Highcharts';
import {useAppDispatch, useAppSelector} from "../hook/hook";
import {getDataTC} from "./app-reducer";
import {Loader} from "../Loader/Loader";

function App() {

    const dispatch = useAppDispatch()

    const isLoading = useAppSelector((state) => state.appData.isLoading)

    useEffect(() => {
        dispatch(getDataTC())
    }, [])

    return (
        <div>
            {
                isLoading ?
                    <Loader/> : <HighchartsGraph/>
            }
        </div>
    );
}

export default App;
