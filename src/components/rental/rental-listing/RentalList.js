import React from 'react';
import {RentalCard} from "./RentalCard";

export class RentalList extends React.Component {

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


  render() {
    return (
      <div className="row">
        {this.renderRentals()}
      </div>
    )
  }
}

// function mapStateToProps(state) {
//   return {
//     rentals: state.rentals.data
//   }
// }
