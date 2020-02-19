import * as Actions from '../actions';

const initialState = {
    campaignData: null
};

const matches = (state = initialState, action) => {
    
    switch (action.type)
    {
        case Actions.SET_CAMPAIGN_DATA:
        {
            return {
                ...state,
                campaignData: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default matches;

