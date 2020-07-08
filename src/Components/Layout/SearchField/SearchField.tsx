import React from 'react';
import './SearchField.css';

export const SearchField = (props: any) => (
  <form onSubmit={props.getWeather} className="form-inline searchField">
    <input
      className="form-control mr-2"
      type="text"
      id="city"
      placeholder="City"
    />
    <input
      className="form-control mr-2"
      type="text"
      id="country"
      placeholder="Country Code"
    />

    <button id="get" className="btn btn-light" type="submit">
      Search
    </button>
  </form>
);

// export default SearchField;
