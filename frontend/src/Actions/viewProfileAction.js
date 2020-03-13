import Axios from "axios";

function viewProfileAction(userData) {
  return dispatch => {
    console.log(userData.email);
    return Axios.post("http://127.0.0.1:4001/getStudentBasicDetail", {
      email: userData.email
    });
  };
}

export default viewProfileAction;
