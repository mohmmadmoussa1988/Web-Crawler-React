import AppActionTypes from './app.types';
const INITIAL_STATE = {
    SHOW_LOADING:false,
    ERROR:'',
    TIMESTAMP:'',
    RESULTS:{}
}


const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case AppActionTypes.FETCH_SEARCH_START : 
        return {
            ...state,
            SHOW_LOADING : true
        }
      case AppActionTypes.FETCH_SEARCH_SUCCESS : 
        return {
            ...state,
            SHOW_LOADING : false,
            ERROR:'',
            TIMESTAMP:action.payload

        } 
        case AppActionTypes.FETCH_SEARCH_FAILURE : 
        return {
            ...state,
            SHOW_LOADING : false,
            ERROR:action.payload
        } 	

        case AppActionTypes.CLEAR_TIME_STAMP : 
        return {
          ...state,
          TIMESTAMP:''
        }

        case AppActionTypes.FILL_ANALYZED_RESULTS : 
        return {
          ...state,
          RESULTS:action.payload
        }


        
        
        
        

      default:
        return state;
    }
  };
  
  export default appReducer;
  