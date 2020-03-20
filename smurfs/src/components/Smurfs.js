import React from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/actions';

function Smurfs(props){
    return (
        <div>
          {props.loading ? <h1>Loading</h1> : <div> <h1>{props.name}</h1> <h2>{props.age}</h2> <h2>{props.height}</h2> </div>}
          <button
            onClick={() => {
              props.getSmurf();
            }}
          >
            Get Another Smurf
          </button>
        </div>
    );
}
export default connect(
    state => {
      return { loading: state.loading, name: state.name };
    },
    { getSmurf }
  )(Smurfs);
