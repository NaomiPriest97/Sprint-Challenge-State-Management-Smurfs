import { LOADING, NEW_SMURF, SMURF_ERROR} from '../actions/actions';

const initialState = {
    smurfs: [],
    loading: false,
    error: ""
};

export const appReducer = ( state = initialState ,action ) => {
    switch(action.type){
        case LOADING:
            return { ...state, loading: true, error: "" };

        case NEW_SMURF:
            return { ...state, loading: false, smurfs: action.payload};
         
        case SMURF_ERROR:
            return { ...state, error: action.payload , loading: false }    
       default:
           return state;     
    }       
};