import axiosInstance from "../../../api/key"
// import axios from 'axios';
import ngrokServer from "../../../api/ngrokServer";
import { REGISTER_LOADING, REGISTER_FAIL, REGISTER_SUCCESS } from "../../../constants/actionsTypes";

export default ({ userName: user_name, phoneNumber: phone_number }) => dispatch =>{

  dispatch({type: REGISTER_LOADING})
  axiosInstance.post('/register', {user_name, phone_number}).then(res =>{
    dispatch({
      type: REGISTER_SUCCESS,
      payload:res.data,
    })

  }
    ).catch(error =>{
      dispatch({
      type: REGISTER_FAIL,
      payload: error.response ? error.response.data : {error:"Something went wrong, try again"}
    })
    })
}