import { type as findCurrentItemType } from '../actions/findCurrentItem';
import items from '../../data/items';

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findCurrentItemType: {
            console.info(payload); 
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