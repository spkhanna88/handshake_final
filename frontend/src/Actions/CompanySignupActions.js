import Axios from "axios";

export function companySignupRequest(userData) {
  return dispatch => {
    return Axios.post("http://127.0.0.1:4001/companysignup", userData);
  };
}
