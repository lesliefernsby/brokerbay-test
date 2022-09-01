import { createSlice, Dispatch } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { TUser, TUserError } from "./types";
import userService from "../service/user.service";

// Define a type for the slice state
interface UsersState {
  loading: boolean;
  users: [TUser] | null ;
  error: TUserError | null;
  sortedDesc: boolean;
}

const initialState: UsersState = {
  loading: false,
  users: null,
  error: null,
  sortedDesc: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchRequest: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action: PayloadAction<[TUser]>) => {
      state.loading = false;
      state.users = action.payload;
      state.error = null;
    },
    fetchFailure: (state, action: PayloadAction<TUserError>) => {
      state.loading = false;
      state.users = null;
      state.error = action.payload;
    },
    sort: (state, action) => {
      let comparator: 1 | -1;
      if (!state.sortedDesc) comparator = 1;
      else comparator = -1;
      switch (action.payload) {
        case "firstName":
          state.users?.sort((a, b) =>
            a.firstName < b.firstName ? comparator : -comparator
          );
          state.sortedDesc = !state.sortedDesc;
          break;
        case "lastName":
          state.users?.sort((a, b) =>
            a.lastName < b.lastName ? comparator : -comparator
          );
          state.sortedDesc = !state.sortedDesc;
          break;

        case "email":
          state.users?.sort((a, b) =>
            a.email < b.email ? comparator : -comparator
          );
          state.sortedDesc = !state.sortedDesc;
          break;

        case "phone":
          state.users?.sort((a, b) =>
            a.phone < b.phone ? comparator : -comparator
          );
          state.sortedDesc = !state.sortedDesc;
          break;
        default:
          break;
      }
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users?.splice(state.users?.findIndex(user => user.id === action.payload), 1);
    },
  },
});

export const { fetchRequest, fetchSuccess, fetchFailure, sort, deleteUser } =
  userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export const fetchAllAction = () => async (dispatch: Dispatch) => {
  dispatch(fetchRequest());
  userService.getAllUsers().then(
    (data) => {
      dispatch(fetchSuccess(data));
    },
    (error) => {
      dispatch(fetchFailure(error.response?.data));
    }
  );
};

export const deleteUserAction = (id: number) => async (dispatch: Dispatch) => {
  userService.deleteUser(id).then(
    (data) => {
      dispatch(deleteUser(id));
    },
    (error) => {
      dispatch(fetchFailure(error.response?.data));
    }
  );
};
