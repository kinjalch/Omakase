import { GoogleMap, Marker, SearchBox } from "react-google-maps";
import React from 'react';
import NavBar from './NavBar';

class BestOf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /* functions */
  render() {
    return (
      <div>
      <script type="text/javascript"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBKzBInzbbwqbFWDpH5aqy8I73k3j4XiRM&libraries=geometry,places,visualization">
      </script>
      </div>
    )
  }
}

export default BestOf;
