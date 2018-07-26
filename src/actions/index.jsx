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
export function submitRegister(data) {
  console.log(data)
}

export default {
  addItem,
  loginDetails,
  submitRegister
}