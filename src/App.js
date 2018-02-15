import React, { Component } from 'react';
import './App.css';
import { Grid, Col, Row } from 'react-bootstrap';

const Ital = props => <Col xs={6} md={2}><i>{props.name}</i></Col>

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'John Doe',
      title: 'Unknown'
    };

    this.change_prop = this.change_prop.bind(this);
  };

  change_prop(event) {
    // if (event.target.className === 'name input') {
    //   const obj = event.target.getAttribute('kind');
    //   this.setState({
    //     obj: event.target.value ? event.target.value.substr(0,1).toUpperCase() + event.target.value.substr(1) : 'Vasyan'
    //   });
    // } else if (event.target.className === 'title input') {
    //   this.setState({
    //     title: event.target.value ? event.target.value.substr(0,1).toUpperCase() + event.target.value.substr(1) : 'Cleaner'
    //   });
    // }
    const kind = event.target.getAttribute('kind');
    let newState = {};
    newState[kind] = event.target.value.substr(0,1).toUpperCase() + event.target.value.substr(1);
    
    this.setState(newState);

  }

  render() {
    return (
      <Grid>
        <Row>
          <Ital name={this.state.name} />
          <Col xs={6} md={4}>
            <input className="name input" type="text" kind="name" value={this.state.name} onChange={this.change_prop} />
          </Col>
        </Row>
        <Row>
          <Col className="title output" xs={6} md={2}>{this.state.title}</Col>
          <Col xs={6} md={4}>
            <input className="title input" type="text" kind="title" onChange={this.change_prop} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
