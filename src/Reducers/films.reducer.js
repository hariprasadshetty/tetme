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
        case actionTypes.FILMS_STARTS:
            return { ...state,
                isStarted: true
            };
        case actionTypes.FILMS_SUCCESS:
            return { ...state,
                isError: false,
                isStarted: false,
                next: action.payload.next,
                data: action.payload.results
            };
        case actionTypes.FILMS_NEXT_SUCCESS:
            const data = [...state.data, ...action.payload.results];
            return { ...state,
                isError: false,
                isStarted: false,
                next: action.payload.next,
                data: data
            };
        case actionTypes.FILMS_FAILURE:
            return { ...state,
                isStarted: false,
                isError: true,
                errorMsg: action.payload
            };
        default:
            return state;
    }
}
