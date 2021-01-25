import React,{useState,useEffect} from 'react';
import Header from '../components/header/header';
import SearchTerms from '../components/search-terms/search-terms';
import Error from '../components/error/error';
import {useDispatch,useSelector } from 'react-redux';
import ResultsReady from '../components/results-ready/results-ready';
import Loading from '../components/loading/loading';
import {fetchAnalysis} from '../redux/app/app.actions';
import ResultsChart from '../components/results-chart/results-chart';
const ResultsPage = () =>{
    const dispatch = useDispatch();
    const timeStampReady = useSelector(state=>state.app.TIMESTAMP);
    console.log('timestamp',timeStampReady);
    useEffect(() => {
        if(timeStampReady!=''){
            dispatch(fetchAnalysis(timeStampReady));
        }
        
    },[timeStampReady]);
    return(
        <div className="ResultsPage">
        <Loading/>        
        <Header/>
        <ResultsChart />
        <Error/>
        </div>
    );



}



export default ResultsPage;