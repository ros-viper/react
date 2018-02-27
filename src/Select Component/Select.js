import React, { Component } from 'react';
import './Select.css';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';


class Select extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        nextPlanetsPage: 'https://www.swapi.co/api/planets/?page=7',
        planets: [],
        selectedPlanet: {}
      };


      this.componentDidMount = this.componentDidMount.bind(this);
      this.planetSelected = this.planetSelected.bind(this);
      this.renderSelectOption = this.renderSelectOption.bind(this);
      this.getPlanets = this.getPlanets.bind(this);
    };

    getPlanets(url) {
        fetch(url)
        .then(res => res.json())
        .then(results => {
            const newState = {planets: [...this.state.planets, ...results.results], nextPlanetsPage: results.next}            
            this.setState(newState)
            console.log(this.state.nextPlanetsPage)
        })
        .catch(e => console.log(e));
    }

    componentDidMount() {
        // while (this.state.nextPlanetsPage) {
        this.getPlanets(this.state.nextPlanetsPage);
        // }
      };

    planetSelected(eventKey) {
        this.setState({
            selectedPlanet: eventKey
        })
    }

    renderSelectOption(planet) {      
        return (    
            <option value={planet.name} key={planet.name} onSelect={this.planetSelected}>{planet.name}</option>
        )
    }

    render() {
        return (
            <FormGroup id="planetsSelect">
                <ControlLabel>Select a planet</ControlLabel>
                <FormControl componentClass="select" placeholder="Choose planet">
                    <option>Choose</option>
                    {this.state.planets.map(this.renderSelectOption)}
                </FormControl>
            </FormGroup>
        );
    };
}

export default Select;



