import React, {useState} from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';
import {useAppSelector} from "../hook/hook";
import {Button, ButtonGroup} from "@material-ui/core";


export function HighchartsGraph() {

    const appData = useAppSelector((state) => state.appData)


    // const startWSub = appData.appData.volume_marginality_relation[2021].vds_wsub
    //
    // const startSub = appData.appData.volume_marginality_relation[2021].vds_sub

    const [seriesWSub, setSeriesWSub] = useState([])

    const [seriesSub, setSeriesSub] = useState([])


    const options = {
        yAxis: {
            title: {
                text: 'ВДС НПЗ, руб/тонну'
            }
        },
        xAxis: {
            title: {
                text: 'Переработанное нефтяное сырье накопленным итогом, тонн'
            }
        },
        legend: {
            align: 'right',
            verticalAlign: 'top'
        },
        title: {
            text: ''
        },
        series: [
            {
                name: 'С учетом субсидии',
                data: seriesWSub
            },
            {
                name: 'Без учета субсидии',
                data: seriesSub
            },

        ]
    };
    const on2021ClickHandler = () => {
        setSeriesWSub(appData.appData.volume_marginality_relation[2021].vds_wsub)
        setSeriesSub(appData.appData.volume_marginality_relation[2021].vds_sub)
        console.log(seriesSub, seriesWSub)
    };

    const on2022ClickHandler = () => {
        setSeriesWSub(appData.appData.volume_marginality_relation[2022].vds_wsub)
        setSeriesSub(appData.appData.volume_marginality_relation[2022].vds_sub)

    };

    const on2023ClickHandler = () => {
        setSeriesWSub(appData.appData.volume_marginality_relation[2023].vds_wsub)
        setSeriesSub(appData.appData.volume_marginality_relation[2023].vds_sub)

    };

    const on2024ClickHandler = () => {
        setSeriesWSub(appData.appData.volume_marginality_relation[2024].vds_wsub)
        setSeriesSub(appData.appData.volume_marginality_relation[2024].vds_sub)

    };

    return (
        <div>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={on2021ClickHandler}>2021</Button>
                <Button onClick={on2022ClickHandler}>2022</Button>
                <Button onClick={on2023ClickHandler}>2023</Button>
                <Button onClick={on2024ClickHandler}>2024</Button>
            </ButtonGroup>

            <HighchartsReact highcharts={Highcharts} options={options}/>
        </div>
    );
}
