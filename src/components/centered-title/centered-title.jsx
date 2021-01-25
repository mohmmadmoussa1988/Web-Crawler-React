import React from 'react';
import {Title} from './centered-title.styles';
const CenteredTitle = ({children}) =>{
    return(
       <Title>
           {children}
       </Title>
    )
}

export default CenteredTitle;