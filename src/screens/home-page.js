import React,{useState,useEffect} from 'react';
import Header from '../components/header/header';
import SearchTerms from '../components/search-terms/search-terms';
import Error from '../components/error/error';
import {useSelector } from 'react-redux';
import ResultsReady from '../components/results-ready/results-ready';
import Loading from '../components/loading/loading';

const HomePage = () =>{
    const timeStampReady = useSelector(state=>state.app.TIMESTAMP);
    const [ready,setReady] =useState(false);

    useEffect(() => {
        console.log('timeStampReady',timeStampReady);
        if(timeStampReady!=''){
         setReady(true);
        }
        else{
         setReady(false);
        }
    },[timeStampReady]);
    return(
        <div className="HomePage">
        <Loading/>    
        <Header/>
        {ready ?
        <ResultsReady/>
        :
        <SearchTerms />
        }
        
        <Error/>
        </div>
    );



}



export default HomePage;