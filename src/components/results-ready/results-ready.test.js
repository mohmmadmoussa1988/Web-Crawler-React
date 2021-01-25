import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResultsReady from './results-ready';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../redux/store';

configure({adapter:new Adapter()});
describe(`<ResultsReady />`,()=>{

    it('should render ResultsReady',()=>{
        const wrapper = shallow(<Provider store={store}><ResultsReady /></Provider>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })


})