import axios from 'axios';
import { HOME_TOP_TRENDING_SONGS } from '../types/types';
import qs from 'qs';

export function setHomeTopTrendingSongs(data) {
	return {
		type: HOME_TOP_TRENDING_SONGS,
		payload: data
	};
}

export function getHomeTopTrendingSongs() {
	return dispatch => {
		return axios.get('http://apiportalx.gaana.com/home/trending/songs?userlanguage=Hindi,English').then(res => {
			return res.data.entities;
		}).then(data => {
			dispatch(setHomeTopTrendingSongs(data.slice(0, 9)));
		});
	}
}

export function getUrls(id, songTitle) {
	const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
	const dataToSend = qs.stringify({
		type: 'hls',
		action: 'get_stream',
		track_id: id
	});

	return dispatch => {
		return axios.post('https://portal7.gaana.com/ajax/touch_log', dataToSend, config).then(res => {			
			return res.data;
		});
	}
}