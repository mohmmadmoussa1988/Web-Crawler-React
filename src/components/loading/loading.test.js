import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loading from './loading';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import {LoadingDiv,LoadingDivLabel} from './loading.styles';
import { render } from '@testing-library/react';

configure({adapter:new Adapter()});
describe(`<Loading />`,()=>{

    it('should render Loding',()=>{
        const wrapper = shallow(<Provider store={store}><Loading /></Provider>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })


})