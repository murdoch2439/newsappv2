import { DELETE_USER, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../constants/actionsTypes";

const registrationReducer = (state, {type, payload}) =>{

  switch (type){
    case REGISTER_LOADING:
      return {
        ...state, 
        loading: true
      };

    case REGISTER_SUCCESS:
      return {
        ...state, 
        loading: false, 
        data:payload,
         isLoggedIn: true,
      };

    case DELETE_USER:
      return {
        ...state,
        loading: false,
        data: null,
        isLoggedIn: false,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error:payload 
      };
    
    default :
    return state;

  }

};

export default registrationReducer;