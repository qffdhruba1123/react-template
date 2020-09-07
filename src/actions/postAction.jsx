import { FETCH_DROOV_DATA, PUT_DROOV_DATA, DEL_DROOV_DATA } from "actions/types";
import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQSflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export const fetchDroovData = () => (dispatch) => {
  axios
    .get("https://dev.api.droov.io/play/users", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: FETCH_DROOV_DATA,
        payload: data,
      });
    });
};

export const putDroovData = (data) => (dispatch) => {
  const body = JSON.stringify(data);
  axios
    .post("https://dev.api.droov.io/play/users/add", body, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: PUT_DROOV_DATA,
        payload: data,
      });
    });
};

export const deleteDroovData = (userid) => (dispatch) => {
  axios
    .delete("https://dev.api.droov.io/play/users/"+userid, {
      headers: {
        Authorization: "Bearer "+ token
      },
    })
    .then((res) => res.data)
    .then((data) => {
      dispatch({
        type: PUT_DROOV_DATA,
        payload: data,
      });
    });
};