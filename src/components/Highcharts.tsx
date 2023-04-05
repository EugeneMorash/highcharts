import React from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';
import {useAppSelector} from "../hook/hook";
import {Button, ButtonGroup} from "@material-ui/core";


export function HighchartsGraph() {

    const appData = useAppSelector((state) => state.appData)

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
        // chart: {
        //     type: 'spline'
        // },  //* плавный изгиб
        title: {
            text: ''
        },
        series: [
            {
                name: 'С учетом субсидии',
                data: [1, 2, 1, 4, 3, 6]
            },
            {
                name: 'Без учета субсидии',
                data: [2, 3, 5, 4, 1, 3]
            },

        ]
    };

    return (
        <div>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button>2021</Button>
                <Button>2022</Button>
                <Button>2023</Button>
                <Button>2024</Button>
            </ButtonGroup>

            <HighchartsReact highcharts={Highcharts} options={options}/>
        </div>
    );
}
