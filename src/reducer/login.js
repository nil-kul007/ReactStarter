const initialState = {
  username: '',
  password: '',
  loginAlert: '',
  loginstatus: false,
};

function login(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_DTL':
      let loginstatus = false;
      let loginAlert = '';
      if (
        action.payload.uName === 'Admin' &&
        action.payload.password === 'Admin'
      ) {
        loginstatus = true;
      } else {
        loginAlert = 'Incorrect username or password.';
        loginstatus = false;
      }
      return {
        ...state,
        username: action.payload.uName,
        password: action.payload.password,
        loginAlert,
        loginstatus,
      };
    default:
      return state;
  }
}

export default login;
