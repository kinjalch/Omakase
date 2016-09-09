import React from 'react';
import { Button } from 'react-bootstrap';

const DirectionButton = (props) =>{

  const lat = props.position.lat;
  const lng = props.position.lng;

  return(
  //should redirect you to maps
  <div className="directions">
    <p onClick={()=>{
      window.location=`http://maps.apple.com/?q=${lat},${lng}`}}
    >
      Get Directions
    </p>

  </div>
);
}

export default DirectionButton;
// props.result.address
// props.result.zipcode

//http://maps.apple.com/?q=51.507269,-0.127695
//http://maps.apple.com/?address=

//https://developer.apple.com/library/safari/featuredarticles/iPhoneURLScheme_Reference/
//MapLinks/MapLinks.html#//apple_ref/doc/uid/TP40007899-CH5-SW1
