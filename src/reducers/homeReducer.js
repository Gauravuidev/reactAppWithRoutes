import { HOME_TOP_TRENDING_SONGS } from '../types/types';
//import isEmpty from 'lodash/isEmpty';

export default (initialState = {
	topTrendingSongs: []
}, action = {}) => {
	switch (action.type) {
		case HOME_TOP_TRENDING_SONGS:
			return {
				topTrendingSongs: action.payload
			};
		default:
			return initialState;
	}

};