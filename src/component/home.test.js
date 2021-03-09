import { render, screen } from '@testing-library/react';
import {shallow} from 'enzyme';
import Home from './Home';

describe('app testing',()=>{

    let wrapper;
    beforeEach(()=> {
        wrapper= shallow(<Home />)
    })
    test('renders home page title', () => {
        expect(wrapper.find("h1").text()).toContain("Home Page");
      }); 
      
      test('renders newslist link', () => {
        render(<Home />);
        const linkElement = screen.getByText("NewsList");
        expect(linkElement).toBeInTheDocument();
      });
})