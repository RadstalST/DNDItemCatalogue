import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Fade, Row, ListGroup } from "react-bootstrap";
import Plot from 'react-plotly.js';
import { Card } from "react-bootstrap";
class OccuranceTable extends React.Component {
    constructor(props) {
        super(props);

        // Bind event handlers
        this.sliderChangedCallback = this.sliderChangedCallback.bind(this);
        this.setDefaultSetting = this.setDefaultSetting.bind(this);
        this.defaultToggleCallback = this.defaultToggleCallback.bind(this);
        this.setFormValueDefault = this.setFormValueDefault.bind(this);

        // Set default state
        const defaults = [
            { name: "tools", value: 95 },
            { name: "common magic item", value: 5 },
            { name: "rare magic item", value: 1 }
        ];
        const formValue = {};
        defaults.forEach(item => {
            formValue[item.name] = item.value;
        });
        this.state = {
            default: defaults,
            preset: "Default",
            formValue: formValue
        };
    }
    setDefaultSetting() {
        console.log("Setting default");

        let defaults = [
            { name: "tools", value: 95 },
            { name: "commpn magic item", value: 5 },
            { name: "rare magic item", value: 1 }
        ]
        switch (this.state.preset) {
            case 'Rich':
                defaults = [
                    { name: "tools", value: 90 },
                    { name: "common magic item", value: 20 },
                    { name: "rare magic item", value: 10 }
                ]
                break;
            case 'Normal':
                defaults = [
                    { name: "tools", value: 80 },
                    { name: "common magic item", value: 10 },
                    { name: "rare magic item", value: 5 }
                ]
                break;
            case 'Poor':
                defaults = [
                    { name: "tools", value: 70 },
                    { name: "common magic item", value: 5 },
                    { name: "rare magic item", value: 0 }
                ]
                break;
            default:
                defaults = [
                    { name: "tools", value: 90 },
                    { name: "common magic item", value: 10 },
                    { name: "rare magic item", value: 5 }
                ]
        }
        this.setState({ "default": defaults })

    }
    setFormValueDefault() {
        var formValue = { ...this.state.formValue }
        this.state.default.map((item) => {
            formValue[item.name] = item.value
        })
        this.setState({ formValue })
    }
    defaultToggleCallback(event) {
        console.log(event.target.value)
        this.setState({ preset: event.target.value })
        this.setDefaultSetting()
        this.setFormValueDefault()
    }

    sliderChangedCallback(event) {
        const { name, value } = event.target;
        this.setState(prevState => ({
            formValue: {
                ...prevState.formValue,
                [name]: value
            }
        }));
    }
    render() {
        let limits = { enabled: true, minStart: 0, minEnd: 100 };
        let defaults = this.state.default
        let labels = Object.keys(this.state.formValue)
        var data = [{
            values: labels.map((item) => { return this.state.formValue[item] }),
            labels: labels,
            type: 'pie',
            textinfo: "label+percent",
            colorscale: 'YlGnBu',
            // automargin: true,

        }];

        var layout = {
            showlegend: false,
            colorway:['#f3cec9', '#e7a4b6', '#cd7eaf', '#a262a9', '#6f4d96', '#3d3b72', '#182844']
        }

        let tuning_list = defaults.map((item) => {
            return <Form.Group key={item["name"]} >
                <Form.Label>{item["name"]} {this.state.formValue[item["name"]]}</Form.Label>
                <Row>
                    <Col>
                        <Form.Range
                            value={this.state.formValue[item["name"]]}
                            name={item["name"]}
                            limits={limits}
                            onChange={this.sliderChangedCallback} />
                    </Col>
                    <Col>
                        <Form.Control type="text"
                            value={this.state.formValue[item["name"]]}
                            name={item["name"]}
                            onChange={this.sliderChangedCallback}
                        />

                    </Col>
                </Row>


            </Form.Group>
        })
        return <Row>
            <Col>
                <Plot data={data} layout={layout} config={{ "responsive": false }} />

            </Col>
            <Col>
                <Form>
                    <Card>
                        <Card.Header>Item Occurance</Card.Header>

                        <Card.Body>
                            <Card.Title>Item Occurance</Card.Title>
                            {tuning_list}
                            <Form.Label>Preset</Form.Label>
                            <Form.Select onChange={this.defaultToggleCallback}>
                                <option>Default</option>
                                <option>Poor</option>
                                <option>Normal</option>
                                <option>Rich</option>
                            </Form.Select>
                        </Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>


                    </Card>
                </Form>
            </Col>
        </Row>
    }
}

export default OccuranceTable