const initialState = {
    name: 'Hungry',
    age: 200,
    height: '5cm',
    id: 0
};

export const appReducer = ( state = initialState ,action ) => {
    switch(action.type){
        case "LOADING":
            return { ...state, loading: true };

        case "NEW_SMURF":
            return { ...state, loading: false, name: action.payload};
         
       default:
           return state;     
    }       
};