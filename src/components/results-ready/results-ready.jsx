import React from 'react';
import chartGif from '../../assets/chart.gif';
import {ChartBox,Chartimg,StyledLink,ClearButton} from './results-ready.styles';
import { Link } from "react-router-dom";
import {useDispatch } from 'react-redux';
import {clearTimeStamp} from '../../redux/app/app.actions';
const ResultsReady = () =>{
    const dispatch = useDispatch();

    const clearTimeStampFun = ()=>{
        dispatch(clearTimeStamp());
    }
    return(
       <ChartBox>
           <Chartimg src={chartGif} />
           <StyledLink>
           <Link to="/analyze">Get Results</Link>
           <ClearButton onClick={clearTimeStampFun}>Clear Results</ClearButton>
           </StyledLink>
       </ChartBox>
    )
}

export default ResultsReady;