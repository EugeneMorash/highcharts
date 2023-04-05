import React, {useEffect} from 'react';
import {HighchartsGraph} from '../components/Highcharts';
import {useAppDispatch, useAppSelector} from "../hook/hook";
import {getDataTC} from "./app-reducer";

function App() {

    const dispatch = useAppDispatch()
    const appData = useAppSelector((state) => state.appData)


    useEffect(() => {
        dispatch(getDataTC())
    }, [dispatch])


    return (
        <div>
            <HighchartsGraph/>
        </div>
    );
}

export default App;
