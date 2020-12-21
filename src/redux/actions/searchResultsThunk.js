import api from "../../services/api";
import findResults from './findResults';

const searchResultsThunk = (text) => async (disaptch) =>{
          
        try {
            const response = await api.results.get(text); 
            disaptch(findResults(response.data.items));  
        } catch (error) {
            
        }
    
}

export default searchResultsThunk;