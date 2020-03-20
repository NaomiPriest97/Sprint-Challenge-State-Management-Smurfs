import axios from "axios";

// ACTION CREATOR
export const NEW_SMURF = "NEW_SMURF";
export const LOADING = "LOADING";
export const SMURF_ERROR = "SMURF_ERROR";

export const getSmurf = () => dispatch => {
   
    dispatch({ type: LOADING });
    console.log("are we getting it?");
    axios
      .get("http://localhost:3333/smurfs")
      
      .then(res => {
        console.log("response", res.data);
        dispatch({ type: NEW_SMURF, payload: res.data });
      })
      .catch(err => {
          console.log(err);
          dispatch({ type: SMURF_ERROR, payload: err.res });
      });
  
}; 
