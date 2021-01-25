import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchForm from './search-form';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../redux/store';

configure({adapter:new Adapter()});
describe(`<SearchForm />`,()=>{

    it('should render SearchForm',()=>{
        const wrapper = shallow(<Provider store={store}><SearchForm /></Provider>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })


})