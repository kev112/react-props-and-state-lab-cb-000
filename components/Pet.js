const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
    this.onAdoptPet = this.onAdoptPet.bind(this);
  }

  onAdoptPet() {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            Pet name: {this.props.pet.name} (gender: {this.props.pet.gender === 'male' ? '♂' : '♀'})
          </a>
          <div className="meta">
            <span className="date">Pet type  {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>id: {this.props.pet.id}</p>
            <p>type: {this.props.pet.type}</p>
            <p>age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.onAdoptPet}>Adopt pet</button> }
        </div>
      </div>
    );
  }
}

// if (this.props.pet.isAdopted)  {
//    <button className="ui disabled button">Already adopted</button>
// } else {
//    <button className="ui primary button" onclick={this.onAdoptPet}>
//     Adopt pet
//   </button>
// }

module.exports = Pet;
