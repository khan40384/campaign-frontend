import * as Actions from '../actions';

const initialState = {
    isSignedIn  : false,
    user : null
};

const auth = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type)
    {
        case Actions.LOGGED_IN:
        {
            return {
                ...state,
                isSignedIn  : true,
                user : action.payload
            };
        }
        case Actions.LOGGED_OUT:
        {
            return {
                ...state,
                isSignedIn: false,
                user: null
            };
        }
        default:
        {
            return state;
        }
    }
};

export default auth;

