import React from "react";
import Table from 'react-bootstrap/Table';

import Plot from 'react-plotly.js';
import Card from 'react-bootstrap/Card';

class ItemTable extends React.Component {

    render() {
        var values = [
            ['A', 'B', 'C', 'D', null],
            [1200000, 20000, 80000, 2000, 12120000],
            [1300000, 20000, 70000, 2000, 130902000],
            [1300000, 20000, 120000, 2000, 131222000],
            [1400000, 20000, 90000, 2000, 14102000]]

        var data = [{
            type: 'table',
            header: {
                values: [["Type"], ["Type"], ["<b>Name</b>"], ["<b>Rarity</b>"],
                ["<b>Price</b>"], ["Attunement"], ["<b>InStock</b>"], ["<b>InStock</b>"]],
                align: "center",
                line: { width: 0, color: 'black' },
                //   fill: {color: "grey"},
                font: { color: "black", size: "3 em" }
            },
            cells: {
                values: values,
                align: "center",
                line: { color: "black", width: 0 },
                font: {
                    // family: "Arial", size: 11, 
                    color: ["black", "red", "green", "black"]
                }
            }
        }]
        return <Plot
        data={data}
        config={{ "responsive": true }}
    />
    }
}

export default ItemTable