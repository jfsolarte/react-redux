import { type as findResultsType } from '../actions/findResults';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findResultsType: {
            if (!payload) {
                return [];
            }
            return payload; 
        }

        default:
            return state;
    }
}

export default reducer;