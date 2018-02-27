import React, { Component } from 'react';
import './App.css';
import EditForm from './EditForm Component/EditForm';
import Film from './Film Component/film';
import { Grid, PageHeader } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [
        {name: 'Robocop', description: 'Robocop Desc', rating: 5, id: 1, image: null},
        {name: 'Terminator 1', description: 'Term 1 Desc', rating: 4, id: 2, image: null},
        {name: 'Terminator 2', description: 'Term 2 Desc', rating: 4, id: 2, image: null},
        {name: 'Terminator 3', description: 'Term 3 Desc', rating: 2, id: 3, image: null}
      ],
      selectedFilm: null
    }

    this.selectFilm = this.selectFilm.bind(this);
    this.cancelEditing = this.cancelEditing.bind(this);
    this.updateFilm = this.updateFilm.bind(this);
  };

  selectFilm(idx) {
    this.setState({
      selectedFilm: idx
    })
  }

  updateFilm(film) {
    const newState = this.state.films;
    newState.forEach((f, ind) => {
      if (f.id === film.id) {
        newState[ind] = film;
      }
    })
    this.setState({
      films: newState,
      selectedFilm: null
    }, () => console.log(this.state))
    
  }

  cancelEditing() {
    this.setState({
      selectedFilm: null
    })    
  }

  render() {
    const ratings = [1,2,3,4,5];
    const selectedFilm = this.state.films[this.state.selectedFilm]
    return (
      <Grid className="container">
        <PageHeader>
          <img class="header image" src={require('./images/movie.png')} alt="" height="100px" />
          Homemage React IMDB
        </PageHeader>
        <div>
          {this.state.films.map((f, ind) => (
            <Film film={f} index={ind} selectedFilm={this.state.selectedFilm} selectFilm={this.selectFilm} />
          ))}
        </div>
        {this.state.selectedFilm !== null && 
          <EditForm film={selectedFilm} ratings={ratings} cancelEditing={this.cancelEditing} saveChanges={this.updateFilm} />}
      </Grid>
    )
  }
};

export default App;
