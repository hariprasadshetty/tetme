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
        case actionTypes.PLANETS_STARTS:
            return { ...state,
                isStarted: true
            };
        case actionTypes.PLANETS_SUCCESS:
            return { ...state,
                isError: false,
                isStarted: false,
                next: action.payload.next,
                data: action.payload.results
            };
        case actionTypes.PLANETS_NEXT_SUCCESS:
            const data = [...state.data, ...action.payload.results];
            return { ...state,
                isError: false,
                isStarted: false,
                next: action.payload.next,
                data: data
            };
        case actionTypes.PLANETS_FAILURE:
            return { ...state,
                isStarted: false,
                isError: true,
                errorMsg: action.payload
            };
        default:
            return state;
    }
}
