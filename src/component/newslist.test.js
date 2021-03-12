import { getByText, render, screen } from '@testing-library/react';
import NewsList from './NewsList';
import {shallow} from 'enzyme';
import NewsState from '../context/News/NewsState';
import Home from './Home';

// describe('newslist testing', () => {
//     test('lists rendering', ()=> {
//        const wrapper= shallow(<NewsList/>)
//        expect(wrapper.find("p").text()).toBe("test");
//     })

// })

test('global state', ()=>{
    const globalState={
        news:[{
            comments_count: 62,
            domain: "quantamagazine.org",
            id: 26393795,
            points: 233,
            time: 1615250836,
            time_ago: "6 hours ago",
            title: "New algorithm breaks speed limit for solving linear equations",
            type: "link",
            url: "https://www.quantamagazine.org/new-algorithm-breaks-speed-limit-for-solving-linear-equations-20210308/",
            user: "ot"
        }],
        activeNews:{
            comments_count: 62,
            domain: "quantamagazine.org",
            id: 26393795,
            points: 233,
            time: 1615250836,
            time_ago: "6 hours ago",
            title: "New algorithm breaks speed limit for solving linear equations",
            type: "link",
            url: "https://www.quantamagazine.org/new-algorithm-breaks-speed-limit-for-solving-linear-equations-20210308/",
            user: "ot"
        }
    }

    const {container}= render(
        <NewsState  value={globalState}>
            <Home></Home>
        </NewsState>
    );
    const title = getByText(container, 'Home Page')
    expect(title).toBeInTheDocument();
})