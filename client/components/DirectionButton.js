import React from 'react';
import { Button } from 'react-bootstrap';

const DirectionButton = (props) =>{

  const lat = "34.019454"
  const lng = "-118.491191"

  return(
  //should redirect you to maps
  <div>
    <Button
      bsStyle='default'
      className='direction-button'
      onClick={()=>{
        window.location=`http://maps.apple.com/?q=spinfish+poke+house`}}
      >
        <p>Get Directions</p>
      </Button>
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
