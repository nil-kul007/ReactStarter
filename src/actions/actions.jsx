export function addItem(text) {
  return { type: 'ADD_ITEM', text };
}

export function loginDetails(uName, password) {
  return { 
    type: 'LOGIN_DTL', 
    payload: {
      uName,
      password,
    }
};
}

export default {
  addItem,
  loginDetails,
}