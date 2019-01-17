import types from './types';
import axios from 'axios';

export const signIn = userValues => async dispatch => { //same shit as signUp
    try {
        const response = await axios.post('http://api.reactprototypes.com/signin', userValues);
        console.log("sign up response", response);
        localStorage.setItem('token', response.data.token);
        dispatch({
            type: types.SIGN_IN
        })
    } catch {
        dispatch({
            type: types.SIGN_IN_ERROR,
            error: "invalid email and/or password"
        })
    }
};
export function signOut() {
    localStorage.removeItem("token");
    return {
        type: types.SIGN_OUT
    }
}

export function signUp(userInfo) {
    return async function(dispatch) {
        const response = await axios.post('http://api.reactprototypes.com/signup', userInfo);
        localStorage.setItem("token", response.data.token);
        dispatch({
            type: types.SIGN_UP
        })
    }
}

export const getMovieQuote = () => async dispatch => {
    const axiosConfig = {
        headers: {
            authorization : localStorage.getItem("token")
        }
    };
    const response = await axios.get('http://api.reactprototypes.com', axiosConfig);
    dispatch({
        type : types.GET_MOVIE_QUOTE,
        quote: response.data.message,
    })
};