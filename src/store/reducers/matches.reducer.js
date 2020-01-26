import * as Actions from '../actions';

const initialState = {
    matchesData: null,
    length: 0,
    selectedYear: [],
    filterData: null,
    searchedData: null,
    isNewSelected: false,
    searchedText: null,
    favouriteTeam: null,
    gradient: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,9,110,0.7234244039412641) 0%, rgba(0,212,255,1) 100%)'
};

const matches = (state = initialState, action) => {
    
    var length;
    if(action.payload != null){
        length = action.payload.length;
        console.log(action.payload);
    }
    switch (action.type)
    {
        case Actions.SET_MATCHES_DATA:
        {
            return {
                ...state,
                matchesData: action.payload,
                length: action.payload.length
            };
        }
        case Actions.SET_FAVOURITE_TEAM:
        {
            return {
                ...state,
                favouriteTeam: action.payload
            };
        }
        case Actions.SET_GRADIENT:
        {
            return {
                ...state,
                gradient: action.payload
            };
        }
        case Actions.SET_SELECTED_YEAR:
        {
            return {
                ...state,
                selectedYear: action.payload
            };
        }
        case Actions.SET_SEARCHED_TEXT:
        {
            return {
                ...state,
                searchedText: action.payload
            };
        }
        case Actions.SET_FILTER_DATA:
        {
            return {
                ...state,
                filterData: action.payload,
                length: length
            };
        }
        case Actions.SET_SEARCHED_DATA:
        {
            return {
                ...state,
                searchedData: action.payload,
                length: length
            };
        }
        case Actions.SET_IS_NEW_SELECTED_TRUE:
        {
            return {
                ...state,
                isNewSelected: true
            };
        }
        case Actions.SET_IS_NEW_SELECTED_FALSE:
        {
            return {
                ...state,
                isNewSelected: false
            };
        }
        default:
        {
            return state;
        }
    }
};

export default matches;

