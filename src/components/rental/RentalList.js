import React from 'react';
import {RentalCard} from "./RentalCard";
import {connect} from 'react-redux';
import * as actions from '../../actions';

class RentalList extends React.Component {

  // constructor() {
  //   super();
  //
  //   this.state = {
  //   };
  //
  //   //Adding this to onClick Function
  //   // this.addNewRental = this.addNewRental.bind(this);
  // }

  renderRentals() {
    return this.props.rentals.map((rental, index) => {
      return (
        <RentalCard
          key={index}
          rental={rental}/>
      )
    });
  }

  // addNewRental() {
  //   const rentals = this.state.rentals;
  //   rentals.push(1);
  //
  //   this.setState({
  //     rentals: rentals
  //   })
  // }

  componentWillMount() {
      this.props.dispatch(actions.fetchRentals());
  }

  render() {
    return (
      <section id="rentalListing">
        <h1 className="page-title">Your Home All Around the World</h1>
        <div className="row">
          {this.renderRentals()}
        </div>
        {/*able to user an arrow function*/}
        {/*<button onClick={() => {this.addNewRental()}}>*/}
        {/*<button onClick={this.addNewRental}>*/}
          {/*Add New Rental*/}
        {/*</button>*/}

      </section>

    )
  }
}

function mapStateToProps(state) {
    return {
      rentals: state.rentals.data
    }

}

export default connect(mapStateToProps)(RentalList)
