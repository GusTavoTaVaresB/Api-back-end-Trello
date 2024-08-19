import axios from 'axios';
import { ADD_QUADRO, QUADRO_ERROR } from './types';

// adicionar quadro
export const addQuadro = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify(formData);

    const res = await axios.post('/api/quadros', body, config);

    dispatch({
      type: ADD_QUADRO,
      payload: res.data
    });

  } catch (err) {
    dispatch({
      type: QUADRO_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all quadros
export const getQuadros = () => async (dispatch) => {
    try {
      const res = await axios.get('/api/quadros');
  
      dispatch({
        type: GET_QUADROS,
        payload: res.data
      });
  
    } catch (err) {
      dispatch({
        type: QUADROS_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

  // Deletar quadro
export const deleteQuadro = (id) => async (dispatch) => {
    try {
      await axios.delete(`/api/quadros/${id}`);
  
      dispatch({
        type: DELETE_QUADRO,
        payload: id
      });
  
    } catch (err) {
      dispatch({
        type: DELETE_QUADRO_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };