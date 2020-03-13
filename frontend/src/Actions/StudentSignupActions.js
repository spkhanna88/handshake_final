import Axios from "axios";

export function studentSignupRequest(userData) {
  return dispatch => {
    return Axios.post("http://127.0.0.1:4001/studentsignup", userData);
  };
}
