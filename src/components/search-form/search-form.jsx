import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from 'react-redux';
import {fetchSearchsStartAsync} from '../../redux/app/app.actions';

import {ErrorSpan,InputBox,ButtonBox,InputLabel,Textinput} from './search-form.styles';
const SearchForm = () =>{
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => dispatch(fetchSearchsStartAsync(data));

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputBox>
            <InputLabel>Search Term</InputLabel>
            <Textinput ref={register({ required: true })} />
          </InputBox>
          {errors.searchterm && <ErrorSpan>Search Term is required</ErrorSpan>}
          <ButtonBox/>
        </form>
    )
}

export default SearchForm;