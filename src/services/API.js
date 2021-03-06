import axios from 'axios';

const URL_BASE = process.env.REACT_APP_BASE_URL;

function createHeaders(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
}

function postSignUp(body) {
  const promise = axios.post(`${URL_BASE}/sign-up`, body);
  return promise;
}

function postSignIn(body) {
  const promise = axios.post(`${URL_BASE}/sign-in`, body);
  return promise;
}

function requestSignOut(token) {
  const config = createHeaders(token);
  const promise = axios.delete(`${URL_BASE}/sign-out`, config);
  return promise;
}

function getTransactions(token) {
  const config = createHeaders(token);
  const promise = axios.get(`${URL_BASE}/transactions`, config);
  return promise;
}

function postNewEarning(body, token) {
  const config = createHeaders(token);
  const promise = axios.post(`${URL_BASE}/transactions`, body, config);
  return promise;
}

function postNewExpense(body, token) {
  const config = createHeaders(token);
  const promise = axios.post(`${URL_BASE}/transactions`, body, config);
  return promise;
}

function deleteTransaction(transactionId, token) {
  const config = createHeaders(token);
  const promise = axios.delete(`${URL_BASE}/transactions/${transactionId}`, config);
  return promise;
}

function updateTransaction(transactionId, token, body) {
  const config = createHeaders(token);
  const promise = axios.put(`${URL_BASE}/transactions/${transactionId}`, body, config);
  return promise;
}

export {
  postSignUp,
  postSignIn,
  requestSignOut,
  getTransactions,
  postNewEarning,
  postNewExpense,
  deleteTransaction,
  updateTransaction,
};
