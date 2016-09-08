import React from 'react';
import NavBar from './NavBar';
import { GoogleMap, GoogleMapLoader, Marker, SearchBox } from "react-google-maps";
import update from "react-addons-update";

class BestOf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [{
        position: {
          lat : 34.0192691,
          lng : -118.4943443
        },
        key: `1234`,
        defaultAnimation: 2,
      }],
    };
  }
  componentDidMount() {
    // setTimeout(() => {
    //   let { markers } = this.state;
    //   markers = update(markers, {
    //     $push: [
    //       {
    //         position: {
    //           lat: 25.99,
    //           lng: 122.9,
    //         },
    //         defaultAnimation: 2,
    //         key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
    //       },
    //     ],
    //   });
    //   this.setState({ markers });
    // }, 2000);
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    let { markers } = this.state;
    markers = update(markers, {
      $push: [
        {
          position: event.latLng,
          defaultAnimation: 2,
          key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
        },
      ],
    });
    this.setState({ markers });
  }

  handleMarkerRightclick(index, event) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    let { markers } = this.state;
    markers = update(markers, {
      $splice: [
        [index, 1],
      ],
    });
    this.setState({ markers });
  }

  render() {
    return (
      <div>
      <section id="map">
      <GoogleMapLoader
        containerElement={
          <div
            {...this.props.containerElementProps}
            style={{
              height: "100%",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={13}
            defaultCenter={{
              lat : 34.0192691,
              lng : -118.4943443 }}
            onClick={this.props.onMapClick}
          >
            {this.state.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  onRightclick={() => this.props.onMarkerRightclick(index)} />
              );
            })}
          </GoogleMap>
        }
      />
    </section>
      </div>
    )
  }
}

export default BestOf;
