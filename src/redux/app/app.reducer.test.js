import appReducer from './app.reducer';
import AppActionTypes from './app.types';

const INITIAL_STATE = {
    SHOW_LOADING:false,
    ERROR:'',
    TIMESTAMP:'',
    RESULTS:{}
}

describe('App reducer',()=>{


    it("should return the initial state",()=>{
        expect(appReducer(undefined,{})).toEqual(INITIAL_STATE);
    })


    it("should set SHOW_LOADING to true on FETCH_SEARCH_START",()=>{
        expect(appReducer(INITIAL_STATE,{
            type:AppActionTypes.FETCH_SEARCH_START,
            SHOW_LOADING:true
        })).toEqual({...INITIAL_STATE,SHOW_LOADING:true});
    })

    it("should set TIMESTAMP to a timestamp value on FETCH_SEARCH_SUCCESS",()=>{
        expect(appReducer(INITIAL_STATE,{
            type:AppActionTypes.FETCH_SEARCH_SUCCESS,
            payload:123
        })).toEqual({...INITIAL_STATE,SHOW_LOADING : false,ERROR:'',TIMESTAMP:123});
    })


    it("should set ERROR to error value on FETCH_SEARCH_FAILURE",()=>{
        expect(appReducer(INITIAL_STATE,{
            type:AppActionTypes.FETCH_SEARCH_FAILURE,
            payload:'Error'
        })).toEqual({...INITIAL_STATE,SHOW_LOADING : false,ERROR:'Error'});
    })


    it("should set TIMESTAMP to '' value on CLEAR_TIME_STAMP",()=>{
        expect(appReducer(INITIAL_STATE,{
            type:AppActionTypes.CLEAR_TIME_STAMP,
        })).toEqual({...INITIAL_STATE,TIMESTAMP : ''});
    })


    it("should set RESULTS to an array value on FILL_ANALYZED_RESULTS",()=>{
        expect(appReducer(INITIAL_STATE,{
            type:AppActionTypes.FILL_ANALYZED_RESULTS,
            payload:{values:[1,2]}
        })).toEqual({...INITIAL_STATE,RESULTS : {values:[1,2]}});
    })
 
 

    


    

})