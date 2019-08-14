import React from 'react';
import { connect } from "react-redux";
import { removeItem } from '../actions';
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {

  const removeFeature = e => {
    // dispatch an action here to remove an item
    e.preventDefault();
    console.log(e.target.id, props.store, props.car)
    props.removeItem(e.target.id)
  };

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removefeature={removeFeature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  };
};

export default connect(mapStateToProps, { removeItem })(AddedFeatures);
