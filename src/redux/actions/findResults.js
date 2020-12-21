import api from "../../services/api";

export const type = 'findResults';

const findResults = (items) => ({
    type,
    payload: items,
});

export default findResults;


export const searchResultsThunk = (text) => async (disaptch) =>{
          
        try {
            const response = await api.results.get(text); 
            disaptch(findResults(response.data.items));  
        } catch (error) {
            
        }
    
}