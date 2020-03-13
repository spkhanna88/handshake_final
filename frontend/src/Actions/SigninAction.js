import { React } from "react";
import axios from "axios";

function SigninAction(data) {
  return dispatch => {
    return axios.post("http://localhost:4001/companysignin", data);
  };
}

export default SigninAction;
