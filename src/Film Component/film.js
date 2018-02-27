import React, { Component } from 'react';
import Image from 'react-image-file';
import { Col, Row } from 'react-bootstrap';
import './film.css';


class Film extends Component {
    constructor(props) {
        super(props)

        this.state = props

        this.selectFilm = this.selectFilm.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            film: nextProps.film,
            index: nextProps.index,
            selectedFilm: nextProps.selectedFilm
        })
    }

    selectFilm() {
        this.state.selectFilm(this.state.index)        
    }

    render() {
        return (
            <Row className="show-grid" key={this.state.film.id} onClick={this.selectFilm}>
                {this.state.film.image ?
                    <Col md={3} lg={3} className="image">
                        <Image file={this.state.film.image} height="268px" />                        
                    </Col>
                    : 
                    <Col md={3} lg={3} className="image">
                        <img src={require('../images/no-image.jpeg')} alt="" />
                    </Col>
                }
                <Col sm={4} md={4} lg={6}>
                    <div>                    
                        <p>
                            <b>Name: </b>{this.state.film.name}
                            {this.state.index === this.state.selectedFilm ? <Selected /> : null}
                        </p>
                        <p><b>Rating: </b>{this.state.film.rating}</p>
                        <p><b>Description: </b><i>{this.state.film.description}</i></p>
                    </div>
                </Col>
            </Row>
        )
    }
};

function Selected() {
    return (
      <b>{"<----selected"}</b>
    )
};

export default Film;