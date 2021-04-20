import AsyncStorage from '@react-native-async-storage/async-storage';
import { DELETE_USER } from '../../constants/actionsTypes';

export default () => (dispatch) => {
  AsyncStorage.removeItem('_id');
  AsyncStorage.removeItem('user');
  dispatch({
    type: DELETE_USER,
  });
};