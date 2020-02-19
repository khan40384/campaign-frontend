
export const LOGGED_IN = '[LOGGED_IN] LOGGED_IN';
export const LOGGED_OUT = '[LOGGED_OUT] LOGGED_OUT';
export const SET_CAMPAIGN_DATA = '[SET_CAMPAIGN_DATA] SET_CAMPAIGN_DATA';


export function signIn(user)
{
    window.localStorage.setItem('user', JSON.stringify(user));
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

export function setCampaignData(data)
{
    return {
        type: SET_CAMPAIGN_DATA,
        payload: data
    }
}



