import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.onChangeType = this.onChangeType.bind(this);
    this.onAdoptPet = this.onAdoptPet.bind(this);
    this.fetchPets = this.fetchPets.bind(this);
  }

  onChangeType(type) {
    this.setState({ filters: { type: type } })
  }

  onAdoptPet(id) {
    this.setState( { adoptedPets: [...this.state.adoptedPets, id] } )
  }

  fetchPets() {
    let url
    switch(this.state.filters.type) {
    case 'all':
        url = '/api/pets'
        break;
    case 'cat':
         url = '/api/pets?type=cat'
        break;
    case 'dog':
         url = '/api/pets?type=dog'
        break;
    case 'micropig':
         url = '/api/pets?type=micropig'
        break;
    default:
        alert('invalid pet type')
    }

    fetch(url).then(function (pet) {
        pet.json();
      }).then(function (pet) {
        this.setState( { pet });
      });

  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType= {this.onChangeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
