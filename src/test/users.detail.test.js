import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserDetail from '../components/users.detail';

configure({ adapter: new Adapter() });
jest.mock('react-dom');

const location = {
    pathname:'/user/1'
}

const div = global.document.createElement('div');

describe("UserDetail Component", () => {
    it('renders without crashing', () => {
        ReactDOM.render(<Router><UserDetail location={location} /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});