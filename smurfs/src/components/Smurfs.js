import React from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/actions';

function Smurfs(props){
    console.log(props, "props");
    return (
        <>
        <div className="smurfs">
          {props.loading ? <h1>Loading</h1> : <div>{props.smurfs.map(smurfl => (
              <div className ="smurf-card">
                  <h1>{smurfl.name}</h1>
                  <h2>{smurfl.age} years old</h2>
                  <h2>{smurfl.height} cm</h2>
                </div>  
            ))}  
        </div>
        }
          <button
            onClick={() => {
              props.getSmurf();
            }}
          >
            SHOW UPDATED SMURFS
          </button>
        </div>
        </>
    );
}


const mapStateToProps = state => ({
    loading: state.loading, 
    smurfs: state.smurfs, 
    error: state.error 
});
export default connect(
    mapStateToProps,{ getSmurf })(Smurfs);
