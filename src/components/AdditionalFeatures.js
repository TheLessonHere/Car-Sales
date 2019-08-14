import React from 'react';
import { connect } from "react-redux";
import AdditionalFeature from './AdditionalFeature';
import { addItem } from '../actions';

const AdditionalFeatures = props => {

  const buyItem = (e) => {
    // dipsatch an action here to add an item
    e.preventDefault();
    console.log(e.target.id, props.store, props.car)
    props.addItem(e.target.id)
  };

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyitem={buyItem}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store
  };
};

export default connect(mapStateToProps, { addItem })(AdditionalFeatures);
