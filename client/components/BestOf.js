import React from 'react';
import NavBar from './NavBar';
import { GoogleMap, GoogleMapLoader, InfoWindow, Marker, SearchBox } from "react-google-maps";
import update from "react-addons-update";

class BestOf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          position: {
            lat : 34.0187734,
            lng : -118.4916591
          },
          info: "Best Poke: Spinfish",
          showInfo: false,
          defaultAnimation: 2,
        },
        {
          position: {
            lat : 34.0188797,
            lng : -118.4959362
          },
          info: "Best Sandwich: Bay Cities",
          showInfo: false,
          defaultAnimation: 2,
        },
        {
          position: {
            lat : 34.0197516,
            lng : -118.4922921
          },
          info: "Best Wendy's: Wendy's",
          showInfo: false,
          defaultAnimation: 2,
        },
        {
          position: {
            lat : 34.0175996,
            lng : -118.4935474
          },
          info: "Best Burger: Umami Burger",
          showInfo: false,
          defaultAnimation: 2,
        },
        {
          position: {
            lat : 34.0179508,
            lng : -118.4935666
          },
          info: "Best Coffee: Philz Coffee",
          showInfo: false,
          defaultAnimation: 2,
        },
        {
          position: {
            lat : 34.0192343,
            lng : -118.4938359
          },
          info: "Best Upscale French-Asian Cuisine: Cassia",
          showInfo: false,
          defaultAnimation: 2,
        }
      ],
    };
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMarkerRightclick = this.handleMarkerRightclick.bind(this);
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     let markers = this.state.markers;
  //   //   console.log('markers = ', markers);
  //   //   markers = update(markers, {
  //   //     $push: [
  //   //       {
  //   //         position: {
  //   //           lat: 25.99,
  //   //           lng: 122.9,
  //   //         },
  //   //         defaultAnimation: 2,
  //   //         key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
  //   //       },
  //   //     ],
  //   //   });
  //   //   this.setState( {markers} );
  //   // }, 2000);
  // }
  handleMarkerClick(marker) {
    marker.showInfo = true;
    this.setState(this.state);
  }

  handleMarkerClose(marker) {
    marker.showInfo = false;
    this.setState(this.state);
  }

  renderInfoWindow(ref, marker) {
    console.log('ref = ',this.state.markers[ref].info );
    return (
      //You can nest components inside of InfoWindow!
      <InfoWindow
        key={`${ref}_info_window`}
        onCloseclick={this.handleMarkerClose.bind(this, marker)} >

        <div>
          { this.state.markers[ref].info }
        </div>

      </InfoWindow>

    );

  }
  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    // let { markers } = this.state;
    // markers = update(markers, {
    //   $push: [
    //     {
    //       position: event.latLng,
    //       defaultAnimation: 2,
    //       key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
    //     },
    //   ],
    // });
    console.log("clicked on map!");
    //this.setState({ markers });
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
      <NavBar navLink={"/vote"} navMessage={"Go Vote!"}/>
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
            defaultZoom={17}
            defaultCenter={{
              lat : 34.0192691,
              lng : -118.4943443 }}
            onClick={this.handleMapClick.bind(this)}
          >

            {this.state.markers.map((marker, index) => {
              const ref = `${index}`;

              return ( <Marker
                key={index}
                ref={ref}
                position={marker.position}
                onClick={this.handleMarkerClick.bind(this, marker)} >

                {/*
                  Show info window only if the 'showInfo' key of the marker is true.
                  That is, when the Marker pin has been clicked and 'handleMarkerClick' has been
                  Successfully fired.
                */}
                {marker.showInfo ? this.renderInfoWindow(ref, marker) : null}

              </Marker>
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
