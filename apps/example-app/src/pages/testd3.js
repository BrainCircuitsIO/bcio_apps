import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import Layout from "../components/layout"

import axios from 'axios'

const TestD3Integration = () => {

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        axios({
            method: 'get',
            crossDomain: true,
            url: 'https://fafb.catmaid.virtualflybrain.org/1/stats/cable-length',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            // sort by length and only pick the longes skeletons
            // click on pie-chart to fetch the largest and open in catmaid
            var d = response['data'].sort((a, b) => {
                return b[1] - a[1];
            });
            var out = [];
            d.slice(0, 10).forEach(element => {
                out.push({ 'name': "Skeleton: " + element[0], 'value': Math.floor(element[1]) })
            });
            setData(out)
        });
    }, [])

    const onPieEnter = () => {
        console.log('onPieEnter callback');
    }

    const onClick = (sector) => {
        console.log('onClick', sector)
        if (sector !== null) {
            console.log('clicked skeleton', data[sector.activeLabel]);
        }
    }

    return (
        <Layout>
            This simple app pulls the 10 largest skeletons from the <a href="https://fafb.catmaid.virtualflybrain.org/">FAFB CATMAID API publicly hosted at VirtualFlyBrain</a> and displays a pie-chart using the <a href="https://recharts.org/">recharts React library</a> of those skeletons with their skeletonId and size corresponding to their length.
            This demonstrates how to quickly build a simple connetomics app based on existing infrastructure, APIs and libraries in a self-contained and extensible way.
            <br /><br />
            <PieChart width={800} height={400} onMouseEnter={onPieEnter} onClick={onClick}>
                <Pie
                    data={data}
                    cx="50%"
                    cy={200}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </Layout>
    );

}

export default TestD3Integration