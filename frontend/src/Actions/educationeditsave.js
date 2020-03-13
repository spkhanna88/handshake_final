import Axios from "axios";

function educationeditsave(userData) {
  return dispatch => {
    console.log(userData.email);
    if (userData.type === "edit")
      return Axios.post("http://127.0.0.1:4001/getStudentEduDetail", {
        email: userData.email
      });
    else if (userData.type === "save")
      return Axios.post(
        "http://127.0.0.1:4001/saveStudentEduDetail",
        userData.data
      );
  };
}

export default educationeditsave;
