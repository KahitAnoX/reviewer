import { SET_ACTIVE_TAB } from '../actions/home';

const homeReducer = (state, action) => {
	if (action.type === SET_ACTIVE_TAB) {
		return {
			...state,
			activeTab: action.payload,
		};
	}
	return state;
};

export default homeReducer;
