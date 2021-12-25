import { USER_REGISTER, USER_REGISTER_FAILED, USER_REGISTER_SUCCESS } from "../actionsTypes/userActionsTypes";

const initialState= {
    loading:false,
    msg: null,
    errors: null,
};

const userReducer = (state = initialState, { type, payload }) => {

    switch (type) {

    case USER_REGISTER:
       

        return {
            ...state,
            loading: true,
          };

case USER_REGISTER_SUCCESS:
     return {
         ...state,
         loading: false,
         msg: payload,
     }
     case USER_REGISTER_FAILED:
         return {
            ...state,
             loading:false,
            
             errors:payload,
         };

         default :
         return state;
        }



}


export default userReducer;