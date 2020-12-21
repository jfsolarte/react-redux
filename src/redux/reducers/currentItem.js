import { type as findCurrentItemType } from '../actions/findCurrentItem';


const defaultState = null;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findCurrentItemType: {
             
            if (!payload) {
                return null;
            }
            
            return payload;
        }
        default:
            return state;
    }
}

export default reducer;