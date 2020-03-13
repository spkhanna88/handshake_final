import Axios from "axios";

function editstudentprofile(userData) {
  return dispatch => {
    console.log(userData.email);
    if (userData.type === "edit")
      return Axios.post("http://127.0.0.1:4001/getStudentBasicDetail", {
        email: userData.email
      });
    else if (userData.type === "save")
      return Axios.post(
        "http://127.0.0.1:4001/saveStudentBasicDetail",
        userData.data
      );
  };
}

export default editstudentprofile;
