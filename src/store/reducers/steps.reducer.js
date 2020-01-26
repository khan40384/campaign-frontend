import * as Actions from '../actions';

const initialState = {
    activeStep: 0
};

const steps = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type)
    {
        case Actions.GET_ACTIVE_STEP:
        {
            return {
                ...state
            };
        }
        case Actions.SET_ACTIVE_STEP:
        {
            return {
                ...state,
                activeStep: 0
            };
        }
        case Actions.INC_ACTIVE_STEP:
        {
            return {
                ...state,
                activeStep: action.payload
            };
        }
        case Actions.DEC_ACTIVE_STEP:
        {
            return {
                ...state,
                activeStep: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default steps;

