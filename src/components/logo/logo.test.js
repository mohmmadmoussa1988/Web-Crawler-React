import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Logo from './logo';
import { Link } from "react-router-dom";
import logo from '../../assets/Sixt-Logo.svg.png';
import toJson from 'enzyme-to-json';

configure({adapter:new Adapter()});
describe(`Logo`,()=>{

    it('should render image with link to home page',()=>{
        const wrapper = shallow(<Logo />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })


})