import axios from './axiosInterceptor';
import API from "../apiConstant";

export function sampleApiRequest() {
  return new Promise((res, rej) => {
    axios
      .get(`/users`)
      .then((response) => {
        return res(response);
      })
      .catch((err) => {
        return rej(err);
      })
  })

}
export function sampleApiUserDetailsRequest(id) {
  return new Promise((res, rej) => {
    axios
      .get(`/posts/${id}`)
      .then((response) => {
        return res(response);
      })
      .catch((err) => {
        return rej(err);
      })
  })

}