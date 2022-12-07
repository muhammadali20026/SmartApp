/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  isLoggedIn: false,
  id: -1,
  username: '',
  password: '',
  token: '',
  email: '',
};

const AuthState = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLoginResponse: (state) => {
      return {
        ...state,
        isLoadingVisible: true,
      };
    },
    logOut: (state) => {
      return {
        ...state,
        isLoadingVisible: true,
      };
    },
    
    requestRegister: (state, action) => {
      return {
        ...state,
        // id: action.payload.id,
        // username: action.payload.name,
        // email: action.payload.email,
        // token: action.payload.token,
        // provider: 'email',
        isLoggedIn: true,
      };
    },
    
  },
});

export const {onLoginResponse, logOut, requestRegister} = AuthState.actions;
export default AuthState.reducer;
