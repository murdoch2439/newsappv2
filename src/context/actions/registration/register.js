import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../../../api/key"
// import axios from 'axios';
import ngrokServer from "../../../api/ngrokServer";
import { REGISTER_LOADING, REGISTER_FAIL, REGISTER_SUCCESS } from "../../../constants/actionsTypes";

export default ({ userName: user_name, phoneNumber: phone_number }) => dispatch =>{

  dispatch({type: REGISTER_LOADING})
  axiosInstance.post('/register', {user_name, phone_number}).then(res =>{
    console.log('res.data : >>', res.data);
    
    const storeId = async (_id) => {
      try {
          await AsyncStorage.setItem('_id', res.data._id)
      } catch (error) {
          console.log(error);
        }
    }
    const storeData = async (user) => {
      try {
          await AsyncStorage.setItem(user, JSON.stringify(res.data.user_name, res.data.user_name) )
      } catch (error) {
          console.log(error);
        }
    }
    storeId()
    storeData()

    // AsyncStorage.setItem('_id', res.data._id)
    // AsyncStorage.setItem('user', JSON.stringify(res.data.user))
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