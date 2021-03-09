import { render, screen } from '@testing-library/react';
import NewsList from './NewsList';
import {shallow} from 'enzyme';

describe('newslist testing', () => {
    test('lists rendering', ()=> {
       const wrapper= shallow(<NewsList/>)
       expect(wrapper.find("p").text()).toBe("test");
    })

})