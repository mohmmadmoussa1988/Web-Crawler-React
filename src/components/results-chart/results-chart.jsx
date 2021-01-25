import React,{useState,useEffect} from 'react';
import {LogoImage} from './results-chart.styles';
import {useDispatch,useSelector } from 'react-redux';
import { DynamicBarChart } from 'react-dynamic-charts';
import 'react-dynamic-charts/dist/index.css';
import CenteredTitle from '../centered-title/centered-title';
const ResultsChart = () =>{
    const results = useSelector(state=>state.app.RESULTS);
    const [showResults,setShowResults] = useState(false);
    const finalArray=[];
    const testResults =[{"values":[{"id":1,"label":"qTip2_1.js","value":1,"color":"yellow"},{"id":2,"label":"afterheader.min.js","value":1,"color":"yellow"},{"id":3,"label":"syntax-highlighter.min.js","value":1,"color":"yellow"},{"id":4,"label":"NetworkTracking.js","value":2,"color":"yellow"},{"id":5,"label":"Zen.js","value":2,"color":"yellow"}]}]
    
    useEffect(() => {
        console.log('results values',results.values);
            console.log('here');
            setShowResults(true);
            
         

    });
    return(
        <>
        
            <CenteredTitle>Results</CenteredTitle>
           
            {results && results.values && results.values.length>0 &&
            <>
                    <DynamicBarChart
                    data={[results]} />
            </>    
            }    
    
        </>
    )
}

export default ResultsChart;