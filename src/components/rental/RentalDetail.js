import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';



class RentalDetail extends React.Component {

  componentWillMount() {
    const rentalId = this.props.match.params.id;
    this.props.dispatch(actions.fetchRentalById(rentalId));
  }


  render() {
    debugger;
    const rental = this.props.rental;

    return (
      <div>
        <h1>{rental.city}</h1>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    rental: state.rental.data
  }

}

export default connect(mapStateToProps)(RentalDetail)
