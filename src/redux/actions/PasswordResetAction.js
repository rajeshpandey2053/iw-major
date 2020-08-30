import {
    PASSWORD_RESET_REQUEST,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAILURE,
  } from "./ActionTypes";
  import axios from "axios";

  const main_url = "http://127.0.0.1:8000/api/accounts/v1/user/request-reset-password/";

  export const passwordResetRequest = () => {
      return {
          type: PASSWORD_RESET_REQUEST
      }
  }


