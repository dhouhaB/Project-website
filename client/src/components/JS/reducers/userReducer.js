import { USER_REGISTER, USER_REGISTER_FAILED, USER_REGISTER_SUCCESS ,  USER_LOGIN,
    USER_LOGIN_FAILED,
    USER_LOGIN_SUCCESS, GET_PROFILE,
    GET_PROFILE_FAILED,
    GET_PROFILE_SUCCESS,
    LOG_OUT,
    EDIT_USER,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILED,
    DELETE_USER,
  DELETE_USER_FAILED,
  DELETE_USER_SUCCESS,

  } from "../actionsTypes/userActionsTypes";

const initialState= {
    loading: false,
  msg: null,
  errors: null,
  isAuth: false,
  user: null,
  isEdit: false,

};








const userReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case USER_REGISTER:
      case   EDIT_USER:
        case DELETE_USER:

      case USER_LOGIN:
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };


   




      








    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: payload,
      };

    case USER_REGISTER_FAILED:
    case USER_LOGIN_FAILED:
      case DELETE_USER_FAILED:

      return {
        ...state,
        loading: false,
        errors: payload,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        msg: payload,
      };

      case EDIT_USER_SUCCESS:
     
          return {
            ...state,
            loading: false,
            msg: payload,
          };
    






    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: payload,
      };






    case GET_PROFILE_FAILED:
      case EDIT_USER_FAILED:

      return {
        ...state,
        loading: false,
        errors: payload,
      };





  case LOG_OUT:
      return {
        ...state,
        isAuth: false,
      };
   

 
        case EDIT_USER_FAILED:
    
          return {
            ...state,
            loading: false,
            msg: payload,
          };
    

     
            case DELETE_USER_SUCCESS:
  
              return {
                ...state,
                loading: false,
                msg: payload,
              };








    default:
      return state;
  }
};



export default userReducer;