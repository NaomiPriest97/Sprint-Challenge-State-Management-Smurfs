import axios from "axios";

// ACTION CREATOR


export const getSmurf = () => {
  return dispatch => {
    dispatch({ type: "LOADING" });
    console.log("are we getting it?");
    axios
      .get("http://localhost:3333/smurfs")
      
      .then(res => {
        console.log(res.data);
        dispatch({ type: "NEW_SMURF", payload: (res.data.name) });
      })
      .catch(err => console.log(err));
  };
}; 
