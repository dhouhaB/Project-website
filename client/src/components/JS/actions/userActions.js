/*import { USER_REGISTER, USER_REGISTER_FAILED, USER_REGISTER_SUCCESS } from "../actionsTypes/userActionsTypes"
import axios from "axios";
//import res from "express/lib/response";

export const userRegister = (payload)=> async (dispatch) =>
{
dispatch({type : USER_REGISTER})   ;

try
{
    const res = await axios.post("api/user/register",payload);
dispatch({ type: USER_REGISTER_SUCCESS,payload:res.data.msg});

}
catch (error)
{
    console.log("register error",error);
    dispatch ({type:USER_REGISTER_FAILED,payload:res.error});
}



}


*/
import axios from "axios";

/********* *******************    User register action creator ********************************** */

import {

  USER_REGISTER,
  USER_REGISTER_FAILED,
  USER_REGISTER_SUCCESS,
} from "../actionsTypes/userActionsTypes";

export const userRegister = (payload) => async (dispatch) => {
  dispatch({ type: USER_REGISTER });

  try {
    const res = await axios.post("api/user/register", payload);

    dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data.msg });
  } catch (error) {
    console.log("register error", error);
    dispatch({ type: USER_REGISTER_FAILED, payload: error.res.data.msg });
  }
};
