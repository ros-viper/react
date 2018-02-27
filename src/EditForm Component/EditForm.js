import React, { Component } from 'react';
import './EditForm.css';
import {FormGroup, FormControl, ControlLabel, Form, Col, Row, ButtonToolbar, Button} from 'react-bootstrap';
import TextareaAutosize from 'react-autosize-textarea';


class EditForm extends Component {
    constructor(props) {
        super(props);

        this.state = this.props;

        this.cancelEditing = this.cancelEditing.bind(this);
        this.changeProp = this.changeProp.bind(this);
        this.saveChanges = this.saveChanges.bind(this);   
        this.changeImage = this.changeImage.bind(this);     
    }
    

    componentWillReceiveProps(nextProps) {
        this.setState({
            film: nextProps.film,
            ratings: nextProps.ratings
        })
    }

    saveChanges = () => {
        this.props.saveChanges(this.state);
        this.setState({
            film: null
        })
    }

    cancelEditing = () => {
        this.props.cancelEditing();
    }

    changeProp(event) {        
        const kind = event.target.getAttribute('kind');
        let value = event.target.value;

        let newState = {};
        newState = this.state;
        newState.film[kind] = value;
        
        this.setState(newState);

    }
    changeImage(event) {
        const file = event.target.files[0];
        const film = this.state.film;
        film.image = file;

        this.setState({film});
    }
    

    render() {
        return (
            <Form>
                <Row>
                    <Col md={4} lg={6}>
                        <FormGroup controlId="nameInput">
                            <ControlLabel>Name: </ControlLabel>
                            <FormControl componentClass="input" kind="name" value={this.state.film.name} onChange={this.changeProp}></FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} lg={6}>
                        <FormGroup controlId="descTxtArea">
                            <ControlLabel>Description: </ControlLabel>
                            <TextareaAutosize componentClass="textarea" rows={5} maxRows={15} kind="description" value={this.state.film.description} onChange={this.changeProp} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} lg={10}>
                        <Form>
                            <FormGroup controlId="fileInput">
                                <ControlLabel>Choose file</ControlLabel>
                                <FormControl type="file" label="file" onChange={this.changeImage}></FormControl>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col lg={2}>
                        <Form>
                            <FormGroup controlId="ratingSelect">
                                <ControlLabel>Select rating</ControlLabel>
                                <FormControl componentClass="select" placeholder="Select Rating" value={this.state.film.rating} kind="rating" onChange={this.changeProp}>
                                    {this.state.ratings.map((rating, ind) => (
                                        <option value={rating} key={ind}>{rating} star{rating !==1 ? 's' : ''}</option>
                                    ))}
                                </FormControl>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} lg={10}>
                        <ButtonToolbar>
                            <Button bsStyle="success" onClick={this.saveChanges}>Save</Button>
                            <Button bsStyle="danger" onClick={this.cancelEditing}>Cancel</Button>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Form>           
        )
    }

};

export default EditForm;