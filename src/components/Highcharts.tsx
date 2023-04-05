import React from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';
import {render} from "react-dom";

const options = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'My chart'
    },
    series: [
        {
            data: [1, 2, 1, 4, 3, 6]
        }
    ]
};

export function HighchartsGraph() {
    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options}/>
        </div>
    );
}

render(<HighchartsGraph/>, document.getElementById('root'));
