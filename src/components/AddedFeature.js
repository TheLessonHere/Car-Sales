import React from 'react';

const AddedFeature = props => {
  return (
    <li id={props.feature.name} onClick={props.removefeature}>
      {/* Add an onClick to run a function to remove a feature */}
      <button id={props.feature.name} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
