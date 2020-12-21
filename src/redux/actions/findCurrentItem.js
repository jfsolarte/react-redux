
import api from "../../services/api";
export const type = 'findCurrentItem';

const findCurrentItem = (item) => ({
    type,
    payload: item,
});

export default findCurrentItem;


export const findCurrentItemThunk = (itemId) => async (disaptch) =>{
          
    try {
        const response = await api.item.get(itemId);  
        disaptch(findCurrentItem(response.data.item));  
    } catch (error) {
        
    }

}
