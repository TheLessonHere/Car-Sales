import React from 'react';

const AdditionalFeature = props => {
  return (
    <li id={props.feature.name} onClick={props.buyitem}>
      {/* Add an onClick that will let you add a feature to your car */}
      <button id={props.feature.name} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
