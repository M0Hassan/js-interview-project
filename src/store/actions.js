import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';

const headers = {
  'Content-Type': 'application/json',
  'x-apikey': '63be7360969f06502871ad7f'
}

export const getData = () => async dispatch => {
  const res = await axios.get('https://touchinspiration-0ada.restdb.io/rest/sample', { headers });
  dispatch({
    type: GET_DATA,
    payload: res.data
  });
};

export const updateData = (_id, data) => async dispatch => {
  const res = await axios.patch(`https://touchinspiration-0ada.restdb.io/rest/sample/${_id}`, data, { headers });
  dispatch({
    type: UPDATE_DATA,
    payload: res.data
  });
};