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
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGIN ,
  GET_PROFILE,
  GET_PROFILE_FAILED,
  GET_PROFILE_SUCCESS,
  LOG_OUT,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILED,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
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
//login *************************************
export const userLogin = (payload) => async (dispatch) => {
  dispatch({ type: USER_LOGIN });

  try {
    const res = await axios.post("api/user/login", payload);
    localStorage.setItem("token", res.data.token);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.token });

  } catch (error) {
    dispatch({ type: USER_LOGIN_FAILED, payload: error.res.data.msg });
  }
};//************************************** */
export const getProfile = () => async (dispatch) => {
  dispatch({ type: GET_PROFILE });

  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  try {
    const res = await axios.get("api/user/currentUser", config);

    dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data });
  } catch (error) {
    console.log("Get profile error", error);
    dispatch({ type: GET_PROFILE_FAILED, payload: error.res });
  }
};
//log out
export const logOut = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
  localStorage.removeItem("token");
};
export const editUser = (id, editUser) => async (dispatch) => {
  dispatch({ type: EDIT_USER });

  try {
    const res = await axios.put(`/user/${id}`, editUser);

    dispatch({ type: EDIT_USER_SUCCESS, payload: res.data });
    
  } catch (error) {
    console.log(error);
    dispatch({ type: EDIT_USER_FAILED, payload: error.response.data });
  }
};
export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: DELETE_USER });

  try {
    const res = await axios.delete(`api/user/${id}`);

    dispatch({ type: DELETE_USER_SUCCESS, payload: res.data });
 
  } catch (error) {
    dispatch({ type: DELETE_USER_FAILED, payload: error.response.data });
  }
};
