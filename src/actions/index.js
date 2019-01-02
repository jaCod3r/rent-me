import {FETCH_RENTALS, FETCH_RENTAL_BY_ID_SUCCESS, FETCH_RENTALS_BY_ID_INIT, FETCH_RENTALS_SUCCESS} from "./types";
import axios from 'axios';


const fetchRentalsSuccess = (rentals) => {
  return {
    type: FETCH_RENTALS_SUCCESS,
    rentals
  }
}

export const fetchRentals = () => {
  return dispatch => {
    axios.get('/api/v1/rentals/').then((rentals) => {
      dispatch(fetchRentalsSuccess(rentals))
    });
  }
};

export const fetchRentalByIdInit = () => {
  return {
    type: FETCH_RENTALS_BY_ID_INIT,
  }
};




export const fetchRentalById = (rentalId) => {
  return function(dispatch) {
    //Send request to server
    dispatch(fetchRentalByIdInit());

    axios.get(`/api/v1/rentals/${rentalId}`).then((rental) => {
      dispatch(fetchRentalsSuccess(rental.data));
    })

    // setTimeout(() => {
    //   const rental = rentals.find((rental) => rental.id.toString() === rentalId);
    //   dispatch(fetchRentalByIdSuccess(rental));
    // }, 1000);

    // return {
    //   type: FETCH_RENTAL_BY_ID,
    //   rental
    // }
  }
};


const fetchRentalByIdSuccess = (rental) => {
  return {
    type: FETCH_RENTAL_BY_ID_SUCCESS,
    rental
  }
};

