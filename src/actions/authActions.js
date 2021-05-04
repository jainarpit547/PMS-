import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
// import jwt from "jwt-decode";
import jwt from "jwt-simple";
import {
  GET_ERRORS,
  GET_SUCCESS,
  SET_CURRENT_USER,
  USER_LOADING,
} from "./types";
import constants from "../constants/index";


export const loginUser = (userData) => (dispatch) => {
  console.log('req with',userData)
  axios
    .post(constants.baseUrl + "/api/v1/users/login", userData)
    .then((res) => {
      console.log(res ,'res is')
      //const { token } = res.data;
      const secret = "FxUum76z";
      const currentTime = Date.now() / 1000;
      const payload = {
        id: res.data.id,
        email: res.data.email,
        user_type: res.data.user_type,
        token: res.data.token,
        expires: currentTime + 604800,
      };
      // encode
      const token = jwt.encode(payload, secret);

      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      //const decoded = jwt_decode(token);

      // decode
      const decoded = jwt.decode(token, secret);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};


export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

export const logoutUser = (logoutData) => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  let config = {
    method:'DELETE',
    url: constants.baseUrl + '/api/v1/users/logout',
    data: logoutData,
    headers:{
        Authorization: "Bearer " + logoutData.token, Accept : 'application/json', 'Content-Type': 'application/json'
    }
}
axios(config).then(
  success=>{
      console.log("SUCCESSfully logout")
      dispatch({
                  type: GET_SUCCESS,
                  payload: success,
      })
  },
  error=>{
      console.log("ERROR")
      dispatch({
                  type: GET_ERRORS,
                  payload: error.response.data
              })
          }
  );
};
