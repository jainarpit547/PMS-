import axios from "axios";
import { GET_ERRORS, GET_SUCCESS } from "./types";
import PropTypes from "prop-types";
import constants from "../constants/index";


export const listUsers = (userData) => (dispatch) => {
 
    let config = {
      method: "GET",
      url: constants.baseUrl + "/api/v1/users",
      data: userData,
      headers: {
        Authorization: "Bearer " + userData.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    console.log("CONFIG", config);
    axios(config).then(
      (success) => {
        console.log("SUCCESS",success);
        dispatch({  
          type: GET_SUCCESS,
          payload: success,
      });
      },
      (error) => {
        console.log("ERROR");
        dispatch({
          type: GET_ERRORS,
          payload: error,
        });
      }
    );
  };

  export const addUsers = (userData) => (dispatch) => {
    
    console.log("userData requesting with ", userData);
    
    let config = {
      method: "POST",
      url: constants.baseUrl + "/api/v1/users",
      data: userData,
      headers: {
        Authorization: "Bearer " + userData.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    console.log("CONFIG", config);
    axios(config).then(
      (success) => {
        console.log("SUCCESS");
        dispatch({
          type: GET_SUCCESS,
          payload: success,
        });
      },
      (error) => {
        console.log("ERROR");
        dispatch({
          type: GET_ERRORS,
          payload: error,
        });
      }
    );
  };