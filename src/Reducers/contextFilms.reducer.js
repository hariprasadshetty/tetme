import * as actionTypes from '../Constants/actionType';
const initialState = {
    isStarted: false,
    isError: false,
    data: [],
    next: '',
    errorMsg: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.FILMS_CLICK_STARTS:
            return { ...state,
                isError: false,
                isStarted: true,
                data: []
            };
        case actionTypes.FILMS_CLICK_SUCCESS:
            const data = [action.payload, ...state.data];
            return { ...state,
                isError: false,
                isStarted: false,
                data: data
            };
        default:
            return state;
    }
}
