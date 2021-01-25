import AppActionTypes from './app.types';
import {requestSearchApi,getAnalysisApi} from '../../utils/requests';

export const fetchSearchsStart = () => ({
    type: AppActionTypes.FETCH_SEARCH_START
  });
  
  export const fetchSearchsSuccess = timeStamp => ({
    type: AppActionTypes.FETCH_SEARCH_SUCCESS,
    payload: timeStamp
  });
  
  export const fetchSearchsFailure = errorMessage => ({
    type: AppActionTypes.FETCH_SEARCH_FAILURE,
    payload: errorMessage
  });


  export const clearTimeStamp = () =>({
    type: AppActionTypes.CLEAR_TIME_STAMP,
  })

  export const fillResults = (data) =>({
    type: AppActionTypes.FILL_ANALYZED_RESULTS,
    payload:data
  })



  export const fetchSearchsStartAsync = (searchTerm) => {
    return async dispatch => {
        dispatch(fetchSearchsStart());
        let requestSearchTerm = await requestSearchApi(searchTerm);

        console.log('requestSearchTerm',requestSearchTerm);

        if(requestSearchTerm.data){
          dispatch(fetchSearchsSuccess(requestSearchTerm.data.timestamp));
        }
        else{
          console.log('fetchSearchsFailure',requestSearchTerm);
          dispatch(fetchSearchsFailure(requestSearchTerm));
        }  
    };
  };


  export const fetchAnalysis = (timestamp) => {
    return async dispatch => {
        dispatch(fetchSearchsStart());
        let Results = await getAnalysisApi(timestamp);

        console.log('Results',Results);

        if(Results.data ){
          dispatch(fetchSearchsSuccess());
          dispatch(fillResults(Results.data));

        }
        else{
          dispatch(fetchSearchsFailure());
        }
   
    };
  };
  