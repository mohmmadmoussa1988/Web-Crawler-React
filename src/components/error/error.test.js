import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Error from './error';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../redux/store';
configure({adapter:new Adapter()});
describe(`<Error />`,()=>{

    it('should render Error',()=>{
        const wrapper = shallow(<Provider store={store}><Error /></Provider>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })


})