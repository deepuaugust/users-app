import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserList from '../components/users.list';

configure({ adapter: new Adapter() });
const mockStore = configureStore();
jest.mock('react-dom');

const location = {
    pathname:'/home'
}

let initialState = {
    userListReducer: {},
};

let store = mockStore(initialState);

const div = global.document.createElement('div');

describe("UserList Component", () => {
    it('renders without crashing', () => {
        ReactDOM.render(<Router><UserList store={store} location={location} /></Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});