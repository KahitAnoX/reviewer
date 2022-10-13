import { createStore } from 'redux';
import homeReducer from '../reducers/homeReducer';

const initialStore = {
	activeTab: '',
};

const store = createStore(homeReducer, initialStore);

export default store;
