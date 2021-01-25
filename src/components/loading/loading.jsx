import React,{useState,useEffect} from 'react';
import {useSelector } from 'react-redux';
import {LoadingDiv,LoadingDivLabel} from './loading.styles';
const Loading = () =>{
    const appLoading = useSelector(state=>state.app.SHOW_LOADING);
    const [showLoading,setShowLoading] =useState(true);

    useEffect(() => {
      setShowLoading(appLoading);
    },[appLoading]);

    return(
      <>  
        {showLoading &&
       <LoadingDiv>
           <LoadingDivLabel>
            Loading...
           </LoadingDivLabel>
       </LoadingDiv>
        }
      </> 
    )
}

export default Loading;