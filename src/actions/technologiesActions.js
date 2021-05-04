import axios from "axios";
import { GET_ERRORS, GET_SUCCESS } from "./types";
import constants from "../constants/index";


export const listTechnologies  = (techData) => (dispatch) => {
 
    let config = {
      method: "GET",
      url: constants.baseUrl + "/api/v1/technologies",
      data: techData,
      headers: {
        Authorization: "Bearer " + techData.token,
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

  export const addTechnologies  = (techData) => (dispatch) => {
 
    let config = {
      method: "POST",
      url: constants.baseUrl + "/api/v1/technologies",
      data: techData,
      headers: {
        Authorization: "Bearer " + techData.token,
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