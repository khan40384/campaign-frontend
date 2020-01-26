export const INC_ACTIVE_STEP = '[INC_ACTIVE_STEP] INC_ACTIVE_STEP';
export const DEC_ACTIVE_STEP = '[DEC_ACTIVE_STEP] DEC_ACTIVE_STEP';
export const GET_ACTIVE_STEP = '[GET_ACTIVE_STEP] GET_ACTIVE_STEP';
export const SET_ACTIVE_STEP = '[SET_ACTIVE_STEP] SET_ACTIVE_STEP';
export const LOGGED_IN = '[LOGGED_IN] LOGGED_IN';
export const LOGGED_OUT = '[LOGGED_OUT] LOGGED_OUT';
export const SET_FAVOURITE_TEAM = '[SET_FAVOURITE_TEAM] SET_FAVOURITE_TEAM';
export const SET_GRADIENT = '[SET_GRADIENT] SET_GRADIENT';
export const SET_MATCHES_DATA = '[SET_MATCHES_DATA] SET_MATCHES_DATA';
export const SET_SELECTED_YEAR = '[SET_SELECTED_YEAR] SET_SELECTED_YEAR';
export const SET_SEARCHED_TEXT = '[SET_SEARCHED_TEXT] SET_SEARCHED_TEXT';
export const SET_FILTER_DATA = '[SET_FILTER_DATA] SET_FILTER_DATA';
export const SET_SEARCHED_DATA = '[SET_SEARCHED_DATA] SET_SEARCHED_DATA';
export const SET_IS_NEW_SELECTED_TRUE = '[SET_IS_NEW_SELECTED_TRUE] SET_IS_NEW_SELECTED_TRUE';
export const SET_IS_NEW_SELECTED_FALSE = '[SET_IS_NEW_SELECTED_FALSE] SET_IS_NEW_SELECTED_FALSE';



export function signIn(user)
{
    return {
        type: LOGGED_IN,
        payload: user
    }
}

export function signOut()
{
    return {
        type: LOGGED_OUT
    }
}

export function setFavouriteTeam(data)
{
    return {
        type: SET_FAVOURITE_TEAM,
        payload: data
    }
}

export function setGradient(data)
{
    return {
        type: SET_GRADIENT,
        payload: data
    }
}

export function setMatchesData(data)
{
    return {
        type: SET_MATCHES_DATA,
        payload: data
    }
}

export function setSelectedYear(data)
{
    return {
        type: SET_SELECTED_YEAR,
        payload: data
    }
}

export function setSearchedText(data)
{
    return {
        type: SET_SEARCHED_TEXT,
        payload: data
    }
}

export function setFilterData(data)
{
    return {
        type: SET_FILTER_DATA,
        payload: data
    }
}

export function setSearchedData(data)
{
    return {
        type: SET_SEARCHED_DATA,
        payload: data
    }
}

export function setIsNewSelectedTrue()
{
    return {
        type: SET_IS_NEW_SELECTED_TRUE
    }
}

export function setIsNewSelectedFalse()
{
    return {
        type: SET_IS_NEW_SELECTED_FALSE
    }
}

export function getActiveStep()
{
    return {
        type: GET_ACTIVE_STEP
    }
}

export function setActiveStep()
{
    return {
        type: SET_ACTIVE_STEP
    }
}

export function incActiveStep(data)
{
    return {
        type: INC_ACTIVE_STEP,
        payload: data
    }
}

export function decActiveStep(data)
{
    return {
        type: DEC_ACTIVE_STEP,
        payload: data
    }
}




