let auth = false;
let www = "";

function setAuth(val) {
  auth = val;
}

function getAuth() {
  return auth;
}

export { getAuth, setAuth};