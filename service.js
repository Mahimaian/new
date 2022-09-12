import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'

/******* URL Info *********/

let url = "http://si0engubudoct09.de.bosch.com:9000/restapi";

/******** Set Header ******/

function head(header) {
  if (header === null || header === undefined) header = "Token 0";
  const ob = { Authorization: "Token " + header };
  return ob;
}

/******* Auth API's *******/

function userLogin(data) {
  return axios.post(`${url}/api-token-auth/`, data, { timeout: 100000 });
}


/****** SSP API - user UI *******/


function getFeatures(header) {
  return axios.get(`${url}/api/SSPFeatures/`, {
    headers: head(header),
    timeout: 30000,
  });
}
export {
  userLogin, 
  getFeatures,
};
