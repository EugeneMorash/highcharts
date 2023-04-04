import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hook/hook";
import {getDataTC} from "./app-reducer";

function App() {

    const dispatch = useAppDispatch()
    const appData = useAppSelector((state) => state.appData)


    useEffect(() => {
        dispatch(getDataTC())
    }, [dispatch])

    
    console.log(appData.appData)

    return (
        <div>
            111
        </div>
    );
}

export default App;
