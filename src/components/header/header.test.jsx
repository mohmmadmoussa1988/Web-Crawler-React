import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './header';
import toJson from 'enzyme-to-json';

configure({adapter:new Adapter()});
describe(`<Header />`,()=>{

    it('should render Header',()=>{
        const wrapper = shallow(<Header />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })


})