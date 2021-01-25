import React from 'react';
import {SearchBox,SearchInputs} from './search-terms.styles';
import CenteredTitle from '../centered-title/centered-title';
import SearchForm from '../../components/search-form/search-form';

const Searchterms = () =>{
    return(
        <SearchBox>
         <CenteredTitle>CRAWLE WEB FOR JAVASCRIPT LIBRARIES</CenteredTitle>
         <SearchInputs>
            <SearchForm/>
         </SearchInputs>

       </SearchBox>
    )
}

export default Searchterms;